const CrudRepository = require('./crud-repository');
const {Airplane} = require('../models/');

class AirplanesRepository extends CrudRepository{
    constructor(){
        super(Airplane);
    }
}

module.exports=AirplanesRepository;