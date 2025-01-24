const express = require('express');
const cors = require('cors');
const routes = require('./Routes/routes');

const app = express();

// Middleware
// app.use(express.json());
// app.use(cors());

// Routes
//app.use('/api', routes);

// Error handling
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

module.exports = app; // Export the app for server.js
