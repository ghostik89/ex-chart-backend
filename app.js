const express = require("express");
const cors = require('cors')
require('dotenv').config()
const app = express();

//middleware
app.use(express.json());
app.use(cors())

app.use('/api/chart', require('./chart.router'))

app.listen(process.env.PORT? process.env.PORT : 5000, () => {
    console.log('App has been started at ' + process.env.PORT)
})