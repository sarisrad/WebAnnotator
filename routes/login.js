var express = require('express');
var router = express.Router();
User = require('../models/user');

router.get('/', function (req, res) {
	User.getLoggedUser(req, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

router.delete('/', function (req, res) {
	User.logOutUser(req, function(err){
		if(err){
			throw err;
		}
		res.json({});
	});
});

router.post('/', function (req, res) {
	User.loginUser(req, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

module.exports = router;