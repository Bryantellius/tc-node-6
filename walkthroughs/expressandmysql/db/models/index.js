const mysql = require("mysql");
const dotenv = require("dotenv");

let envFound = dotenv.config();

if (!envFound) throw new Error("Cannot read .env file.");

const mysqlConfig = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

const connection = mysql.createPool(mysqlConfig);

const Query = (query, values) => {
  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = Query;
