import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();

// Serve static files from the "dist" folder
app.use(express.static('./dist'));

app.get('*', (req, res) => {
	console.log(`[${req.method}] on '${req.path}' at '${new Date(Date.now()).toISOString()}'`);
	res.sendFile(path.join(path.dirname(fileURLToPath(import.meta.url)), '/dist/index.html'));
});

app.listen(8080, () => {
	console.log('Server started on http://localhost:8080');
});