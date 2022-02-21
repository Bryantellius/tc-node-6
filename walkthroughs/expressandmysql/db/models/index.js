const mysql = require("mysql");

const mysqlConfig = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "bestbuy",
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
