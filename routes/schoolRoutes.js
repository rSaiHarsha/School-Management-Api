const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// Route for Adding School
router.post('/addSchool', schoolController.addSchool);

// Route for Listing Schools by Proximity
router.get('/listSchools', schoolController.listSchools);

module.exports = router;
