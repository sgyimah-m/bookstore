// product.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ProductSchema = new Schema(
 {
 productid: { type: String , required: true },
 name: {type: String, required: true},
 price: {type: Number, required: true},
 quantity: {type: Number, required: true},
 image: {type: String, required: true},
 }
);
//Export model
module.exports = mongoose.model('Product', ProductSchema);