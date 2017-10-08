//Importing connection data
var conn = require("./connection");
//Import MySQL packet
var mysql = require("mysql");

//We create the connection to our database
connection = mysql.createConnection(conn);

//List all users 
