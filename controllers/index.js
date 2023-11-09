const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes.js');

// const home = (req, res, next) => {  //I did it ths way for now to work on the handlebars, will configure it later to use homeroutes -JKD
//     res.render('homepage');
// }

router.use('/', homeRoutes);  // This allows us to use our homeroutes js script  -JKD
router.use('/api', apiRoutes); 
// Above leads to api routes which then in turn has an index that leads to our data management apis.
module.exports = router;

//This is boilerplate level of code. leave it as is.
