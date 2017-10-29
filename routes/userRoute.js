//Importamos express
var express = require('express');
//Creamos el objeto para definir las rutas
var router = express.Router();
//Importamos el modelo que ejecutará las sentencias SQL
var usersModel = require('../models/users');
//Coger todos los users
router.get('/user', function(request, response) {

usersModel.getUsers(function(error, data)
{
response.status(200).json(data);
});
});
//Coger user por id
router.get('/user/:id', function(request, response) {

var id = request.params.id;
console.log(id);
usersModel.getUserById(id,function(error, datos)
{


    if (typeof datos !== 'undefined' && datos.length > 0)
    {
      response.status(200).json(datos[0]);
    }
    else
    {
      response.status(404).json({"Mensaje":"No existe"});
    }
  });
});

//Insertar user
/*
Ejemplo de uso:
en el Body:
{
"nombre": "user de Prueba"
}


*/
router.post('/user', function(request, response) {
var datosuser = {
username : request.body.username,
email: request.body.email,
profile_image: request.body.profile_image
};
usersModel.insertUser(datosuser,function(error, datos)
{
if(datos)
{
response.status(200).json({"Mensaje":"Insertado"});
}
else
{
response.status(500).json({"Mensaje":"Error"});
}
});
});


//Modificar un user
router.put('/user/:id', function(request, response) {

  var datosuser = {
  username : request.body.username,
  email: request.body.email,
  };


usersModel.updateUser(datosuser,function(error, datos)
{
  //si el user se ha actualizado correctamente mostramos un mensaje
  if(datos && datos.mensaje)
  {
    response.status(200).json(datos);
  }
  else
  {
    response.status(500).json({"mensaje":"Error"});

  }
});

});
//Borrar un user


router.delete('/user/:id', function(request, response) {

var id = request.params.id;
usersModel.deleteUser(id,function(error, datos)
{
if(datos && datos.mensaje === "Borrado")
{
response.status(200).json(datos);
}
else
{
response.status(500).json({"mensaje":"Error"});
}
});


});


module.exports = router;
