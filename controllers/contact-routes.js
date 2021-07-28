
const router = require('express').Router();
const { Contact } = require('../models');
// const { router } = require('./contact-routes');



router.get('/', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('../views/contact.handlebars');
});

router.get('/contact', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/contact');
    return;
  }
  res.render('views/main.handlebars');
});


module.exports = router;



      // THIS IS WORKING SOMEHOW
// router.get('/', (req, res) => {

// namespace.Contact.Controllers; 
// { 
//     public.class.ContactController; Controller 
//     { 
 
//         public.url.Index() 
        
//         { 
//             return ('./views/main.handlebars'); 
//         } 
//     } 
//   }
// })

// app.use(express.static(__dirname + '/public'));

// module.exports = router;