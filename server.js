/*********************************************************************************
* WEB422 – Assignment 01
*
* Online (Heroku) Link: https://sleepy-tor-24874.herokuapp.com//
*                       https://git.heroku.com/sleepy-tor-24874.git
*                       https://github.com/git-illite/ShopMart-Rest-API
*
********************************************************************************/

const express = require("express");
const mongoose = require("mongoose")
const custController = require("./controllers/CustController.js")
const shortPropController = require("./controllers/ShortPropController.js")

require('dotenv').config({ path: 'config/keys.env' });
var cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors())
app.use("/customers",custController)
app.use("/shortprop",shortPropController)

app.listen(process.env.PORT,()=>{
    console.log(`ShopMart Api listening on ${process.env.PORT}`);

    mongoose.connect(process.env.MONGODB_QUERY_STRING)
    .then(()=>{
        console.log(`Connected to MongoDb ShopMart`)
    })
    .catch(err=>{
        console.log(`Error ${err}`)
    })

})