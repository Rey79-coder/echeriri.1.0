
const router = require('express').Router();
const { Team } = require('../models');
// const { router } = require('./contact-routes');



router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // res.render('../views/contact.handlebars');
  res.render('../views/team.handlebars');
});

router.get('/contact', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/contact');
    return;
  }
  res.render('views/main.handlebars');
});


module.exports = router;
