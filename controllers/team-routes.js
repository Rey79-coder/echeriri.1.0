
const router = require('express').Router();
const { Team } = require('../models');



router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
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
