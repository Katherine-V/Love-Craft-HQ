const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home', {logged_in: req.session.logged_in});
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;
