
    const seedRestaurants = async () => {
      try {
        await sequelize.sync({ force: true }); // Sync the models with the database
        const restaurantsToCreate = [];
        const menuItemsToCreate = [];
        for (const data of seedData) {
          const restaurant = {
            name: data.name,
            cuisine: data.cuisine,
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