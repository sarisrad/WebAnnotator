var express = require('express');
var router = express.Router();


// Main route
router.get(/^[/](?!api)([a-z]*)/gm, function (req, res) {  // regexp excluding /api routes
	res.render('index.html');
});

module.exports = router;