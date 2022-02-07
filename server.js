const express = require("express");
const mongoose = require("mongoose")
const custController = require("./controllers/CustController.js")
const shortPropController = require("./controllers/ShortPropController.js")

require('dotenv').config({ path: 'config/keys.env' });

const app = express();

app.use(express.json());
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