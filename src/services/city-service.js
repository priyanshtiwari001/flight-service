const { NOT_FOUND, BAD_REQUEST } = require('http-status-codes');
const {CityRepository} = require('../repositories');
const AppErrors = require('../utils/error/app-erros');



const cityRepo = new CityRepository();
console.log(cityRepo);


async function createCity(data){
   try{
    const city = await cityRepo.create(data);
    return city;
   }catch(error){
    let explanation=[];
    error.errors.forEach(err => explanation.push(err.message));
  
    if(error.name =='SequelizeValidationError' || error.name =='SequelizeUniqueConstraintError'){
        throw new AppErrors(explanation,BAD_REQUEST);
    }
    Logger.error('Something went wrong in the city-service:createCity');
       throw new AppErrors('Cannot create a new city object',INTERNAL_SERVER_ERROR);

   }
    
}

async function getCity(data){
    try {
        const city = await cityRepo.get(data);
        return city;
    } catch (error) {
       if(error.name == NOT_FOUND){
        throw new AppErrors('The City you requested to get is not present',error.statusCode);
       }
       Logger.error('Something went wrong in the city-service:getCity');
       throw new AppErrors('Cannot create a new city object',INTERNAL_SERVER_ERROR);
    }
}

async function getCities(){
    try {
        const cities = await cityRepo.getAll();
        return cities;
    } catch (error) {
       Logger.error('Something went wrong in the city-service:getCities');
       throw new AppErrors('Cannot create a new city object',INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(data){
    try {
        const city = await cityRepo.destroy(data);
        return city;
    } catch (error) {
       if(error.name == NOT_FOUND){
        throw new AppErrors('The City you requested to destory is not present',error.statusCode);
       }
       Logger.error('Something went wrong in the city-service:destroyCity');
       throw new AppErrors('Cannot create a new city object',INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(data){
    try {
        const city = await cityRepo.update(data);
        return city;
    } catch (error) {
       if(error.name == NOT_FOUND){
        throw new AppErrors('The City you requested to update is not present',error.statusCode);
       }
       Logger.error('Something went wrong in the city-service:destroyCity');
       throw new AppErrors('Cannot create a new city object',INTERNAL_SERVER_ERROR);
    }
}
module.exports={
    createCity,
    getCity,
    getCities,
    destroyCity,
    updateCity
}

