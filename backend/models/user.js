const connection = require('../config/connection');

const user = {
    createUser: (userData, callback) => {
        const sql = 'INSERT INTO users SET ?';
        connection.query(sql, userData, callback);
    },
    findUserByEmail: (email, callback) => {
        const sql = 'SELECT * FROM users WHERE email = ?';
        connection.query(sql, [email], callback);
    }
};

module.exports = user;
