/* eslint-disable no-undef */
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
import session from 'express-session';
import api from './routes/api.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('trust proxy', 1)
console.log(process.env.COOKIE_AGE)
app.use(session({
	secret: process.env.COOKIE_SECRET,
	resave: false,
	saveUninitialized: true,
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

app.listen(process.env.WEB_PORT, () => {
	console.log('Server started on http://localhost:' + process.env.WEB_PORT);
});