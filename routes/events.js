//Importing express
var express = require("express");
//We create the object to define routes
var router = express.Router();
//Import the model
var eventModel = require("../models/events");

router.get("/events", function(request,response){
  eventModel.getEvents(function(error,data){
    response.status(200).json(data);
  });
});

router.get("/events/:id", function(request, response){
  var id = request.params.id;
  eventModel.getEventById(id,function(request,data){
    if(data !== 'undefined' && data.length>0){
      response.status(200).json(data[0]);
    }
    else{
      response.status(404).json({"Mensaje":"No existe"});
    }
  });
});

router.post("/events", function(request, response){
  var dataEvent = {
    name: request.body.name,
    description: request.body.description,
    lat: request.body.lat,
    lon: request.body.lon,
    organizator:request.body.organizator
  };

  eventModel.insertEvent(dataEvent, function(error,data){
    if(data)
      response.status(200).json({"Mensaje":"Insert"});
    else
      response.status(500).json({"Mensaje":"Error en la insercion"});
  });
});
module.exports = router;
