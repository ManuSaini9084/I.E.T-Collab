
const mysql = require('mysql2');


module.exports = mysql.createConnection({
  host: '127.0.0.1', // replace with your MySQL server hostname or IP
  user: 'root', // your MySQL username
  password: 'Manu123', // your MySQL password
  database: 'studentsinfo'
 
});

