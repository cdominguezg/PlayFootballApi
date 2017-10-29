var conn = require("connection");
var mysql = require("mysql");

var connection = mysql.createConnection(conn);

var message={};

//Get all messages
message.getMessages = function(callback){
  if(connection){
    connection.query("SELECT * FROM message",(error,rows){
      if(error){
        throw error;
      }
      else{
        callback(null,rows);
      }
    });
  }
}

message.getMessageBySender = function(id,callback){
  if(connection){
    connection.query("SELECT * FROM message WHERE sender='"+id+"'",(error,rows){
      if(error){
        throw error;
      }
      else{
        callback(null, rows);
      }
    });
  }
}

message.getMessageByReceiver = function(id,callback){
  if(connection){
    connection.query("SELECT * FROM message WHERE receiver='"+id+"'",(error,rows){
      if(error){
        throw error;
      }
      else{
        callback(null, rows);
      }
    });
  }
}

message.getMessageById = function(id,callback){
  if(connection){
    connection.query("SELECT * FROM message WHERE id_message='"+id+"'",(error,rows){
      if(error){
        throw error;
      }
      else{
        callback(null, rows);
      }
    });
  }
}

message.insertMessage = function(messageData,callback){
  if(connection){
    connection.query("INSERT INTO message SET ?",messageData, function(error,result){
      if(error){
        throw error;
      }
      else{
        callback(null,result.insertId);
      }
    });
  }
}

message.deleteMessage = function(id,callback){
  if(connection){
    connection.query("DELETE FROM message WHERE id_message='"+id+"'",(error,rows){
      if(error){
        throw error;
      }
      else{
        callback(null,{"mensaje":"borrado"});
      }
    });
  }
}

module.exports = message;
