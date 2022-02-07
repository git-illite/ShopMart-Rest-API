exports.CreateCustValidation=(req,res,next)=>{

    const errors = [];
    if(!req.body.firstName ||  req.body.firstName === "")
    {
        errors.push( {field : "firstName", message :"You must provide a first name"})    
    }
    if(!req.body.lastName ||  req.body.lastName === "")
    {
        errors.push( {field : "lastName", message :"You must provide a last name"})    
    }
    if(!req.body.email ||  req.body.email === "")
    {
        errors.push( {field : "email", message :"You must provide an email address"})    
    }
    if(!req.body.password ||  req.body.password === "")
    {
        errors.push( {field : "password", message :"You must provide a password"})    
    }
    
    //if there are errors 
    if(errors.length > 0){
        res.status(400).json({
        message : " You did not successfully create a customer",
        data : errors  
        })
    }else{
        next(); 
    }
}