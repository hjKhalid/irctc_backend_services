

const express = require('express');
const Train = require('../models/Train');
const verifyAdmin = require('../middlewares/adminAuth');

const router = express.Router();

// Add a new train (Admin)
router.post('/admin/train', verifyAdmin, async (req, res) => {
    const { source, destination, totalSeats } = req.body;
    
    try {
        const train = await Train.create({ source, destination, totalSeats, availableSeats: totalSeats });
        res.status(201).json({ message: 'Train added' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
