const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Host extends Model {}

Host.init(
  {
    host_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    frequency_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'frequency',
        key: 'frequency_id', // Match the primary key in Frequency model
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'host'
  }
);

module.exports = Host;
