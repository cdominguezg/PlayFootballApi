var express = require("express");
var router = express.Router();

var eventUserModel = require("../models/user_event")

router.get("/user_events/event/:id", function(request,response){
  var id = request.params.id;
  eventUserModel.getEventsUserByID(id, function(request,data){
    if(data!=='undefined' && data.length>0){
      response.status(200).json(data);
    }
    else {
      response.status(404).json({"Mensaje":"No existe"});
    }
  })
});

router.get("/user_events/user/:id", function(request, response){
  var id= request.params.id;
  eventUserModel.getEventsUserByUser(id,function(request,data){
    if(data!=='undefined' && data.length>0){
      response.status(200).json(data);
    }
    else {
      response.status(404).json({"Mensaje":"No existe"});
    }
  })
})

module.exports = router;
