
const {AirplaneService} = require('../services');
const {CREATED,INTERNAL_SERVER_ERROR, OK} = require('http-status-codes');
const { ErrorResponse,SuccessResponse } =require( '../utils/common');


 async function createAirplane(req,res){
    try {
       const airplane = await AirplaneService.createAirline({
        modelName: req.body.modelName,
        capacity:req.body.capacity
       });
      SuccessResponse.data=airplane;

        return res.status(CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
};

async function destroyAirplane(req,res){
    try {
        const airplane = await AirplaneService.destroyAirline(req.params.id);
        SuccessResponse.data=airplane;
        // console.log(SuccessResponse);
        return res.status(OK).json(SuccessResponse);
    } catch (error) {
       ErrorResponse.error=error;
        return res.status(INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}

async function getAllAirlines(req,res){
    try {
        const airplanes = await AirplaneService.getAirlines();
        SuccessResponse.data=airplanes;
        return res.status(OK).json(SuccessResponse);
    } catch (error) {
       
        return res.status(INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}


async function getAirline(req,res){
    try {
        const airplane = await AirplaneService.getAirline(req.params.id);
        SuccessResponse.data=airplane;
        return res.status(OK).json(SuccessResponse);
    } catch (error) {
       ErrorResponse.error=error;
        return res.status(INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}



async function updateAirline(req,res){
    try {
        const airplane = await AirplaneService.updateAirline({
            modelName:req.body.modelName,
            capacity:req.body.capacity
        },req.params.id);
        console.log(req.body);
        SuccessResponse.data=airplane;
        console.log(airplane);
        return res.status(OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
       console.log(error);
        return res.status(INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}





module.exports={createAirplane,destroyAirplane,getAllAirlines,updateAirline,getAirline}
