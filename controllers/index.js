const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const main = '../../views/layouts/main.handlebars'


 
router.use('/', homeRoutes);  // This allows us to use our homeroutes js script  -JKD

router.use('/api', apiRoutes);





module.exports = router;

//This is boilerplate level of code. leave it as is.
