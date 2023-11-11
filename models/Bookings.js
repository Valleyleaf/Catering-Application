const { Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//create restaurants model
class Bookings extends Model {}


Bookings.init(
    {
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        cartItems:{
            type:DataTypes.JSON,
            allowNull: false,
        },
        date: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        orderID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
{
sequelize,
freezeTableName: true,
underscored: true,
modelName: 'bookings'
}
);
module.exports = Bookings;