var express = require('express');
var router = express.Router();
User = require('../models/user');
cookies = require('cookies');

router.get('/', function (req, res) {
	User.getUsers(function(err, users){
		if(err){
			throw err;
		}
		res.json(users);
	});
});

router.get('/:_id', function (req, res) {
	User.getUserById(req.params._id,  function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

router.post('/', function (req, res) {
	var user = req.body; // should validate
	User.addUser(user, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

router.put('/:_id', function (req, res) {
	var id = req.params._id
	var user = req.body; // should validate
	User.updateUser(id, user, {}, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

router.delete('/:_id', function (req, res) {
	var id = req.params._id
	User.deleteUser(id, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

module.exports = router;