var express = require("express");
var router = express.Router();
var app = express();

router.get('/', function(request, response){
  response.status(200).json({"mensaje":"Mensaje de prueba"});
});

app.use(router);

app.listen(3000, function(){
  console.log("Servidor Iniciado")
});
