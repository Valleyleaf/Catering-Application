const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes.js');

const home = (req, res, next) => {  //I did it ths way for now to work on the handlebars, will configure it later to use homeroutes -JKD
    res.render('homepage');
}
 
router.use('/', home);  // This allows us to use our homeroutes js script  -JKD
router.use('/api', apiRoutes);

module.exports = router;

//This is boilerplate level of code. leave it as is.
