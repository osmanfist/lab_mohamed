const mysql = require('mysql2');

// Create a connection pool
const db = mysql.createPool({
  host: '127.0.0.1',    // MySQL host
  user: 'root',          // your MySQL username
  password: '0126', // replace with root password
  database: 'task_list_db'       // database we just created
});

// Test connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL database!');
    connection.release(); // release the connection back to the pool
  }
});

module.exports = db;
