var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "j21q532mu148i8ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "xgtye46pakpfr4ly",
    password: "azawotd57gzrq3p3",
    database: "ae3hrhbpv7ogizgy",
    dialect: "mysql"
});



connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

module.exports = connection;