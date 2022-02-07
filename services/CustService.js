const custModel = require("../models/Customer.js")

exports.createCust = (req,res)=>{

    const cust = new custModel(req.body)
    cust.save()
    .then((newCust)=>{
        res.json({
            message: "New Customer created and saved to database",
            data:newCust
        })
    })
    .catch(err=>{
        res.status(500).json({
            message: err
        })
    })
};

exports.removeCust = (req,res)=>{

    custModel.findByIdAndRemove(req.params.id)
    .then((cust)=>{
        if(cust){
            res.json({
                message: `The customer with id ${req.params.id}, was removed`,
                data:cust
            })
        }else{    
            res.status(404).json({
                message: `No customer with id ${req.params.id}, found`
            })
        }
    })
    .catch(err=>{
        res.status(500).json({
        message: err
        })
})
};

exports.getAllCust = (req,res)=>{

    custModel.find()
    .then((cust)=>{
        res.json({
            message: "A list of all Customers",
            data:cust,
            totalCust : cust.length
        })
     })
     .catch(err=>{
         res.status(500).json({
             message: err
         })
     })
};

exports.getCust = (req,res)=>{

    custModel.findById(req.params.id)
    .then((cust)=>{
     if(cust){
        res.json({
            message: `Found the Customer with id ${req.params.id}`,
            data:cust
        })
    }else{    
        res.status(404).json({
            message: `No Customer with id ${req.params.id}, found`
        })
    }
     })
     .catch(err=>{
         res.status(500).json({
             message: err
         })
     })
};