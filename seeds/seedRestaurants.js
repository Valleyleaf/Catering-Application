const sequelize = require('../config/connection');
const {Restaurants} = require('../models');

const seedData = [
    {
        name: 'The Italiano',
        cuisine: 'Italian',
      
      },
      {
        name: 'Greek Vacation',
        cuisine: 'Greek',
      
      },
      {
        name: 'Classic American',
        cuisine: 'American',
      
      },
      {
        name: 'Tastes of the East',
        cuisine: 'Japanese',
       
      },
      {
        name: 'Mexican package',
        cuisine: 'Mexican',
     
      },
      {
        name: 'Spices of delight',
        cuisine: 'Indian',
        imageFilename:'/images/Package-6.png',
        menuItems: [
          'Butter Chicken',
          'samosas',
        ],
      },
    ];

const seedRestaurants = () => Restaurants.bulkCreate(seedData);
    module.exports = seedRestaurants;
