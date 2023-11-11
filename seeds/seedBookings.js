const sequelize = require('../config/connection');
const {Bookings, Cart} = require('../models');


const seedBookings = async (userID, selectedDate) => {
  try {
    const cartItems = await Cart.findAll({
      where: {
        user_id: userID,
      },
    });
    const seedData = cartItems.map((cartItem) => ({
      user_id: userID,
      product_id: cartItem.product.id,
      quanitity: cartItem.quantity,
      date: selectedDate,
    }));

    await Bookings.bulkCreate(seedData);
    console.log ('Booking data Seeded')
  } catch (error){
    console.error('Seeding Booking data failed', error);
  }
};

    module.exports = seedBookings;
