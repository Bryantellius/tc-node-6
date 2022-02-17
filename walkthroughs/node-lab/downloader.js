const { readFile, writeFile, existsSync, mkdirSync } = require("fs");
const { join, extname } = require("path");
const fetch = require("isomorphic-fetch");

async function downloadImage(url, id) {
  let res = await fetch(url);
  let data = await res.arrayBuffer();

  if (!existsSync("./downloads")) {
    mkdirSync("./downloads");
  }

  writeFile(
    join(__dirname, "./downloads", id + extname(url)),
    Buffer.from(data),
    (err) => {
      if (err) return console.log(err);

      console.log("Successfully downloaded from " + url);
    }
  );
}

let imageExts = [".jpg", ".jpeg", ".png", ".gif", ".mov", ".mp4"];

readFile(join(__dirname, "./popular-articles.json"), (err, data) => {
  if (err) return console.log(err);

  let { articles } = JSON.parse(data.toString());

  for (let { url, id } of articles) {
    if (imageExts.includes(extname(url))) {
      try {
        downloadImage(url, id);
      } catch (e) {
        console.error(e);
      }
    }
  }
});
