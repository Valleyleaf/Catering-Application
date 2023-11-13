const router = require('express').Router();
const {model} = require('../../models');

router.post('/', async (req, res) => {
  try {
    const restaurantData = await model.seedRestaurants(); 
    if (!restaurantData) {
      return res.status(404).json({ message: 'restaurant data not found' });
    }
    res.status(200).json(restaurantData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;