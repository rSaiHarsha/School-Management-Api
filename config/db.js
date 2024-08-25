const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: 5432,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
  // SQL query to create a table if it doesn't already exist
db.connect(err => {
    if (err) {
        console.error('Database connection failed: ', err);
        process.exit(1);  // Exit process with failure
    }
    console.log('Connected to the MySQL database');
});




module.exports = db;
