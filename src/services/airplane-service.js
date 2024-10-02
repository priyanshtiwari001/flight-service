const { BAD_REQUEST, INTERNAL_SERVER_ERROR, NOT_FOUND } = require('http-status-codes');
const { Logger } = require('../config');
const {AirplaneRepository} = require('../repositories');
const AppErrors = require('../utils/error/app-erros');


const airplaneRepo = new AirplaneRepository();

async function createAirline(data){
    try {
        
        const airplane = await airplaneRepo.create(data);
        return airplane; 
    } catch (error) {
let explanation=[];

error.errors.forEach(err => explanation.push(err.message));
        if(error.name =='SequelizeValidationError'){
            throw new AppErrors(explanation,BAD_REQUEST);
        }
        
        Logger.error("Something went wrong in the airplane-service:createAirplane");
        throw new AppErrors('Cannot create a new airplane object',INTERNAL_SERVER_ERROR);
    }
}

async function getAirlines(){
    try {
        const airplanes = await airplaneRepo.getAll();
        return airplanes;
    } catch (error) {
        Logger.error("Something went wrong in the airplane-service:getAirplanes");
        throw new AppErrors('Cannot create a new airplane object',INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirline(data){
    try {
        const destroyAirplane = await airplaneRepo.destroy(data);
        return destroyAirplane;
    } catch (error) {
        if(error.statusCode == NOT_FOUND){
            throw new AppErrors('The airplane you requested to delete is not present',error.statusCode);
        }
        Logger.error('Something went wrong in the airplane-service:destroyAirline');
        throw new AppErrors('Cannot create a new airplane object',INTERNAL_SERVER_ERROR);
    }
}

async function updateAirline(data){
    try {
        const airplane = await airplaneRepo.update(data);
        return airplane;
    } catch (error) {
        console.log(error);
        if(error.statusCode == NOT_FOUND){
            throw new AppErrors('The airplane you requested to update is not present',error.statusCode);
        }
        Logger.error('Something went wrong in the airplane-service:updateAirline');
        throw new AppErrors('Cannot create a new airplane object',INTERNAL_SERVER_ERROR);
    }
}

async function getAirline(data){
    try {
        const airplane = await airplaneRepo.get(data);
        return airplane;
    } catch (error) {
        if(error.statusCode == NOT_FOUND){
            throw new AppErrors('The airplane you requested to get is not present',error.statusCode);
        }
        Logger.error("Something went wrong in the airplane-service:getAirplane");
        throw new AppErrors('Cannot create a new airplane object',INTERNAL_SERVER_ERROR);
    }
}

module.exports={
    createAirline,
    destroyAirline,
    getAirlines,
    updateAirline,
    getAirline

}
