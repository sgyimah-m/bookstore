const express = require('express');
const mongoose = require('mongoose');

const app = express();
const apiPort = 5000;

const mongoDBURL = process.env.MONGODB_URL || 'mongodb://127.0.0.1/shopping';

mongoose.connect(mongoDBURL)
  .then(() => {
    console.log("Connected to the MongoDB database");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit process on failure
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('Welcome to Bookstore App');
});

const server = app.listen(apiPort, () => {
  console.log(`Bookstore App running on port ${apiPort}`);
});

// Close MongoDB connection on server shutdown
process.on('SIGINT', async () => {
  await mongoose.disconnect();
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
});
