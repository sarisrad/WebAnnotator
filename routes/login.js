var express = require('express');
var router = express.Router();
User = require('../models/user');

router.post('/', function (req, res) {
	User.loginUser(req, function(err, user){
		if(err){
			throw err;
		}
		res.json(user);
	});
});

module.exports = router;