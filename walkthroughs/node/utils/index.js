const fs = require("fs");
const path = require("path");

function updateContactFile(contact) {
  let filePath = path.join(__dirname, "../misc/contacts.csv");
  let newLine = `${contact.name},${contact.message},${new Date().toString()}\n`;

  if (!fs.existsSync(filePath)) {
    newLine = "name,message,_created\n" + newLine;
  }

  fs.appendFile(filePath, newLine, (err) => {
    if (err) console.error(err);

    console.log("Successfully updated contacts");
  });
}

let MIMETypes = {
  ".js": "text/javascript",
  ".css": "text/css",
  ".png": "image/png",
  ".jpg": "image/jpg",
  ".jpeg": "image/jpeg",
  ".pdf": "text/pdf",
  ".gif": "image/gif",
  ".mp4": "video/mp4",
  ".html": "text/html",
};

function handleErrorResponse(err, res) {
  console.error(err);

  res.writeHead(err.statusCode || 500, {
    "Content-Type": "application/json",
  });
  res.write(
    JSON.stringify({
      name: err.name || "Unknown Error",
      msg: err.message || "An unexpected error has occurred.",
      _at: new Date().toString(),
    })
  );
  res.end();
}

module.exports = {
  MIMETypes,
  updateContactFile,
  handleErrorResponse,
};
