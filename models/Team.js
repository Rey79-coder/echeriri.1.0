const router = require('express').Router();
const express = require('express');

const sequelize = require('../config/connection');


onclick = function() {teamBtn()};

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('../views/team.handlebars');
});


router.use(express.static(__dirname + '/public'));

module.exports = myHeader;