const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail } = require('../models/user');

const register = (req, res) => {
  const { firstname, lastname, email, password, confirmPassword, numberphone } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  findUserByEmail(email, (err, results) => {
    if (results.length > 0) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const hashedPassword = bcrypt.hashSync(password, 8);
    const newUser = { firstname, lastname, email, password: hashedPassword, numberphone, role: 'user' };

    createUser(newUser, (err, results) => {
      if (err) return res.status(500).json({ message: 'Database error' });

      const token = jwt.sign({ id: results.insertId, role: 'user' }, 'JWT_SECRET', { expiresIn: '1h' });
      res.status(201).json({ token });
    });
  });
};

module.exports = register;