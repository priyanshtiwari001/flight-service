const express = require('express');
const router = express.Router();

const airplaneRoutes = require('./airplane-routes');


console.log('airplane');
router.use('/airplanes',airplaneRoutes);


module.exports=router;