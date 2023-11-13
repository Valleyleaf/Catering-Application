const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeroutes.js');
const main = '../../views/layouts/main.handlebars'
 
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

