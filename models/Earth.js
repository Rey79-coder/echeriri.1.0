const router = require('express').Router();
const express = require('express');

const sequelize = require('../config/connection');

onclick = function() {myEarthBtn()};
// Get the header

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('../views/earth.handlebars');
});



module.exports = router;
