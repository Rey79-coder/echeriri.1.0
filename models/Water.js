const router = require('express').Router();
const express = require('express');

const sequelize = require('../config/connection');

onclick = function() {myWaterBtn()};
// Get the header

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('../views/water.handlebars');
});



module.exports = router;
