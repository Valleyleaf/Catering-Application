const sequelize = require('../config/connection');
const {Restaurants,MenuItem} = require('../models');

const seedData = [
    {
        name: 'The Italiano',
        cuisine: 'Italian',
        menuItems: [
          'Spaghetti Carbonara',
          'Margherita Pizza',
          'Chicken Alfredo',
        ],
      },
      {
        name: 'Greek Vacation',
        cuisine: 'Greek',
        menuItems: [
          'Gyros with Tzatziki',
          'Moussaka',
          'Greek Salad',
        ],
      },
      {
        name: 'Classic American',
        cuisine: 'American',
        menuItems: [
          'Clam Chowder',
          'Philly Cheesesteak',
          'Chocolate Milkshake',
        ],
      },
      {
        name: 'Tastes of the East',
        cuisine: 'Japanese',
        menuItems: [
          'Sushi Platter',
          'Ramen Noodle Soup',
        ],
      },
      {
        name: 'Mexican package',
        cuisine: 'Mexican',
        menuItems: [
          'Tacos (Choice of Meat)',
          'Enchiladas',
          'Guacamole and Chips',
          'Burrito Bowl',
        ],
      },
    ];

const seedRestaurants = async () => {
  try {
    await sequelize.sync({force:true}); // sync the models with the database
    for (const data of seedData) {
      const restuarant = await restuarants.create ({
          name:data.name,
          cuisine:data.cuisine,
      });
        for ( const item of data.menuItems) {
            await menu.create ({
                restuarant_id:restuarant.id,
                item_name:item,
            });
        }
    }
    console.log('seed data inserted successfully');
  } catch (error) {
    console.log('error seeding the database:', error);
  }
};
module.exports = seedRestaurants;