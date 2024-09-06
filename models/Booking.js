// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/db');
// const User = require('./User');
// const Train = require('./Train');

// const Booking = sequelize.define('Booking', {
//   status: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     defaultValue: 'confirmed',  // Default booking status
//   },
//   bookedAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//     defaultValue: DataTypes.NOW,  // Store the booking timestamp
//   }
// });

// // Define associations
// User.hasMany(Booking, { foreignKey: 'userId', as: 'bookings' });
// Booking.belongsTo(User, { foreignKey: 'userId', as: 'user' });

// Train.hasMany(Booking, { foreignKey: 'trainId', as: 'bookings' });
// Booking.belongsTo(Train, { foreignKey: 'trainId', as: 'train' });

// module.exports = Booking;
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Train = require('./Train');

const Booking = sequelize.define('Booking', {
    userId: { type: DataTypes.INTEGER, references: { model: User, key: 'id' } },
    trainId: { type: DataTypes.INTEGER, references: { model: Train, key: 'id' } },
    seatsBooked: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Booking;
