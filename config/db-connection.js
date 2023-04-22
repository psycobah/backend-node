const mysql = require("mysql2/promise");
const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } = require("./config");

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = pool;
