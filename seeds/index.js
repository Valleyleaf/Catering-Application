const seedUsers = require('./userSeeds');
const seedRestaurants = require('./seedRestarurants');
const seedComment = require('./commentSeed');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({force: true});
    console.log('\n----------------Database synced---------------\n');

    await seedUsers();
    console.log('\n----------------users seeded-------------\n');

    await seedRestaurants();
    console.log('\n----------------Restaurants/menu  seeded-------------\n');

    await seedComment();
    console.log('\n----------------comments  seeded-------------\n');
    process.exit(0);

};

seedAll();