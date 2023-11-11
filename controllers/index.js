const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes.js');
const main = '../../views/layouts/main.handlebars'
// AD: Fixed a spelling error where homeroutes was spelled homeRoutes.
 
router.use('/', homeRoutes);  // This allows us to use our homeroutes js script  -JKD

router.use('/api', apiRoutes);

module.exports = router;

//This is boilerplate level of code. leave it as is.
