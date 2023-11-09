const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commentRoutes = require('./commentRoutes');
const menuRoutes = require('./menuItemsRoutes')

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/menus', menuRoutes);

module.exports = router;


// This can be considered the main api route file. All other routes should be referenced in here.