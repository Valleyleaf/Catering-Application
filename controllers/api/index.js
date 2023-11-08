const router = require('express').Router();
const userRoutes = require('./userRoutes');
const restaurantRoutes = require('./restaurantRoutes');
const menuRoutes = require('./menuRoutes')
const commentRoutes = require('./commentRoutes')

router.use('/users', userRoutes);
router.use('/restaurants', restaurantRoutes);
router.use('./menu', menuRoutes);
router.use('/comments',commentRoutes)


module.exports = router;

