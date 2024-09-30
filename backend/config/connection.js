const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Anhdung001',
    database: 'ecommerce'
  });


  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

module.exports = connection;