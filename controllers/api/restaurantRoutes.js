const router = require('express').Router();
const { MenuItem } = require('../../models');
const {Restaurants} = require('../../models');

//get a list of all restaurants

router.get('./', async (req,res)=> {
  try {
    const restaurants = await Restaurants.findAll({
      include: {
        model:MenuItem,
        as:'menuItems',
      }
    });
    res.json(restaurants);
  } catch(err) {
    res.status(500).json(err);
  }
});

//Get a specific restaurant by ID

router.post('/:id', async (req, res)=> {
  try {
    const restaurant = await Restaurants.findbyPk(req.params.id, {
      include: {
        model: MenuItem,
        as: 'menuItems',
      },
    });

    if (!restaurant) {
      res.status(404).json({ error: 'Restaurant not found' });
    } else {
      res.json(restaurant);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//create a new restaurant
router.post('/', async (req, res) => {
  try {
    const restaurant = await Restaurants.create(req.body);
    res.json(restaurant);
  } catch (err) {
    res.status(400).json(err);
  }
});

//update a restaurant by ID
router.put('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurants.findByPk(req.params.id);
    if (!restaurant) {
      res.status(404).json({ message: 'Restaurant not found' });
    } else {
      await restaurant.update(req.body);
      res.json(restaurant);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete a restaurant by ID
router.delete('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurants.findByPk(req.params.id);
    if (!restaurant) {
      res.status(404).json({ error: 'Restaurant not found' });
    } else {
      await restaurant.destroy();
      res.json({ message: 'Restaurant deleted successfully' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
  
