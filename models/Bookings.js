const { Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//create restaurants model
class Bookings extends Model {}


Bookings.init(
    {
        Orderid: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        date: {
        type: DataTypes.INTEGER,
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