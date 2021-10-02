const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Vitamins extends Model {}

Vitamins.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false
        },
        origin: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        hooks: {

        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelname: 'vitamins',
    }
)

module.exports = Vitamins;
// module.exports = Vitamins;