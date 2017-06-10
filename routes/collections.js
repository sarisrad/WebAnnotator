var express = require('express');
var router = express.Router();
Collection = require('../models/collection');

router.get('/', function (req, res) {
	Collection.getCollections(function(err, collections){
		if(err){
			throw err;
		}
		res.json(collections);
	});
});

router.get('/:_id', function (req, res) {
	Collection.getCollectionById(req.params._id,  function(err, collection){
		if(err){
			throw err;
		}
		res.json(collection);
	});
});

router.post('/', function (req, res) {
	var collection = req.body; // should validate
	Collection.addCollection(collection, function(err, collection){
		if(err){
			throw err;
		}
		res.json(collection);
	});
});

router.put('/:_id', function (req, res) {
	var id = req.params._id
	var collection = req.body; // should validate
	Collection.updateCollection(id, collection, {}, function(err, collection){
		if(err){
			throw err;
		}
		res.json(collection);
	});
});

router.delete('/:_id', function (req, res) {
	var id = req.params._id
	Collection.deleteCollection(id, function(err, collection){
		if(err){
			throw err;
		}
		res.json(collection);
	});
});

module.exports = router;