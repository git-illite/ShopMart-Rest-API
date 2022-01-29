const mongoose = require("mongoose");
const { Schema } = mongoose;

const ShortPropSchema = new Schema({
  title: {type:String, required:true},
  rentPrice: {type:Number, required:true},
  description : {type:String, required:true},
  type :{type:String,required:true},
  rules : [String],
  amenities:[String],
  location: {type:String},
  bestSeller : {type:Boolean,default: false,required:true},
  photo:{type:String}
});

const ShortProp = mongoose.model('ShortProp', ShortPropSchema);

module.exports = ShortProp;