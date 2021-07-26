const router = require('express').Router();
const sequelize = require('../config/connection');
const { Contact, Team, Homepage } = require('../models');



router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('../views/layouts/homepage.handlebars');
});


// router.get('/', (req, res) => {

//   // console.log(req.session);
//       res.render('views/homepage.handlebars', { Homepage });
//      })
//         // res.render('contact', { Contact });
      
// router.get('/', (req, res) => {
//         res.render('views/main.handlebars', { Homepage });
//       });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('views/main.handlebars');
});

module.exports = router;

 


// const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { Echeriri } = require('../models/Homepage');

//      // THIS IS WORKING SOMEHOW
// router.get('/', (req, res) => {

// namespace.echeriri.Controllers; 
// { 
//     public.class.echeririController; Echeriri
//     { 
 
//         public.url.Index() 
        
//         { 
//             return ('../views/layouts/main.handlebars'); 
//         } 
//     } 
//   }
// })

// // app.use(express.static(__dirname + '/public'));

// module.exports = router;
