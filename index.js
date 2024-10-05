const express = require('express');
const {serverConfig} = require('./src/config');
const app = express();

const apiRoutes = require('./src/routes');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/api',apiRoutes); 


app.listen(serverConfig.PORT,async ()=>{
    console.log("Successfully running on PORT ",serverConfig.PORT);
    const {Airport,City} = require('./src/models');
    const airport = await Airport.create({name: 'Indira Gandhi International Airport', code: 'BLR', cityId: 13});


//    const addAirport = await Airport.createAirport({name:'Chhatrapati Shivaji Maharaj International Airport',code:'GOI'});
})

