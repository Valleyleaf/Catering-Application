const router = require('express').Router();
const {model} = require('../../models');

router.post('/cart', async (req, res) => {
  try {
    const cartData = await model.Cartseed(); 
    if (!cartData) {
      return res.status(404).json({ message: 'cart data not found' });
    }
    res.status(200).json(cartData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// I want this route to return cart data.
module.exports = router;