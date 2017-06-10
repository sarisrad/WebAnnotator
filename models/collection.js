var mongoose = require('mongoose');

// Collection Schema
var collectionSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	language:{
		type: String,
		required: true
	},
	create_date:{
		type:Date,
		default: Date.now
	}
});

var Collection = module.exports = mongoose.model('Collection', collectionSchema);

// Get Collections
module.exports.getCollections = function(callback, limit) {
	Collection.find(callback).limit(limit);
}

// Get a single collection by id
module.exports.getCollectionById = function(id, callback) {
	Collection.findById(id, callback);
}

// Add a Collection
module.exports.addCollection = function(collection, callback) {
	Collection.create(collection, callback);
}

// Update a collection
module.exports.updateCollection = function(id, collection, options, callback) {
	var query = {_id: id};
	var update = {}
	if (collection.name) {
		update.name = collection.name;
	}
	if (collection.language) {
		update.language = collection.language;
	}
	Collection.findOneAndUpdate(query, update, options, callback);
}

// Delete a collection
module.exports.deleteCollection = function(id, callback) {
	var query = {_id: id};
	Collection.remove(query, callback);
	// TODO: add deep remove of all related manuscripts
}