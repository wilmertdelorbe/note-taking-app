const express = require('express');
const apiRoutes = require('./routes/noteApiRoutes');
const pageRoutes = require('./routes/pageRoutes');

// Initialize the app and set the port
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.use('/api', apiRoutes);
app.use('/', pageRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

// This file sets up my Express server and defines the main routes
// I'm using separate route files for API and page routes to keep things organized