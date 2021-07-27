const router = require('express').Router();
const sequelize = require('../config/connection');
const { Contact, Team, Homepage } = require('../models');



router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('../views/contact.handlebars');
});

router.get('/contact', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('views/main.handlebars');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('views/main.handlebars');
});

module.exports = router;

 