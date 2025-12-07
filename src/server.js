// src/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Import user routes

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files (CSS, JS)

// Attach userRoutes
app.use('/', userRoutes);

// Connect to MongoDB (change the URI if using a remote DB)
mongoose.connect('mongodb://localhost:27017/colonymart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
