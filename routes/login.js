var express = require('express');
var router = express.Router();
User = require('../models/user');

router.get('/', function (req, res, next) {
	User.getLoggedUser(req, function(err, user){
		if(err)
			next(err);
		else
			res.json(user);
	});
});

router.delete('/', function (req, res, next) {
	User.logOutUser(req, function(err){
		if(err)
			next(err);
		else
			res.json({});
	});
});

router.post('/', function (req, res, next) {
	User.loginUser(req, function(err, user){
		if(err)
			next(err);
		else
			res.json(user);
	});
});

module.exports = router;