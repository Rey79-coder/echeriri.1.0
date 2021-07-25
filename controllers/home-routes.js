const router = require('express').Router();
const sequelize = require('../config/connection');
const { Contact, Team } = require('../models');

router.get('/', (req, res) => {

  console.log(req.session);
  res.render('contact-us', { Contactus });
})

        res.render('contact', { Contact });
      });

      router.get('/', (req, res) => {
        res.render('team', { Team });
      });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;

