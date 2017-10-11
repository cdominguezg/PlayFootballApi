//Importamos los datos de la conexión
var conn=require('./connection');
//Importamos el paquete mysql
var mysql = require('mysql'),
//Creamos la conexión a nuestra base de datos con los datos almacenados en conn
connection = mysql.createConnection(
  conn
);

var events = {};

events.getEvents = function(callback){
  if(connection){
    connection.query("SELECT * FROM event", function(error,rows){
      if(error){
        throw error;
      }
      else{
        callback(null, rows);
      }
    });
  }
}

events.getEventById = function(id,callback){
  if(connection){
    connection.query("SELECT * FROM event WHERE id="+id, function(error, rows){
      if(error){
        throw error;
      }
      else{
        callback(null, rows);
      }
    });
  }
}

events.insertEvent = function(eventData,callback){
  if(connection){
    connection.query("INSERT INTO event SET ?",eventData, function(error,result){
      if(error){
        throw error;
      }
      else{
        callback(null,result.insertId);
      }
    });
  }
}

events.deleteEvent = function(id,callback){
  if(connection){
    connection.query("DELETE FROM event WHERE id="+id, function(error, result){
      if(error){
        throw error;
      }
      else{
        callback(null, {"mensaje":"event deleted"});
      }
    });
  }
}

//TODO: implement updateEvent method
/*events.updateEvent = function(eventData, callback){
  if(connection){
    connection.query("UPDATE event SET ")
  }
}*/
