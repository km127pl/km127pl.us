/* eslint-disable no-undef */
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
import session from 'express-session';
import api from './routes/api.js';
import dotenv from 'dotenv';
import MySQLSession from 'express-mysql-session';
import http from 'http';
import https from 'https';
import { readFileSync } from 'fs';
const MySQLStore = MySQLSession(session);

const ssl = {
	key: readFileSync(`./ssl/${process.env.DOMAIN}.key`),
	cert: readFileSync(`./ssl/${process.env.DOMAIN}.pem`)
}

dotenv.config();

const sessionStore = new MySQLStore({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	port: 3306
})

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('trust proxy', 1)
app.use(session({
	secret: process.env.COOKIE_SECRET,
	resave: false,
	saveUninitialized: true,
	store: sessionStore,
	cookie: {
		secure: false,
		path: '/',
		maxAge: parseInt(process.env.COOKIE_AGE)
	},
	name: "km"
}))


// Serve static files from the "dist" folder
app.use(express.static('./dist'));
app.use("/api", api);
app.delete("x-powered-by");

app.get('*', (req, res) => {
	console.log(`[${req.method}] on '${req.path}' at '${new Date(Date.now()).toISOString()}'`);
	res.sendFile(path.join(path.dirname(fileURLToPath(import.meta.url)), '/dist/index.html'));
});

sessionStore.onReady().then(() => {
	console.log('MySQLStore started');
}).catch(error => {
	console.error(error);
});

const _http = http.createServer(app);
const _https = https.createServer(ssl);

_http.listen(process.env.WEB_PORT);
_https.listen(process.env.WEB_PORT_SSL);

console.log(`Listening on: `)
console.log(`	https://${process.env.DOMAIN}:${process.env.WEB_PORT_SSL}`);
console.log(`	http://127.0.0.1:${process.env.WEB_PORT}`);