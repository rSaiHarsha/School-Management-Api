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
    const createTableQuery = `
     CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
)`;

   
db.query(createTableQuery, (err, results) => {
        if (err) {
            console.error('Error creating table: ', err);
            process.exit(1);  // Exit process with failure
        }
        console.log('Table created or already exists');
    });
});
db.connect(err => {
    if (err) {
        console.error('Database connection failed: ', err);
        process.exit(1);  // Exit process with failure
    }
    console.log('Connected to the MySQL database');
});




module.exports = db;
