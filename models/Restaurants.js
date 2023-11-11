const { Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//create restaurants model
class Restaurants extends Model {}

//create fields/colums for Restaurants model
Restaurants.init(
    {
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        cuisine: {
            type:DataTypes.STRING,
            allowNull:false,
        },
        imageFilename:{
            type:DataTypes.STRING,
            allowNull:false,
        },
<<<<<<< HEAD
        package:{
            type:sequelize.JSON,
            allowNull:false
        }
=======
        MenuItem:{
            type: DataTypes.ARRAY(package[i++]),
            allowNull:false,
        },
>>>>>>> e1cda3ddb1af9ef4787648a3aee83b08e77935d7
    },
{
sequelize,
freezeTableName: true,
underscored: true,
modelName: 'restaurants'
}
);
module.exports = Restaurants;