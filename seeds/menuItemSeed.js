const { MenuItem}  =require('../models')


const menuItemData = [
{
    package:[
        'Appetizer: Italian wedding soup',
        'Main: Pasta Carbonara',
        'Desert: Gelato'
    ],
    restaurant_ref_id:1,
    user_id:1
},
{
    package: [
      'Appetizer: Greek Salad',
      'Main: Moussaka',
      'Dessert: Baklava'
    ],
    restaurant_ref_id: 2,
    user_id: 2
  },
  {
    package: [
      'Appetizer: Buffalo Wings',
      'Main: Cheeseburger',
      'Dessert: Apple Pie'
    ],
    restaurant_ref_id: 3,
    user_id: 3
  },
  {
    package: [
      'Appetizer: Edamame',
      'Main: Sushi Platter',
      'Dessert: Mochi Ice Cream'
    ],
    restaurant_ref_id: 4,
    user_id: 4
  },
  {
    package: [
      'Appetizer: Guacamole',
      'Main: Tacos',
      'Dessert: Churros'
    ],
    restaurant_ref_id: 5,
    user_id: 5
  },
  {
    package: [
      'Appetizer: Samosa',
      'Main: Chicken Tikka Masala',
      'Dessert: Gulab Jamun'
    ],
    restaurant_ref_id: 6,
    user_id: 6
  }
];

const menuItemDataSeed = () => MenuItem.bulkCreate(menuItemData);
module.exports = menuItemDataSeed;

// Removing id because SQL will auto increment each item on its own.