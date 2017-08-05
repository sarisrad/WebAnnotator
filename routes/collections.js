var express = require('express');
var router = express.Router();
Collection = require('../models/collection');

router.get('/', function (req, res, next) {
	Collection.getCollections(function(err, collections){
		if(err)
			next(err);
		else
			res.json(collections);
	});
});

router.get('/:_id', function (req, res, next) {
	Collection.getCollectionById(req.params._id,  function(err, collection){
		if(err)
			next(err);
		else
			res.json(collection);
	});
});

router.post('/', function (req, res, next) {
	var collection = req.body; // should validate
	Collection.addCollection(collection, function(err, collection){
		if(err)
			next(err);
		else
			res.json(collection);
	});
});

router.put('/:_id', function (req, res, next) {
	var id = req.params._id
	var collection = req.body; // should validate
	Collection.updateCollection(id, collection, {}, function(err, collection){
		if(err)
			next(err);
		else
			res.json(collection);
	});
});

router.delete('/:_id', function (req, res, next) {
	var id = req.params._id
	Collection.deleteCollection(id, function(err, collection){
		if(err)
			next(err);
		else
			res.json(collection);
	});
});

module.exports = router;