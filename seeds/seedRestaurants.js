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
    ];

const seedRestaurants = () => Restaurants.bulkCreate(seedData);
    module.exports = seedRestaurants;
