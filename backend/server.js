const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
const jwt = require('jsonwebtoken');
const connection = require('./config/connection');
const register = require('./controller/authController');
const bodyParser = require('body-parser');




  app.use(bodyParser.json());

  app.use(cors());
  app.use(express.json());

  connection.connect(function(err) {
    if (err) {
      console.error('Kết nối thất bại: ' + err.stack);
      return;
    }
    console.log('Kết nối thành công với ID: ' + connection.threadId);

  });

  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});


app.post('/register', register);

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) return res.status(500).send('Server error');
      if (results.length === 0) return res.status(404).send('User not found');

      const user = results[0];
      const passwordIsValid = bcrypt.compareSync(password, user.password);

      if (!passwordIsValid) return res.status(401).send('Invalid password');

      const token = jwt.sign({ id: user.id }, 'your_secret_key', { expiresIn: 86400 });
      res.status(200).send({ auth: true, token });
  });
})

  app.listen(8001, () => {
    console.log(`Server running at http://localhost:8001/`);
  });
  