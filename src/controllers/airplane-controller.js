
const {AirplaneService} = require('../services');
const {CREATED,INTERNAL_SERVER_ERROR} = require('http-status-codes');


 async function createAirplane(req,res){
    try {
        console.log('airplane-controller');
        console.log(req.body);
       const airplane = await AirplaneService.createAirline({
        modelName: req.body.modelName,
        capacity:req.body.capacity
       });
      
        return res.status(CREATED).json({
            success:true,
            message:"airplane is created successfully",
            data:airplane,
            error:{}
        })
    } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json({
            success:false,
            message:"airplane is not created successfully",
            data:{},
            error:{}
        })
    }
};

// async function destroyAirplane(req,res){
//     try {
//         const airplane = await AirplaneService.destroyAirline()
//     } catch (error) {
        
//     }
// }


module.exports={createAirplane}
