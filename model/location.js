const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init(
  {
    location_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'location'
  }
);

module.exports = Location;
