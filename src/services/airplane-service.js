const { Logger } = require('../config');
const {AirplaneRepository} = require('../repositories');

const airplaneRepo = new AirplaneRepository();

async function createAirline(data){
    try {
        
        const airplane = await airplaneRepo.create(data);
        
        return airplane; 
    } catch (error) {
        Logger.error("Something went wrong in the airplane-service:createAirplane");
        throw error;
    }
}

async function destroyAirline(data){
    try {
        const destroyAirplane = await airplaneRepo.destroy(data);
        return destroyAirplane;
    } catch (error) {
        Logger.error('Something went wrong in the airplane-service:destroyAirline');
        throw error;
    }
}

module.exports={
    createAirline,
    destroyAirline
}
