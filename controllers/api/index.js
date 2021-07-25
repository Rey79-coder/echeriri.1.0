const router = require('express').Router();

const userRoutes = require('./user-routes.js');

const fireRoutes = require('./fire-routes');

router.use('/users', userRoutes);


module.exports = router;  