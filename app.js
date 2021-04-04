const express = require("express");
require('dotenv').config()
const app = express();

//middleware
app.use(express.json());

app.use('/api/chart', require('./chart.router'))

app.listen(process.env.PORT? process.env.PORT : 5000, () => {
    console.log('App has been started at ' + process.env.PORT)
})