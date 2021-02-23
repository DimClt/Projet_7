let mysql = require('mysql');

let dbConnect = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'groupomania'
});

dbConnect.connect();

module.exports = dbConnect;