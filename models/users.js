//Importamos los datos de la conexión
var conn=require('./connection');
//Importamos el paquete mysql
var mysql = require('mysql'),
//Creamos la conexión a nuestra base de datos con los datos almacenados en conn
connection = mysql.createConnection(
  conn
);
//Creamos un objeto al que llamaremos usuarios
var users = {};


//Obtenemos todos los usuarios
users.getUsers = function(callback){
  if (connection)
  {
    connection.query('SELECT * FROM user', function(error, rows) {
      if(error)
      {
        throw error;
      }
      else
      {
        callback(null, rows);
      }
    });
  }
}

//Get user by id
users.getUserById = function(id,callback){
  console.log("SELECT * FROM user WHERE EMAIL='"+id+"'");
  if(connection){
    connection.query("SELECT * FROM user WHERE email='"+id+"'", function(error,rows){
      if(error){
        throw error;
      }
      else{

        var jsonString={};
        jsonString.stuff=rows;
        console.log(jsonString)
        callback(null, rows);
      }
    });
  }
}

users.insertUser = function(userData,callback){
  if(connection){
    connection.query("INSERT INTO user SET ?",userData, function(error,result){
      if(error){
        throw error;
      }
      else{
        callback(null, userData.email);
      }
    });
  }
}

users.deleteUser = function(id,callback){
  if(connection){
    connection.query("DELETE FROM user EMAIL='"+id+"'", function(error,result){
      if(error){
        throw error;
      }
      else{
        callback(null,{"mensaje":"borrado"});
      }
    })
  }
}

/*users.updateUser = function(userData, callback){
  if(connection){

  }
}*/
//Actualizar un usuario
/*usuarios.updateUsuario = function(datosUsuario, callback)
{


if(connection)
{
var sql = 'UPDATE usuarios SET nombre = ' + connection.escape(datosUsuario.nombre)  +' WHERE id = ' + datosUsuario.id;
connection.query(sql, function(error, result)
{
if(error)
{
throw error;
}
else
{
callback(null,{"mensaje":"Actualizado"});
}
});
}

}


//Eliminar un usuario por su id
usuarios.deleteUsuario = function(id, callback)
{
if(connection)
{
var sql = 'DELETE FROM usuarios WHERE id = ' + connection.escape(id);
connection.query(sql, function(error, result)
{
if(error)
{
throw error;
}
else
{
callback(null,{"mensaje":"Borrado"});
}
});
}


}*/


module.exports =users;
