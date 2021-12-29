const mysql = require("mysql");
require("dotenv").config({ path: ".env" });

const mysqlConnection = mysql.createConnection({
  host: "localhost",
  port: process.env.PORTMYSQL,
  user: `${process.env.USERMYSQL}`,
  password: `${process.env.PASSMYSQL}`,
  database: "P7",
  multipleStatements: true,
});
mysqlConnection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log(`MySql Connected on port ${process.env.PORTMYSQL}`);
});

module.exports = mysqlConnection;
