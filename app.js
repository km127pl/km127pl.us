import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";
import session from 'express-session';
import api from './routes/api.js';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('trust proxy', 1)
app.use(session({
	secret: "1fdd12e", // CHANGE ME ON PRODUCTION
	resave: false,
	saveUninitialized: true,
	cookie: {
		secure: false,
		path: '/',
		maxAge: 3600 * 60 * 60 * 24
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

app.listen(8080, () => {
	console.log('Server started on http://localhost:8080');
});