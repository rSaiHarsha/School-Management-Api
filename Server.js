const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schoolRoutes');
require('dotenv').config();
require('./config/db'); // Initialize MySQL connection

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/schools', schoolRoutes);

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
