#!/usr/bin/node
import express from "express";
import sass from "sass";
import { writeFile, readdir } from "fs/promises";
const app = express();

app.use("/public", express.static("./public/"));
app.set("view-engine", "ejs");
app.delete("x-powered-by");

async function renderScss() {
	const directory = await readdir("./public/scss");
	directory.map((file) => {
		render(file);
	})
	function render(file) {
		sass.render({
			outputStyle: "compressed",
			file: `./public/scss/${file}`
		}, (err, result) => {
			if (err) return console.error(err);
			writeFile(`./public/css/${file.split(".scss").join(".css")}`, result.css.toString(), {
				encoding: "utf-8"
			});
		})
	}
}

renderScss();

app.get("/", (req, res) => {
	return res.render("index.ejs");
});

app.listen(8080, () => {
	console.info("Listening on http://localhost:8080");
});
