const router = require('express').Router();

const { route } = require('./api');
const apiRoutes = require('./api');
const homeRoutes = require ('./home-routes');
const contactRoutes = require ('./contact-routes');
const teamRoutes = require ('./team-routes');

const fireRoutes = require ('./fire-routes');
const earthRoutes = require ('./earth-routes');
const windRoutes = require ('./wind-routes');
const waterRoutes = require ('./water-routes');


router.use('/fire', fireRoutes);
router.use('/earth', earthRoutes);
router.use('/wind', windRoutes);
router.use('/water', waterRoutes);

const loginRoutes = require ('./login-routes')

router.use('/login', loginRoutes);

router.use('/contact', contactRoutes);
router.use('/team', teamRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;