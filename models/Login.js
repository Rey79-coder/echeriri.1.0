const router = require('express').Router();
const express = require('express');

const sequelize = require('../config/connection');

onclick = function() {myLoginButton()};

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    // res.render('../views/contact.handlebars');
    res.render('../views/login.handlebars');
  });


router.use(express.static(__dirname + '/public'));

module.exports = router;