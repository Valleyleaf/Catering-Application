const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
// Right here

module.exports = router;


// This can be considered the main route file. All other routes should be referenced in here.