

const seedUsers = require('./userSeeds');
const seedRestaurants = require('./seedRestaurants');
const seedComment = require('./commentSeed');
const seedBookings = require('./seedBookings')
const sequelize = require('../config/connection');
const menuSeed = require('./menuItemSeed');

const seedAll = async() => {
    // add try and catch later
    await sequelize.sync({force: true});
    console.log('\n----------------Database synced---------------\n');

    await seedUsers();
    console.log('\n----------------USER seeded---------------\n');

    await seedRestaurants();
    console.log('\n----------------Restuarants seeded ---------------\n');

    await seedBookings();
    console.log('\n----------------Bookings seeded ---------------\n');

    // await menuSeed();
    // console.log('\n----------------menu seeded ---------------\n');

    // await seedComment();
    // console.log('\n----------------Comments seeded---------------\n');

// Aston asks: why is the above commented out?
    process.exit(0);
};

seedAll();
