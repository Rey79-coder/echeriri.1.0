const router = require('express').Router();
const sequelize = require('../config/connection');
const { Earth } = require('../models');

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // res.render('../views/contact.handlebars');
  res.render('../views/earth.handlebars');
});


router.get('/earth', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('../views/main.handlebars');
  });

module.exports = router;