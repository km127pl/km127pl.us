import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();

// Serve static files from the "dist" folder
app.use(express.static('./dist'));

app.get('*', (req, res) => {
	res.sendFile(path.join(path.dirname(fileURLToPath(import.meta.url)), '/dist/index.html'));
});

app.listen(80, () => {
	console.log('Server started on http://localhost');
});