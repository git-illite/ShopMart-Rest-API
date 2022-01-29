const mongoose = require("mongoose");
const { Schema } = mongoose;

const CustSchema = new Schema({
  FirstName: {type:String, required:true},
  LastName: {type:String, required:true},
  Email : {type:String, required:true},
  password :{type:String,required:true},
  PhoneNum : [Number]
});

const Customer = mongoose.model('Customer', CustSchema);

module.exports = Customer;