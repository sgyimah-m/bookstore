// testnodejs.js
// test connection to nodejs server

// import required modules
const express = require('express');

// create server app
const app = express();

// use port 5000
const apiPort = 5000;

// return server info as a default get requests
app.get('/', (req, res) => {
    res.send('Welcome to testnode');
});

// start the server, listen for requests
app.listen(apiPort, () => console.log(`Bookstore App listening on port ${apiPort}`));
