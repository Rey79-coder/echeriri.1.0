
const router = require('express').Router();
const { Team } = require('../../models');
const { router } = require('./home-routes');



// const express = require('express')
// const server = express()

/* route requests for static files to appropriate directory */
router.use('/public', express.static(__dirname + './views/team.handlebars'))

/* other routes defined before catch-all */
router.get('/team', (req, res) => {
  res.send('ok')
})

/* final catch-all route to index.html defined last */
router.get('/*', (req, res) => {
  res.render(__dirname + './views/team.handlebars');
})

module.exports = router;
