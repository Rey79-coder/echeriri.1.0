const router = require('express').Router();
const { myHeader } = require('../../models');

// ROUTE TO CONTACT US
router.get('/', (req, res) => {
  myHeader.findAll({
    where: {
      about: req.body.about
    }
  }).then(about => {
    if (!about) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }
  });
});


router.get('/:id', (req, res) => {
    User.findOne({
      attributes: { exclude: ['password'] },
      where: {
        id: req.params.id
      },
    });
      

router.post('/homepage', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  myHeader.findOne({
    where: {
      about: req.body.about
    }
  }).then(about => {
    if (!about) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }
  });
});


module.exports = router;
