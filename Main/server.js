const express = require('express');
const apiRoutes = require('./Main/routes/noteApiRoutes');
const pageRoutes = require('./Main/routes/pageRoutes');
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