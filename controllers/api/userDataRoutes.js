const router = require('express').Router();
const {model} = require('../../models');

router.post('/user', async (req, res) => {
  try {
    const userData = await model.seedUsers(); 
    if (!userData) {
      return res.status(404).json({ message: 'user data not found' });
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// I want this route to return comment data.
module.exports = router;