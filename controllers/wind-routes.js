const router = require('express').Router();
const sequelize = require('../config/connection');
const { Wind } = require('../models');

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('../views/wind.handlebars');
});


router.get('/wind', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('../views/main.handlebars');
  });

module.exports = router;