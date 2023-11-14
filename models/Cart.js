const { Model,DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//create cart model
class Cart extends Model {}


Cart.init(
    {
        id: {
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        user_id:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        cartItems:{
            type:DataTypes.JSON,
            allowNull: false,
        },
        quantity:{
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
modelName: 'cart'
}
);
module.exports = Cart;
