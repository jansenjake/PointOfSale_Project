const mysql = require("mysql");
require('dotenv').config();

//  CREATE THE CONNECTION TO DATABASE //

const db = mysql.createConnection({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPass,
    database: process.env.dbName
});

module.exports = db;
