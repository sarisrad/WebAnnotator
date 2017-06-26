var mongoose = require('mongoose');

// User Schema
var userSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	family_name:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	affiliation:{
		type: String,
		required: true
	},
	role:{
		type: String,
		required: true
	},
	create_date:{
		type:Date,
		default: Date.now
	}
});

var User = module.exports = mongoose.model('User', userSchema);

// Get Users
module.exports.getUsers = function(callback, limit) {
	User.find(callback).limit(limit);
}

// Get a single user by id
module.exports.getUserById = function(id, callback) {
	User.findById(id, callback);
}

// Add a user
module.exports.addUser = function(user, callback) {
	User.create(user, callback);
}

// Update a user
module.exports.updateUser = function(id, user, options, callback) {
	var query = {_id: id};
	var update = {}
	if (user.name) {
		update.name = user.name;
	}
	if (user.family_name) {
		update.family_name = user.family_name;
	}
	if (user.password) {
		update.password = user.password;
	}
	if (user.email) {
		update.email = user.email;
	}
	if (user.affiliation) {
		update.affiliation = user.affiliation;
	}
	if (user.role) {
		update.role = user.role;
	}
	User.findOneAndUpdate(query, update, options, callback);
}

// Delete a user
module.exports.deleteUser = function(id, callback) {
	var query = {_id: id};
	User.remove(query, callback);
}