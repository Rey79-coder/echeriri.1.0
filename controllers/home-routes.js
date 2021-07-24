const router = require('express').Router();
const sequelize = require('../config/connection');
const { Contactus } = require('../models');

router.get('/', (req, res) => {
        res.render('contact-us', { Contactus });
      })
      // .catch(err => {
      //   console.log(err);
      //   res.status(500).json(err);
      // });
  // });

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

