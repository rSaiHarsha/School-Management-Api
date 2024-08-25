const School = require('../models/schoolModel');
const haversine = require('../utils/haversine');

// Add School Controller
exports.addSchool = async (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    // Validate inputs
    if (!name || !address || typeof latitude !== 'number' || typeof longitude !== 'number') {
        return res.status(400).json({ error: 'Invalid input data' });
    }

    try {
        await School.addSchool({ name, address, latitude, longitude });
        res.status(201).json({ message: 'School added successfully' });
    } catch (err) {
        console.error('Error adding school:', err);
        res.status(500).json({ error: 'Failed to add school' });
    }
};

// List Schools Controller
exports.listSchools = async (req, res) => {
    const { latitude, longitude } = req.query;

    // Validate inputs
    if (!latitude || !longitude) {
        return res.status(400).json({ error: 'Latitude and longitude are required' });
    }

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    try {
        const schools = await School.getAllSchools();
        const sortedSchools = schools.map(school => ({
            ...school,
            distance: haversine(userLat, userLon, school.latitude, school.longitude)
        })).sort((a, b) => a.distance - b.distance);

        res.json(sortedSchools);
    } catch (err) {
        console.error('Error fetching schools:', err);
        res.status(500).json({ error: 'Failed to retrieve schools' });
    }
};
