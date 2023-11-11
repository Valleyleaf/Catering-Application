const router = require('express').Router();
const {model} = require('../../models');
const generateid = require('../../utils/generateOrderID');


router.get('/', async (req, res) => {
  db.query('SELECT * FROM Bookings', (err, results) =>
  {
    if (err) throw err;
    res.json(results);
    console.log('>>>>>>>>>>>>>>This is bookings results:', results)
  })
});

router.post('/addToCart', (req, res) => {
  const orderID = generateid();
  const { id, cartItems, Date,} = req.body;
  // Above needs seperate paramiters.
})
// req.body requests information from the body. So we want to tie the id to the user, cartItems to whats in the cart, Date to the date and the orderID needs to be randomly generated.
// Created function in utils that will generate a random id.

router.delete('/deleteFromCart', (req, res) => {
  const { itemId } = req.body;

  model.Cart.destroy({
    where: {
      id: itemId,
    },
  })
    .then(() => {
      res.send('Item deleted from cart successfully');
    })
    .catch((error) => {
      console.error('Error deleting item from cart:', error);
      res.status(500).send('Internal Server Error');
    });
});

// Make delete button that paths to deleteFromCart.

module.exports = router;