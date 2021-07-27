const router = require('express').Router();
const express = require('express');

const sequelize = require('../config/connection');
// const stylesheet = require('../public/assets/css/style.css')

// myStorage = window.localStorage;

// STICKY HEADER / When the user scrolls the page, execute myFunction
// window.onscroll = function() {myHeader()};

onclick = function() {myWaterBtn()};
// Get the header

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // res.render('../views/contact.handlebars');
  res.render('../views/water.handlebars');
});



module.exports = router;
