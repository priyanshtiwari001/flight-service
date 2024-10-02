const express = require('express');
const { CityController } = require('../../controllers');
const { CityMiddleware } = require('../../middlewares');
const router = express.Router();


// api/v1/city
router.post('/',CityMiddleware.validateRequest, CityController.createCity);


// api/v1/city :GEt ALL
router.get('/',CityController.getAllCities);

// api/v1/city : GET 1
router.get('/:id',CityController.getCity);

// api/v1/city :DELETE
router.delete('/:id',CityController.destroyCity);

// api/v1/city :update 
router.patch('/:id',CityController.updateCity);


module.exports=router;