var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var app = express();
var user = require("./routes/userRoute");
var index = require("./routes/index");



app.use(bodyParser.json());
app.use(router);
app.use(user);

app.listen(3000, function(){
  console.log("Servidor Iniciado en puerto 3000")
});
