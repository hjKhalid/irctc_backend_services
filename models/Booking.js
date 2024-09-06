const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");
const Train = require("./Train");

const Booking = sequelize.define("Booking", {
  userId: { type: DataTypes.INTEGER, references: { model: User, key: "id" } },
  trainId: { type: DataTypes.INTEGER, references: { model: Train, key: "id" } },
  seatsBooked: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Booking;
