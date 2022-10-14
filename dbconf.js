const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "postgres://my_poll_user:bcntGadORJ1ACDwqibqKI3NpMbNKkfcv@dpg-cd4ibdqrrk02t5f1ibng-a.oregon-postgres.render.com/my_poll",
  user: "my_poll_user",
  password: "bcntGadORJ1ACDwqibqKI3NpMbNKkfcv",
  database: "my_poll",
  port: 5432,
});

/*const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "mypoll",
  port: 3308,
}); */

connection.connect((error) => {
  if (error) {
    console.log("database connection fail");
  }
});

module.exports = connection;
