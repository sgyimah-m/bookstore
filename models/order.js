// order.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var OrderSchema = new Schema(
 {
 orderid: { type: String , required: true },
 customerid: {type: String, required: true},
 subtotal: {type: Number, required: true},
 tax: {type: Number, required: true},
 shipping: {type: Number, required: true},
 total: {type: Number, required: true},
 }
);
//Export model
module.exports = mongoose.model('Order',OrderSchema);