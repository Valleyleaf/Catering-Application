const User = require('./user');
const MenuItem = require('./MenuItem');
const Restaurants =require('./Restaurants')
const Comment = require('./comment')

//define association
User.hasMany(MenuItem, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey:'user_id'
});
MenuItem.belongsTo(User, {
    foreignKey:'user_id'
});

MenuItem.belongsTo(Restaurants, {
    foreignKey:'restaurant_id'
});
   
MenuItem.hasMany(Comment,{
    foreignKey:'user_id'
});
 
Restaurants.hasMany(MenuItem,{
    foreignKey:'restaurant_id'
});
   
Comment.belongsTo(User,{
    foreignKey:'user_id'
});

Comment.belongsTo(MenuItem, {
    foreignKey:'user_id'
});

module.exports = { User,MenuItem,Restaurants,Comment};
