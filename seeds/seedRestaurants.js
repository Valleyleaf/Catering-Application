const sequelize = require('../config/connection');
const {Restaurants} = require('../models');


const seedData = [
    {
        name: 'The Italiano',
        cuisine: 'Italian',
        imageFilename:'/images/Package-1.jpg',
        package:{
          Appetizer: 'Italian wedding soup',
          Main:'Pasta Carbonara',
          Dessert:'Gelato'
        },
      },
      {
        name: 'Greek Vacation',
        cuisine: 'Greek',
        imageFilename:'/images/Package-2.jpg',
        package: {
          Appetizer: 'Greek Salad',
          Main: 'Moussaka',
          Dessert: 'Baklava'
        },
      
      },
      {
        name: 'Classic American',
        cuisine: 'American',
        imageFilename:'/images/Package-3.jpg',
        package: {
          Appetizer: 'Buffalo Wings',
          Main: 'Cheeseburger',
          Dessert: 'Apple Pie'
        },
      },
      {
        name: 'Tastes of the East',
        cuisine: 'Japanese',
        imageFilename:'/images/Package-4.jpg',
        package: {
          Appetizer: 'Edamame',
          Main: 'Sushi Platter',
          Dessert: 'Mochi Ice Cream'
        },
      },
      {
        name: 'Mexican package',
        cuisine: 'Mexican',
        imageFilename:'/images/Package-5.jpg',
        package: {
          Appetizer: 'Guacamole',
          Main: 'Tacos',
          Dessert: 'Churros'
        },
      },
      {
        name: 'Spices of delight',
        cuisine: 'Indian',
        imageFilename:'/images/Package-6.png',
        package: {
          Appetizer:'Samosa',
          Main:'Chicken Tikka Masala',
          Dessert: 'Gulab Jamun'
        },
      },
    ];

const seedRestaurants = () => Restaurants.bulkCreate(seedData);
    module.exports = seedRestaurants;
