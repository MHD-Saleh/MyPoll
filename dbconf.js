const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "mypoll",
  port: 3308,
});

connection.connect((error) => {
  if (error) {
    console.log("database connection fail");
  }
});

module.exports = connection;
