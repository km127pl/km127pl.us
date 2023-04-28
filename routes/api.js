import express from 'express';
const api = express.Router();
import mariadb from 'mariadb';
import adminApi from "./admin.js";

api.use('/admin', adminApi);

const pool = mariadb.createPool({
	//TODO:replace with env variables
	host: "127.0.0.1",
	user: "root",
	password: "12345678",
	database: "km127pl",
	connectionLimit: 10
});


api.get('/blog/posts', async (req, res) => {
	let connection;
	try {
		connection = await pool.getConnection();

		const posts = await connection.query("SELECT * FROM posts ORDER BY creation_date DESC LIMIT 10");

		res.json(posts);
	} catch (e) {
		res.send(e);
	}
});

api.get('/')

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