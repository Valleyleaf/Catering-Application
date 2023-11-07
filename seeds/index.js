// const seedUsers = require('./userSeeds');
// const seedRestaurants = require('./seedRestarurants');
// const seedComment = require('./commentSeed');
const {User, Restaurants, MenuItem, Comment} = require('../models')

const seedUsers = require('./userSeeds');
const seedRestaurants = require('./seedRestaurants');
const seedComment = require('./commentSeed');
const sequelize = require('../config/connection');
const seedAll = async() => {
    // add try and catch later
    await sequelize.sync({force: true});
    console.log('\n----------------Database synced---------------\n');

    await seedRestaurants();
    console.log('\n----------------Restuarants synced---------------\n');

    await seedComment();
    console.log('\n----------------Comments synced---------------\n');
    
    await seedUsers();
    process.exit(0);
};
seedAll();
