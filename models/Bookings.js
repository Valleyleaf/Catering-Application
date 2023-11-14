const { Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//create restaurants model
class Bookings extends Model {}


Bookings.init(
    {
        userid: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        user_name:{
            type:DataTypes.STRING,
            allowNull: false,
        },
        package_id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            validate:{
                isINT: true,
            }
        },
        Orderid: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        date: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            isINT: true,
        }
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