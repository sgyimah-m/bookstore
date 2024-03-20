// orderitem.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderItemSchema = new Schema(
 {
 orderitemid: { type: String , required: true },
 orderid: {type: String, required: true},
 productid: {type: String, required: true},
 price: {type: Number, required: true},
 quantity: {type: Number, required: true},
 total: {type: Number, required: true},
 }
);
//Export model
module.exports = mongoose.model('OrderItem',OrderItemSchema);