const router = require('express').Router();
const sequelize = require('../config/connection');
const { Water } = require('../models');


router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // res.render('../views/contact.handlebars');
  res.render('../views/water.handlebars');
});

router.get('/water', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }

    res.render('../views/main.handlebars');
  });

  

  module.exports = router;