var express = require('express');
var router = express.Router();
Manuscript = require('../models/manuscript');

router.get('/', function (req, res) {
	Manuscript.getManuscripts(function(err, manuscripts){
		if(err){
			throw err;
		}
		res.json(manuscripts);
	});
});

router.get('/:_id', function (req, res) {
	Manuscript.getManuscriptById(req.params._id,  function(err, manuscript){
		if(err){
			throw err;
		}
		res.json(manuscript);
	});
});

router.post('/', function (req, res) {
	var manuscript = req.body; // should validate
	Manuscript.addManuscript(manuscript, function(err, manuscript){
		if(err){
			throw err;
		}
		res.json(manuscript);
	});
});

router.put('/:_id', function (req, res) {
	var id = req.params._id
	var manuscript = req.body; // should validate
	Manuscript.updateManuscript(id, manuscript, {}, function(err, manuscript){
		if(err){
			throw err;
		}
		res.json(manuscript);
	});
});

router.delete('/:_id', function (req, res) {
	var id = req.params._id
	Manuscript.deleteManuscript(id, function(err, manuscript){
		if(err){
			throw err;
		}
		res.json(manuscript);
	});
});

module.exports = router;