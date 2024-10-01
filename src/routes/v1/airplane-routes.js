const express = require('express');
const router = express.Router();
const {AirplaneController} = require('../../controllers');



//* api/v1/airplanes : POST
 router.post('/',AirplaneController.createAirplane);


 //* api/v1/airplanes/:id : DELETE
 router.delete('/:id',AirplaneController.destroyAirplane);

 //* api/v1/airplanes : GETALL
 router.get('/',AirplaneController.getAllAirlines);

 //* api/v1/airplanes/:id : GET
 router.get('/:id',AirplaneController.getAirline);


 //*//* api/v1/airplanes/:id : PATCH
 router.patch('/:id',AirplaneController.updateAirline);



module.exports=router;
