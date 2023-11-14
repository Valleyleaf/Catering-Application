const User = require('./User');
const MenuItem = require('./MenuItem');
const Restaurants =require('./Restaurants')
const Comment = require('./Comment')
const Bookings = require('./Bookings')
const Cart = require('./Cart')

//define association
User.hasMany(MenuItem, {
    foreignKey: 'user_id',
});
User.hasMany(Bookings, {
    foreignKey: 'user_id',
});
Bookings.belongsTo(User, {
    foreignKey: 'id',
});
MenuItem.belongsTo(User, {
    foreignKey:'user_id',
});

User.hasMany(Comment, {
foreignKey:'user_id',
});
Comment.belongsTo(User,{
    foreignKey:'user_id',
});

MenuItem.belongsTo(Restaurants, {
    foreignKey:'restaurant_id',
});
Restaurants.hasMany(MenuItem,{
    foreignKey:'restaurant_id',
});
   
MenuItem.hasMany(Comment,{
    foreignKey:'menu_item_id',
});
Comment.belongsTo(MenuItem, {
    foreignKey:'menu_item_id',
});


module.exports = { User,MenuItem,Restaurants,Comment,Bookings, Cart};
