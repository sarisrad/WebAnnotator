var express = require('express');
var router = express.Router();
User = require('../models/user');
var bcrypt = require('bcryptjs');

router.post('/', function (req, res) {
	User.loginUser(req.body, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

module.exports = router;