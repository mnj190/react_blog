const mysql = require('mysql');

const db = mysql.createPool({
    host: 'react.cskgrz8ijguz.ap-northeast-2.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'q1w2e3r4',
    database: 'react_db'
});

module.exports = db;