const { BAD_REQUEST } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppErrors = require("../utils/error/app-erros");

async function validateRequest(req,res){
    if(!req.body.name){
        ErrorResponse.message="Something went wrong while creating the city";
        ErrorResponse.error= new AppErrors(['city is not found in the oncoming request in correct form!'],BAD_REQUEST);

        return res.status(BAD_REQUEST).json(ErrorResponse);
    }
}

module.exports={validateRequest}