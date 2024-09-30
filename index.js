const express = require('express');
const {serverConfig} = require('./src/config');
const app = express();

const apiRoutes = require('./src/routes');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use('/api',apiRoutes); 


app.listen(serverConfig.PORT,()=>{
    console.log("Successfully running on PORT ",serverConfig.PORT);
})

