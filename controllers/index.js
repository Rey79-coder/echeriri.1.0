const router = require('express').Router();

const { route } = require('./api');
const apiRoutes = require('./api');

const echeriri = require('./echeriri-routes.js');

router.use('/', echeriri);

router.use('/api', apiRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;