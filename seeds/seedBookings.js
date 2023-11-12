const sequelize = require('../config/connection');
const {Bookings, Cart} = require('../models');

const seedBookings = async (userID, selectedDate) => {
  try {
// Issue, userID is undefined here.
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
// seedBookings will pass 2 things. One is the user ID for the cart when called. This should be triggered when the user selects and confirms a date. Once a date is confirmed, it will seed the date thats located in the cartItem model, passing a user_id, product_id, quantity and the selected date.
    module.exports = seedBookings;
