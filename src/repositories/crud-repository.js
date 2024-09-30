const {Logger} = require('../config');
class CrudRepository{
    constructor(model){
        this.model=model
    }

   async create(data){ // data -> col:val --> modelName:'ANB_123'
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the crud repository:create');
            throw error;
        }
    }

    async destroy(data){ // data -> col:val --> modelName:'ANB_123'
        try {
            const response = await this.model.destroy({
                where:{
                    id:data
                }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the crud repository:destroy');
            throw error;
        }
    }

    async getAll(){ // data -> col:val --> modelName:'ANB_123'
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the crud repository:getAll');
            throw error;
        }
    }

    async get(data){ // data -> col:val --> modelName:'ANB_123'
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the crud repository:create');
            throw error;
        }
    }

    async update(val,data){ // data -> col:val --> modelName:'ANB_123'
        try {
            const response = await this.model.update(data,{
                where:{
                    id:val
                }
            });
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the crud repository:create');
            throw error;
        }
    }


}

module.exports=CrudRepository;