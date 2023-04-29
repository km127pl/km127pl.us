import express from 'express';
const api = express.Router();
import mariadb from 'mariadb';
import adminApi, { isLoggedIn } from "./admin.js";
import dotenv from 'dotenv';

dotenv.config();
// create a mariadb pool
const pool = mariadb.createPool({
	//TODO:replace with env variables
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	connectionLimit: parseInt(process.env.CONNECTION_LIMIT)
});

api.use('/admin', adminApi);

api.get('*', async (req, res, next) => {
	console.log(`[${req.method}] api${req.path} at ${new Date(Date.now()).toISOString()}`);
	next();
})

api.get('/blog/posts', async (req, res) => {
	let connection;
	try {
		connection = await pool.getConnection();

		const posts = await connection.query("SELECT * FROM posts ORDER BY creation_date DESC LIMIT 10");

		// Release the connection
		connection.release();

		res.json(posts);
	} catch (e) {
		res.status(500).json({
			message: 'Unexpected error has occured'
		});
	}
});

api.get('/blog/posts/:id', async (req, res) => {
	const id = req.params.id;

	let connection;
	try {
		connection = await pool.getConnection();

		const post = await connection.query("SELECT * FROM posts WHERE id = ?", [id]);

		// Release the connection
		connection.release();

		res.json(post);
	} catch (e) {
		res.status(500).json({
			message: 'Unexpected error has occured'
		});
	}
});


api.put('/blog/posts/:id', async (req, res) => {
	if (!isLoggedIn(req)) {
		return res.status(401).json({
			message: 'Unauthorized.'
		});
	}
	const postId = req.params.id;
	const { description, thumbnail, url, title } = req.body;
	try {
		// Get a connection from the pool
		const conn = await pool.getConnection();

		// Update the post in the database
		const result = await conn.query(`
      UPDATE posts 
      SET description = ?, thumbnail = ?, url = ?, title = ?, last_edited = NOW() 
      WHERE id = ?
    `, [description, thumbnail, url, title, postId]);

		// Release the connection
		conn.release();

		console.log(result);
		// Send the updated post as a response
		res.status(204).json({
			message: 'Post updated successfuly'
		})
	} catch (err) {
		console.error(err);
		res.status(503).json({ message: 'Error updating post.' });
	}
});

api.get("*", (req, res) => {
	return res.json({
		status: 'error',
		message: 'endpoint not found',
		data: {
			"key": "available endpoints",
			"value": ["/blog", "/blog/posts"]
		}
	});
});

export default api;