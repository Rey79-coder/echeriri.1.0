const router = require('express').Router();
const express = require('express');

const sequelize = require('../config/connection');
// const stylesheet = require('./css/style.css')

// myStorage = window.localStorage;

// STICKY HEADER / When the user scrolls the page, execute myFunction
onclick = function() {myContactBtn()};

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    // res.render('../views/contact.handlebars');
    res.render('../views/contact.handlebars');
  });


router.use(express.static(__dirname + '/public'));

module.exports = router;