const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Contact, Team, Homepage } = require('../../models');

router.get('/', (req, res) => {

  // console.log(req.session);
      res.render('views/main.handlebars', { Homepage });
     })
        // res.render('contact', { Contact });
      
router.get('/', (req, res) => {
        res.render('views/main.handlebars', { Homepage });
      });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('views/main.handlebars');
});

module.exports = router;

 