const mysql = require("mysql2");
const { Connection } = require("mysql2/typings/mysql/lib/Connection");
Connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "article",
    password: ""
}).promise();
connection.connect(function(err){
    if(err) {
        return console.error("Ошибка: " + err.message);
    }
    else {
        console.log("подключение к серверу MySQL успешно установлено");
    }
});
module.exports = connection;