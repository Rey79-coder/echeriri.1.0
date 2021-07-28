const router = require('express').Router();
const express = require('express');

const sequelize = require('../config/connection');

onclick = function() {myFireBtn()};
// Get the header

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('../views/fire.handlebars');
});



module.exports = router;
