var express = require ("express");
var router = express.Router();

var commentsModel = require("../models/comment");

router.get("/comments/receiver/:id", function(request,response){
  var id = request.params.id;

  commentsModel.getCommentsByReceiver(id, function(error,datos){
      if (typeof datos !== 'undefined' && datos.length > 0)
      {
        response.status(200).json(datos);
      }
      else
      {
        response.status(404).json({"Mensaje":"No existe"});
      }
  });

});

router.post("/comments", function(request,response){
  var data ={
    content:request.body.content,
    sender:request.body.sender,
    receiver:request.body.receiver
  };

  commentsModel.insertComment(data, function(error,data){
    if(data)
      response.status(200).json({"Mensaje":"insert"});
    else {
      response.status(500).json({"Mensaje":"error"});
    }
  })


});

module.exports = router;
