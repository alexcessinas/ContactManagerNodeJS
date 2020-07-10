const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "contactManager",
  password: "contactManager",
  database: "contactManager",
});
connection.connect(function(err) {
    if (err) {
        throw err;
    }
    console.log("Database connected !");
    
});

module.exports = connection;