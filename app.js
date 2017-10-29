var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var app = express();
var user = require("./routes/userRoute");
var events = require("./routes/events");
var eventsUser = require("./routes/user_events")



app.use(bodyParser.json());
app.use(router);
app.use(user);
app.use(events);
app.use(eventsUser);

app.listen(3000, function(){
  console.log("Servidor Iniciado en puerto 3000")
});
