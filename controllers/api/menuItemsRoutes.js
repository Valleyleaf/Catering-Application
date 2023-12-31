const router = require('express').Router();
const {model} = require('../../models');

router.post('/', async (req, res) => {
  try {
    const menuData = await model.menuItem();
    if (!menuData) {
      return res.status(404).json({ message: 'menu data not found' });
    }
    res.status(200).json(menuData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// I want this route to return menuItems data.
module.exports = router;
