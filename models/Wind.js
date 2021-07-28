const router = require('express').Router();
const express = require('express');

const sequelize = require('../config/connection');

onclick = function() {myWindBtn()};
// Get the header

router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('../views/wind.handlebars');
});



module.exports = router;
