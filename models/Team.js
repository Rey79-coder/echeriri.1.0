const router = require('express').Router();
const express = require('express');

const sequelize = require('../config/connection');

//myStorage = window.localStorage;

// STICKY HEADER / When the user scrolls the page, execute myFunction
//window.onscroll = function() {teamBtn()};

// Get the header
//var header = document.getElementById("echeriri");

// Get the offset position of the navbar
//var sticky = header.offsetTop;
onclick = function() {teamBtn()};

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // res.render('../views/contact.handlebars');
  res.render('../views/team.handlebars');
});


router.use(express.static(__dirname + '/public'));

module.exports = myHeader;