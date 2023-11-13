const sequelize = require('../config/connection');
const { Bookings, Cart } = require('../models');
const activeUser = require('../controllers/api/userDataRoutes')

const UserValue = activeUser.req.session.user_id;

const seedBookings = async (req) => {
  try {
    const userID = UserValue;

    const cartItems = await Cart.findAll({
      where: {
        user_id: userID,
      },
    });

    const seedData = cartItems.map((cartItem) => ({
      user_id: userID,
      product_id: cartItem.product.id,
      quantity: cartItem.quantity,
      date: cartItem.selectedDate,
    }));

    await Bookings.bulkCreate(seedData);
    console.log('Booking data Seeded');
  } catch (error) {
    console.error('Seeding Booking data failed', error);
  }
};

module.exports = seedBookings;

// seedBookings will pass 2 things. One is the user ID for the cart when called. This should be triggered when the user selects and confirms a date. Once a date is confirmed, it will seed the date thats located in the cartItem model, passing a user_id, product_id, quantity and the selected date.
// Note that this code will only run if it has an active session.