import { Router } from 'express';
const admin = Router();
import mariadb from 'mariadb';
import { compare } from 'bcrypt';
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

/**
 * Check if a person is logged in
 * @param {*} req  the request 
 * @returns  a boolean
 */
export const isLoggedIn = (req) => {
	if (!req.session || !req.session.user || !req.session.user.loggedIn) return false;
	if (req.session.user.loggedIn) return true;
}

/**
 * Return information about the session
 * @method GET
 * @route /api/admin/session
 * @returns {
 * 	loggedIn: boolean
 * } : JSONObject
 */
admin.get('/session', async (req, res) => {
	return res.json({
		loggedIn: isLoggedIn(req)
	})
})

/**
 * Try to login
 * @method POST
 * @route /api/admin/login
 * @params user: string, pass: string
 */
admin.post('/login', async (req, res) => {
	if (isLoggedIn(req)) {
		return res.redirect("/admin/blog");
	}
	if (!req.body["username"] || !req.body["password"]) return res.redirect("/admin/login?code=0x00"); // "invalid username or password"

	let connection;
	try {
		connection = await pool.getConnection();

		const query = await connection.query("SELECT username, password FROM admin WHERE username = ?", [req.body["username"]]);
		const hash = query[0].password;


		compare(req.body["password"], hash).then((isCorrect) => {
			if (isCorrect) {
				req.session.user = {
					username: query[0].username,
					loggedIn: true
				};

				return res.redirect("/admin/blog");
			} else {
				return res.redirect("/admin/login?code=0x00"); // "invalid username or password"
			}
		})
	} catch (e) {
		return res.redirect("/admin/login?code=0x01"); // "unknown database error"
	}
})

export default admin;