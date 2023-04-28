import express from 'express';
const api = express.Router();
import mariadb from 'mariadb';
import adminApi from "./admin.js";
import { Config } from "../config.js";

// create a mariadb pool
const pool = mariadb.createPool({
	//TODO:replace with env variables
	host: Config.HOST,
	user: Config.USER,
	password: Config.PASSWORD,
	database: Config.DATABASE,
	connectionLimit: Config.CONNECTION_LIMIT
});

api.use('/admin', adminApi);

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