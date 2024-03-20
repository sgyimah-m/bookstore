// testmongodb.js
// test mongodb connection
// import required modules
const express = require('express');
var mongoose = require('mongoose');
// create server app
const app = express();

//Set up mongoose connection
var mongoDBURL = 'mongodb://127.0.0.1/shopping';
// connect to mongo db
mongoose.connect(mongoDBURL, {
 useNewUrlParser: true, useUnifiedTopology: true
}).then(function (db) {
 console.log("You are connected to the shopping database");
}, function (err) {
 console.log('Cannot connected to the shopping database', err)
})
// open connection to shopping database
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// use port 5000
const apiPort = 5000;
// return server info as a default get requests
app.get('/', (req, res) => {
 res.send('Welcome to Bookstore App');
});
// start the server, listen for requests
app.listen(apiPort, () => console.log(`Bookstore App running on port ${apiPort}`));
