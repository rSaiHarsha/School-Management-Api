const db = require('../config/db');

// Add School to the Database
exports.addSchool = (schoolData) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
        db.query(query, [schoolData.name, schoolData.address, schoolData.latitude, schoolData.longitude], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

// Get All Schools from the Database
exports.getAllSchools = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM schools';
        db.query(query, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};
