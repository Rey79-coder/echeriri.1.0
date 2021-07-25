
const router = require('express').Router();
const { Contact } = require('../../models');
const { router } = require('./home-routes');



// const express = require('express')
// const server = express()

/* route requests for static files to appropriate directory */
router.use('/public', express.static(__dirname + './views/contact.handlebars'))

/* other routes defined before catch-all */
router.get('/contact', (req, res) => {
  res.send('ok')
})

/* final catch-all route to index.html defined last */
router.get('/*', (req, res) => {
  res.sendFile(__dirname + './views/layouts/main.handlebars');
})

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