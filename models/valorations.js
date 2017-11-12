var conn = require("./connection");
var mysql = require("mysql");

connection = mysql.createConnection(conn);

var valorations = {}

valorations.getValorations = function(callback){
  if(connection){
    connection.query("SELECT t1.username as 'Sender', t2.username as 'receiver', rating FROM `valorations` INNER JOIN user t1 ON sender=t1.email INNER JOIN user t2 ON receiver=t2.email",
    function(error,rows){
      if(error){
        throw error;
      }
      else{
        callback(null,rows);
      }
    });
  }
}

valorations.getValorationsByReceiver = function(id,callback){
  if(connection){
    connection.query("SELECT t2.username as 'receiver',avg(rating) as 'media', t2.description, t2.profile_image FROM `valorations`INNER JOIN user t2 ON receiver=t2.email WHERE receiver='"+id+"' group by t2.username",
    function(error,rows){
      if(error)
        throw error;
      else {
        callback(null,rows);
      }
    })
  }

  valorations.insertValoration=function(valorationData, callback){
    if(connection){
      connection.quert("INSERT INTO valoration SET ?",valorationData, function(error,result){
        if(error){
          throw error;
        }
        else{
          callback(null, result.insertId);
        }
      });
    }
  }
}

module.exports = valorations;
