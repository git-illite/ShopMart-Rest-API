const ShortPropModel = require("../models/ShortProp.js")

exports.createShortProp = (req,res)=>{

    const shortProp = new ShortPropModel(req.body)
    shortProp.save()
    .then((newProp)=>{
        res.json({
            message: "New Short Term Property created and saved to database",
            data:newProp
        })
    })
    .catch(err=>{
        res.status(500).json({
            message: err
        })
    })
};

exports.removeShortProp = (req,res)=>{

    ShortPropModel.findByIdAndRemove(req.params.id)
    .then((newProp)=>{
        if(newProp){
            res.json({
                message: `The Short Term Property with id ${req.params.id}, was removed`,
                data:newProp
            })
        }else{    
            res.status(404).json({
                message: `No Short Term Property with id ${req.params.id}, found`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
        message: err
        })
})
};

exports.getAllShortProp = (req,res)=>{

    const queryObj = {};

    if(req.query.type){
        queryObj.type = req.query.type;
    }
    if(req.query.location){
        queryObj.location = req.query.location;
    }
    if(req.query.bestSeller){
        queryObj.bestSeller = req.query.bestSeller;
    }
    if(req.query.id){
        queryObj.id = req.query.id;
    }



    ShortPropModel.find(queryObj)
    .then((newProp)=>{
        res.json({
            message: "A list of all Short Term Properties",
            data:newProp,
            totalShortTermProps : newProp.length
        })
     })
     .catch(err=>{
         res.status(500).json({
             message: err
         })
     })
};

exports.getShortProp = (req,res)=>{
    
    ShortPropModel.findById(req.params.id)
    .then((newProp)=>{
     if(newProp){
        res.json({
            message: `Found the Short Term Property with id ${req.params.id}`,
            data:newProp
        })
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
};
exports.updateShortProp = (req,res)=>{

    ShortPropModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((newProp)=>{
        if(newProp){
           res.json({
               message: `The Short Term Property with id ${req.params.id}, was updated`,
               data:newProp
           })
       }else{    
           res.status(404).json({
               message: `No Short Term Property with id ${req.params.id}, found`
           })
       }
        })
    .catch(err=>{
            res.status(500).json({
            message: err
            })
    })
};
exports.getDistinctShortProp = (req,res)=>{
    
    console.log("Hello")
    ShortPropModel.distinct(type, function(error, results){
       res.json(results);
      })
    /* .then((newProp)=>{
     if(newProp){
        res.json({
            message: `Found the Short Term Property with id ${req.params.id}`,
            data:newProp
        })
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
     }) */
};