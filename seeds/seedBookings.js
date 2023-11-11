const sequelize = require('../config/connection');
const {Bookings} = require('../models');


const seedData = [
    {
        user_id: '',
        cartItems:{ },
        date:'',
      },
    ];

const seedBookings = () => Bookings.bulkCreate(seedData);
    module.exports = seedBookings;
