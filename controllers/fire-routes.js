const router = require('express').Router();
const sequelize = require('../config/connection');
const { Fire } = require('../models');

router.get('/fire', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('../views/layouts/fire.handlebars');
  });

  module.exports = router;