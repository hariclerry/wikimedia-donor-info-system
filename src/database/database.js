const mysql = require('mysql');

//Create db connection to mysql
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "clerry",
    database: "wikimediadb"
});
connection.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});
module.exports = connection;