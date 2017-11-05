var conn = require("./connection");
var mysql = require("mysql");

var connection = mysql.createConnection(conn);

var comments = {};

comments.getComments = function(callback){
  if(connection){
    connection.query("SELECT * FROM comment",function(error, rows){
      if(error)
        throw error;
      else {
        callback(null,rows);
      }
    });
  }
}

comments.getCommentsByReceiver = function(id,callback){
  if(connection){
    connection.query("SELECT t2.username as 'sender',content, t2.profile_image FROM `comment`INNER JOIN user t2 ON sender=t2.email WHERE receiver='"+id+"'",function(error,rows){
      if(error){
        throw error;
      }
      else{
        console.log(rows);
        callback(null, rows);
      }
    });
  }
}

comments.getCommentsBySender = function(id,callback){
  if(connection){
    connection.query("SELECT * FROM comment WHERE sender='"+id+"'",function(error,rows){
      if(error){
        throw error;
      }
      else{
        callback(null, rows);
      }
    });
  }
}

comments.insertComment = function(commentData,callback){
  if(connection){
    connection.query("INSERT INTO comment SET ?",commentData, function(error,result){
      if(error){
        throw error;
      }
      else{
        callback(null,result.insertId);
      }
    });
  }
}

comments.deleteComment = function(id,callback){
  if(connection){
    connection.query("DELETE FROM comment WHERE id_comment='"+id+"'",function(error,rows){
      if(error){
        throw error;
      }
      else{
        callback(null,{"mensaje":"borrado"});
      }
    });
  }
}

module.exports= comments;
