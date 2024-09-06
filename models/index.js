const Sequelize = require('sequelize');
const sequelize = require('../config/db');

// Register models
const User = require('./User')(sequelize, Sequelize.DataTypes);
const Train = require('./Train')(sequelize, Sequelize.DataTypes);
const Booking = require('./Booking')(sequelize, Sequelize.DataTypes);

const db = { User, Train, Booking };

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
