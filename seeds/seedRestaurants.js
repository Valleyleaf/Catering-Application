const sequelize = require('../config/connection');
const {Restaurants,MenuItem} = require('../models');
const seedData = [
    {
        name: 'The Italiano',
        cuisine: 'Italian',
        imageFilename:'/images/Package-1.jpg',
        menuItems: [
          'Spaghetti Carbonara',
          'Margherita Pizza',
          'Chicken Alfredo',
        ],
      },
      {
        name: 'Greek Vacation',
        cuisine: 'Greek',
        imageFilename:'/images/Package-2.jpg',
        menuItems: [
          'Gyros with Tzatziki',
          'Moussaka',
          'Greek Salad',
        ],
      },
      {
        name: 'Classic American',
        cuisine: 'American',
        imageFilename:'/images/Package-3.jpg',
        menuItems: [
          'Clam Chowder',
          'Philly Cheesesteak',
          'Chocolate Milkshake',
        ],
      },
      {
        name: 'Tastes of the East',
        cuisine: 'Japanese',
        imageFilename:'/images/Package-4.jpg',
        menuItems: [
          'Sushi Platter',
          'Ramen Noodle Soup',
        ],
      },
      {
        name: 'Mexican package',
        cuisine: 'Mexican',
        imageFilename:'/images/Package-5.jpg',
        menuItems: [
          'Tacos (Choice of Meat)',
          'Enchiladas',
          'Guacamole and Chips',
          'Burrito Bowl',
        ],
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
    const seedRestaurants = async () => {
      try {
        await sequelize.sync({ force: true }); // Sync the models with the database
        const restaurantsToCreate = [];
        const menuItemsToCreate = [];
        for (const data of seedData) {
          const restaurant = {
            name: data.name,
            cuisine: data.cuisine,
            imageFilename:data.imageFilename,
          };
          restaurantsToCreate.push(restaurant);
          for (const item of data.menuItems) {
            const menuItem = {
              restaurant_id: null, // We'll set this after inserting the restaurant
              item_name: item,
            };
            menuItemsToCreate.push(menuItem);
          }
        }
        const createdRestaurants = await Restaurants.bulkCreate(restaurantsToCreate, { returning: true });
        for (let i = 0; i < createdRestaurants.length; i++) {
          menuItemsToCreate[i].restaurant_id = createdRestaurants[i].id;
        }
        await MenuItem.bulkCreate(menuItemsToCreate);
        console.log('Seed data inserted successfully');
      } catch (error) {
        console.error('Error seeding the database:', error);
      }
    };
    module.exports = seedRestaurants;