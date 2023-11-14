const sequelize = require('../config/connection');
const { Bookings, Cart } = require('../models');



const seedBookings = async (req, res) => {
  try {

    const cartItems = await Cart.findAll({
      where: {
        user_id: req.session.user_id,
        //Aston: Error above?
      },
    });

    const seedData = cartItems.map((cartItem) => ({
      user_id: req.session.user_id,
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


const fakeRequest = {
  session: {
    user_id: 1,
  },
};

seedBookings(fakeRequest);
// Comment out above before deployment.