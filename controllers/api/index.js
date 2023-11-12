const router = require('express').Router();
const signupRoutes = require('./signUpRoutes');
const commentRoutes = require('./commentRoutes');
const menuRoutes = require('./menuItemsRoutes');
const userDataRoutes = require('./userDataRoutes');
const bookingRoutes = require('./bookingRoutes')
const cartRoutes = require('./cartRoutes')

router.use('/signup', signupRoutes);
router.use('/comments', commentRoutes);
router.use('/menus', menuRoutes);
router.use('/users', userDataRoutes);
router.use('/booking', bookingRoutes);
router.use('/cart', cartRoutes);

module.exports = router;


// This can be considered the main api route file. All other routes should be referenced in here.