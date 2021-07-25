const router = require('express').Router();
const sequelize = require('../config/connection');
const { Contact, Team } = require('../models');

router.get('/', (req, res) => {
        res.render('contact', { Contact });
      });

      router.get('/', (req, res) => {
        res.render('team', { Team });
      });

  // router.get('/login', (req, res) => {
  //   res.render('login');
  // });
  
module.exports = router;

// const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { User } = require('../models');

// router.get('/login', (req, res) => {
//     res.render('login');
//   });

// module.exports = router;

