const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      package_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:'restaurants',
          key:'id'
        }
      },
      package_name :{
        type:DataTypes.STRING,
        allowNull:false,
      }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;