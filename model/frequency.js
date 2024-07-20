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
            type: DataTypes.INTEGER,
            allowNull: false
        }


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
