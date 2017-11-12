var mysql = require("mysql");
var conn = require("./connection");
connection = mysql.createConnection(
  conn
);

var user_events = {};

user_events.getEventsUserByID = function(id,callback){
  if(connection){
    connection.query("SELECT * FROM user_event INNER JOIN user ON user.email=id_user WHERE id_event="+id, function(error, rows){
      if(error){
        throw error;
      }
      else{
        callback(null,rows);
      }
    });
  }
}

user_events.getEventsUserByUser = function(id,callback){
  if(connection){
    connection.query("SELECT * FROM user_event INNER JOIN user ON user.email=id_user INNER JOIN event e ON id_event=e.id INNER JOIN places on places.id_place=e.id_place WHERE id_user='"+id+"'", function(error, rows){
      if(error){
        throw error;
      }
      else{
        callback(null,rows);
      }
    });
  }
}

module.exports = user_events;
