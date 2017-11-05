var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var app = express();
var user = require("./routes/userRoute");
var events = require("./routes/events");
var eventsUser = require("./routes/user_events");
var valorations = require("./routes/valorations");
var comments = require("./routes/comments")

app.use(bodyParser.json());
app.use(router);
app.use(valorations);
app.use(user);
app.use(events);
app.use(eventsUser);
app.use(comments);

app.listen(3000, function(){
  console.log("Servidor Iniciado en puerto 3000")
});
