
const express = require('express');
const Booking = require('../models/Booking');
const Train = require('../models/Train');
const authenticateToken = require('../middlewares/auth');

const router = express.Router();

// Check availability
router.get('/availability', authenticateToken, async (req, res) => {
    const { source, destination } = req.query;

    try {
        const trains = await Train.findAll({ where: { source, destination } });
        res.json(trains);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Book a seat
router.post('/book', authenticateToken, async (req, res) => {
    const { trainId, seats } = req.body;

    const train = await Train.findOne({ where: { id: trainId } });
    if (train.availableSeats < seats) return res.status(400).json({ message: 'Not enough seats' });

    const t = await sequelize.transaction();
    
    try {
        // Update seat availability
        train.availableSeats -= seats;
        await train.save({ transaction: t });

        // Create booking
        await Booking.create({ userId: req.user.id, trainId, seatsBooked: seats }, { transaction: t });
        await t.commit();

        res.json({ message: 'Booking successful' });
    } catch (error) {
        await t.rollback();
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
