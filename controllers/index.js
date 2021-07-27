const router = require('express').Router();

const { route } = require('./api');
const apiRoutes = require('./api');
const homeRoutes = require ('./home-routes')
const contactRoutes = require ('./contact-routes')
const loginRoutes = require ('./login-routes')

router.use('/login', loginRoutes);
router.use('/contact', contactRoutes);
router.use('/homepage', homeRoutes);
router.use('/api', apiRoutes);


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;