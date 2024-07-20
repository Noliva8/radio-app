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
    }
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
