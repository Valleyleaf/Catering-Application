const router = require('express').Router();
const {model} = require('../../models');
const generateid = require('../../utils/generateOrderID');
const Booking = require('../../models/Bookings')



router.get('/', async (req, res) => {
  db.query('SELECT * FROM Bookings', (err, results) =>
  {
    if (err) throw err;
    res.json(results);
  })
});



router.post('/', async (req, res) => {
  try {
    const cartInfoString = `{
      "user_id": ${req.session.user_id},
      "user_name": "${req.session.name}",
      "package_id": ${req.body.packageId},
      "package_name": "${req.body.packageName}",
      "order_id": "${generateid()}"
    }`;
console.log('before trigger',cartInfoString)
const userJson = JSON.parse(cartInfoString);
  console.log('did we trigger this',userJson);
  const cartData = await Booking.create(userJson); 

    //We need to figure out the bookingID;
    if (!cartData) {
      return res.status(404).json({ message: 'cart data not found' });
    }
    res.json(cartData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err)
  }
});

// Aston says: My cart function would not work. I ran into issue after issue and I am out of time so I am STEALING
// Joshuas code from commentRoutes. Let it be know that the above is Joshuas code and I take 0 credit in making it.

// router.delete('/deleteFromCart', (req, res) => {
//   const { itemId } = req.body;

//   model.Cart.destroy({
//     where: {
//       id: itemId,
//     },
//   })
//     .then(() => {
//       res.send('Item deleted from cart successfully');
//     })
//     .catch((error) => {
//       console.error('Error deleting item from cart:', error);
//       res.status(500).send('Internal Server Error');
//     });
// });

// Make delete button that paths to deleteFromCart.

module.exports = router;