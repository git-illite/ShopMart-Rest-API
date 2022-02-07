const mongoose = require("mongoose");
const { Schema } = mongoose;

const ShortPropSchema = new Schema({
  /*_id:{type:Number, immutable:true},*/
  title: {type:String, required:true},
  rentPrice: {type:Number, required:true},
  description : {type:String},
  type :{type:String,required:true},
  rules : Array,
  amenities:[String],
  location: {type:String, required:true},
  bestSeller : {type:Boolean,default: false,required:true},
  photo:{type:String}
});

const ShortProp = mongoose.model('ShortProp', ShortPropSchema);

module.exports = ShortProp;