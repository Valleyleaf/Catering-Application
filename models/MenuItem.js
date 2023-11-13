const { Model,DataTypes } = require ('sequelize');
// imports datatypes object from sequelize ,used to define the data types
const sequelize = require('../config/connection');


class MenuItem extends Model {}

MenuItem.init(
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    item_name: {
        type: DataTypes.STRING,
        allownull:false,
    },
    restaurant_id: {
        type: DataTypes.INTEGER,
        allownull:false,
        references: { // foreign key relationship with the restaurants table
            model: 'restaurants',
            key:'id'
        },
    },
    user_id:{
        type:DataTypes.INTEGER,
        references:{
            model:'users',
            key:'id'
        }
    }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'menu'
    });

module.exports= MenuItem;

