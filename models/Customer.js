const mongoose = require("mongoose");
const { Schema } = mongoose;
var bcrypt = require('bcryptjs');


const CustSchema = new Schema({
  firstName: {type:String, required:true},
  lastName: {type:String, required:true},
  email : {type:String, required:true},
  password :{type:String,required:true},
  phoneNum : Array
});

CustSchema.pre('save',async function(next){
try{
  const salt=await bcrypt.genSalt(10);
  const hash = bcrypt.hashSync(this.password,salt);
  this.password=hash;
  next();
}catch(err){
  next(err)
}
})

const Customer = mongoose.model('Customer', CustSchema);

module.exports = Customer;