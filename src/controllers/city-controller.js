const { OK, CREATED, INTERNAL_SERVER_ERROR } = require("http-status-codes");
const { CityService } = require("../services");
const { SuccessResponse, ErrorResponse } = require("../utils/common");


async function createCity(req,res){
    try {
        const city = await CityService.createCity({
            name:req.body.name
        });
        SuccessResponse.data=city;
        return res.status(CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}


async function getAllCities(req,res){
   try {
    const cities = await CityService.getCities();
    SuccessResponse.data=cities;
    return res.status(OK).json(SuccessResponse);
   } catch (error) {
    ErrorResponse.error=error;
        return res.status(INTERNAL_SERVER_ERROR).json(ErrorResponse);
   }
}

async function getCity(req,res){
    try {
     const city = await CityService.getCity(req.params.id);
     SuccessResponse.data=city;
     return res.status(OK).json(SuccessResponse);
    } catch (error) {
     ErrorResponse.error=error;
         return res.status(INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
 }
 
 async function destroyCity(req,res){
    try {
     const city = await CityService.destroyCity(req.params.id);
     SuccessResponse.data=city;
     return res.status(OK).json(SuccessResponse);
    } catch (error) {
        console.log(error);
     ErrorResponse.error=error;
         return res.status(INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
 }
 
 



async function updateCity(req,res){
    try {
        const city = await CityService.updateCity({
            name:req.body.name
        },req.params.id);
        SuccessResponse.data=city;
        return res.status(OK).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error=error;
        return res.status(INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}


module.exports={
    createCity,
    getAllCities,
    getCity,
    updateCity,
    destroyCity
}