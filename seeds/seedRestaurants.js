const sequelize = require('../config/connection');
const {Restaurants} = require('../models');


const seedData = [
    {
        name: 'The Italiano',
        cuisine: 'Italian',
        imageFilename:'/images/Package-1.png',
      
      },
      {
        name: 'Greek Vacation',
        cuisine: 'Greek',
        imageFilename:'/images/Package-2.png',
      
      },
      {
        name: 'Classic American',
        cuisine: 'American',
        imageFilename:'/images/Package-3.png',
      
      },
      {
        name: 'Tastes of the East',
        cuisine: 'Japanese',
        imageFilename:'/images/Package-4.png',
       
      },
      {
        name: 'Mexican package',
        cuisine: 'Mexican',
        imageFilename:'/images/Package-5.png',
     
      },
      {
        name: 'Spices of delight',
        cuisine: 'Indian',
        imageFilename:'/images/Package-6.png',
      },
    ];

const seedRestaurants = () => Restaurants.bulkCreate(seedData);
    module.exports = seedRestaurants;
