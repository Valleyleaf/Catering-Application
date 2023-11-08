const router = require('express').Router();
const {model} = require('../../models');

router.post('/menu', async (req, res) => {
  try {
    const menuData = await model.getRestaurants();
    if (!menuData) {
      return res.status(404).json({ message: 'menu data not found' });
    }
    res.status(200).json(menuData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

// Above imports models. Uses