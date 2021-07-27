const router = require('express').Router();
const sequelize = require('../config/connection');
const { Contact, Team, Homepage, User } = require('../models');



router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // res.render('../views/contact.handlebars');
  res.render('../views/homepage.handlebars');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('../views/login.handlebars');
});

module.exports = router;

<<<<<<< HEAD
 
=======
>>>>>>> 4f14d19bd9e34be9116f754bdc064351ba7230de
