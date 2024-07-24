const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Frequency extends Model {}

Frequency.init(
  {
    frequency_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    frequency: {
      type: DataTypes.DECIMAL(10, 1),
      allowNull: false
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: 'location_id', // Match the primary key in Location model
      },
    },
    listener_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'listener',
        key: 'listener_id', // Ensure this matches the primary key in Listener model
      },
    },
    host_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'host',
        key: 'host_id', // Ensure this matches the primary key in Host model
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'frequency'
  }
);

module.exports = Frequency;
