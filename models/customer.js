// customer.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CustomerSchema = new Schema(
 {
 customerid: { type: String , required: true },
 name: {type: String, required: true},
 address: {type: String, required: true},
 city: {type: String, required: true},
 state: {type: String, required: true},
 email: {type: String, required: true},
 phone: {type: String, required: true},
 }
);
//Export model
module.exports = mongoose.model('Customer',CustomerSchema);
