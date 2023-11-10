const router = require('express').Router();
const {MenuItem} = require('../../models')
router.get('/', async (req, res) => {
    try {
      const menuItems = await MenuItem.findAll();
      res.json(menuItems);
    } catch (error) {
      console.error(error);
      res.status(500).json();
    }
  });

  // Route to retrieve a specific menu item by its ID
  router.get('/:id', async (req, res) => {
    const menuItemId = req.params.id;
  
    try {
      const menuItem = await MenuItem.findByPk(menuItemId);
  
      if (!menuItem) {
        return res.status(404).json({ message: 'Menu Item not found' });
      }
      res.json(menuItem);
    } catch (err) {
      console.error(err);
      res.status(500).json();
    }
  });

  //create a route to create a new menu item

  router.post('/', async (req, res) => {
    const { item_name, restaurant_id } = req.body;
  
    try {
      const menuItem = await MenuItem.create({ item_name, restaurant_id });
      res.json(menuItem);
    } catch (error) {
      console.error(err);
      res.status(500).json(err);
    }
  });

  //to update a exisiting menu item

  router.put('/:id', async (req, res) => {
    const menuItemId = req.params.id;
    const { item_name, restaurant_id } = req.body;
  
    try {
      const menuItem = await MenuItem.findByPk(menuItemId);
  
      if (!menuItem) {
        return res.status(404).json({ message: 'Menu Item not found' });
      }
  
      menuItem.item_name = item_name;
      menuItem.restaurant_id = restaurant_id;
      await menuItem.save();
  
      res.json(menuItem);
    } catch (err) {
      console.error(err);
      res.status(500).json();
    }
  });

  //create a route to delete a menu item by its id

  router.delete('/:id', async (req, res) => {
    const menuItemId = req.params.id;
  
    try {
      const menuItem = await MenuItem.findByPk(menuItemId);
  
      if (!menuItem) {
        return res.status(404).json({ message: 'Menu Item not found' });
      }
  
      await menuItem.destroy();
      res.json({ message: 'Menu Item deleted' });
    } catch (error) {
      console.error(error);
      res.status(500).json();
    }
  });

  module.exports = router;
  
