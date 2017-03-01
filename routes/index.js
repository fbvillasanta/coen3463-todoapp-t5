var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/auth', function(req, res, next) {
	res.render('index', { title: 'Login'});
});

router.get('/register', function(req, res, next) {
    res.render('index', { title: 'Register'});
});

router.get('/forgot', function(req, res, next) {
    res.render('index', { title: 'Forgot'});
});



module.exports = router;
