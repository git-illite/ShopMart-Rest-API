const ShortPropModel = require("../models/ShortProp.js")

exports.CreateShortPropValidation=(req,res,next)=>{

    const errors = [];
    if(!req.body.title ||  req.body.title === "")
    {
        errors.push( {field : "title", message :"You must provide a title"})    
    }
    if(!req.body.rentPrice ||  req.body.rentPrice === "")
    {
        errors.push( {field : "rentPrice", message :"You must provide a rental price"})    
    }
    if(!req.body.type ||  req.body.type === "")
    {
        errors.push( {field : "type", message :"You must provide a Property Type"})    
    }
    if(!req.body.amenities ||  req.body.amenities === "")
    {
        errors.push( {field : "amenities", message :"You must provide some amenities"})    
    }
    if(!req.body.location ||  req.body.location === "")
    {
        errors.push( {field : "location", message :"You must provide a location"})    
    }
    if(!req.body.bestSeller ||  req.body.bestSeller === "")
    {
        errors.push( {field : "bestSeller", message :"You must provide best seller info"})    
    }
    //if there are errors 
    if(errors.length > 0){
        res.status(400).json({
        message : " You did not successfully create a Short Term Property",
        data : errors  
        })
    }else{
        next(); 
    }
},
exports.ShortPropIDValidation=(req,res,next)=>{

    const errors = [];
    if(!req.params.id ||  req.params.id === "")
    {
        errors.push( {field : "id", message :"Not a valid ID"})    
    }
    if(errors.length > 0){
        res.status(400).json({
        message : "You have not entered a valid property ID",
        data : errors  
        })
    }else{
        ShortPropModel.findById(req.params.id)
        .then((newProp)=>{
        if(newProp){
            next()
        }else{    
            res.status(404).json({
                message: `No Short Property Term with id ${req.params.id}, found`
            })
        }
        })
        .catch(err=>{
            res.status(500).json({
                message: err
            })
        })
    }
}