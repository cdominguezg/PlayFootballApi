var express = require("express");
var router = express.Router();

var valorationsModel = require("../models/valorations");

router.get("/valorations/receiver/:id", function(request,response){
  var id = request.params.id;

  valorationsModel.getValorationsByReceiver(id,function(error,datos){
    if (typeof datos !== 'undefined' && datos.length > 0)
    {
      response.status(200).json(datos[0]);
    }
    else
    {
      response.status(404).json({"Mensaje":"No existe"});
    }
  })

});

module.exports = router;
