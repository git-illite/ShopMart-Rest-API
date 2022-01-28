const express = require("express");
const mongoose = require("mongoose")
require('dotenv').config({ path: 'config/keys.env' });

const app = express();

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