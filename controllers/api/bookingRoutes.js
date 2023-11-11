const router = require('express').Router();
const {model} = require('../../models');

router.post('/', async (req, res) => {
  try {
    const bookingData = await model.seedBooking(); 
    if (!bookingData) {
      return res.status(404).json({ message: 'booking data not found' });
    }
    res.status(200).json(bookingData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// I want this route to return resturant/package data.
module.exports = router;