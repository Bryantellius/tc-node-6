const fs = require("fs");

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

module.exports = {
  MIMETypes,
  updateContactFile,
};