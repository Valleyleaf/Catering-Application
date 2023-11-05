const { Model,DataTypes } = require ('sequelize');// imports datatypes object from sequelize ,used to define the data types
const sequelize = require('../config/connection');

//create menulist model
class MenuItem extends Model {}
// create fields/columns for Menulist model
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
            model: 'restuarants',
            key:'id'
        },
        },
    }, {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'menu'
    });

module.exports= MenuItem;