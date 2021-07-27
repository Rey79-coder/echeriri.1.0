const router = require('express').Router();
const { Login } = require('../models');
// const { router } = require('./contact-routes');



router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // res.render('../views/contact.handlebars');
  res.render('../views/login.handlebars');
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/login');
    return;
  }
  res.render('views/main.handlebars');
});


module.exports = router;
