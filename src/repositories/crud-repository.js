const { NOT_FOUND } = require('http-status-codes');
const {Logger} = require('../config');
const AppErrors = require('../utils/error/app-erros');
class CrudRepository{
    constructor(model){
        this.model=model
    }

   async create(data){ // data -> col:val --> modelName:'ANB_123'
       
            const response = await this.model.create(data);
            return response;
        
    }

    async destroy(data){ // data -> col:val --> modelName:'ANB_123'
       
            const response = await this.model.destroy({
                where:{
                    id:data
                }
            });
            if(!response){
                throw new AppErrors('Not able to find the resources',NOT_FOUND);
            }
       return response;
    }

    async getAll(){ // data -> col:val --> modelName:'ANB_123'
       
            const response = await this.model.findAll();
            return response;
        
    }

    async get(data){ // data -> col:val --> modelName:'ANB_123'
       
            const response = await this.model.findByPk(data);
            if(!response){
                throw new AppErrors('Not able to find the resources',NOT_FOUND);
            }
            return response;
        
    }

    async update(id,data){ // data -> col:val --> modelName:'ANB_123'
       
            const response = await this.model.update(data,{
                where:{
                    id:id
                }
            });
           if(!response[0]){
            throw new AppErrors('Not able to find the resources',NOT_FOUND);
           }
            return response;
        
    }


}

module.exports=CrudRepository;