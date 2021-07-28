
const router = require('express').Router();
const { Contact } = require('../models');


router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // res.render('../views/contact.handlebars');
  res.render('../views/contact.handlebars');
});

router.get('/contact', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/contact');
    return;
  }
  res.render('views/main.handlebars');
});


module.exports = router;

