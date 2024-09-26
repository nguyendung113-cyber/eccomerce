const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();


const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Anhdung001',
    database: 'ecommerce'
  });

  app.use(cors());
  app.use(express.json());

  connection.connect(function(err) {
    if (err) {
      console.error('Kết nối thất bại: ' + err.stack);
      return;
    }
    console.log('Kết nối thành công với ID: ' + connection.threadId);

  });


app.post('/login', (req, res) => {
    const query = 'SELECT * FROM users WHERE email = ? AND password = ?';

    connection.query(query,[req.body.email ,req.body.password], (err, result) => {
        if(err) return res.json("error");
        if(result.length > 0)  {
            return res.json("Login success");
        }else{
            return res.json("Login failed");
        }
    });
  });


  app.listen(8001, () => {
    console.log(`Server running at http://localhost:8001/`);
  });
  