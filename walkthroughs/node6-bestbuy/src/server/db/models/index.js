import mysql from "mysql";
import config from "../../config";

const connection = mysql.createPool(config.mysql);

const query = (query, values) => {
  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

export default query;
