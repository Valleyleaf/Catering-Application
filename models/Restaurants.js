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

        package:{
            type: DataTypes.JSON,
            allowNull:false,
        },
    },
{
sequelize,
freezeTableName: true,
underscored: true,
modelName: 'restaurants'
}
);
module.exports = Restaurants;