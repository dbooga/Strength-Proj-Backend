// Imports
var mongoose = require('mongoose');

// User Schema to map to MongoDB
var userSchema = mongoose.Schema({
	firstname:{
		type: String,
		required: true
	},
	lastname:{
		type: String
	},
	email:{
		type: String
	},
	height:{
		feet: Number,
		inch: Number
	},
	weight:{
		type: Number
	},
	age:{
		type: Number
	},
	bench:{
		type: Number
	},
	squat:{
		type: Number
	},
	deadlift:{
		type: Number
	},
	created:{
		type: Date,
		default: Date.now
	}
});

var User = module.exports = mongoose.model('users', userSchema); // Exports User var to be imported
															   // Also maps user to db collection

// Get USers
module.exports.getUsers = function(callback, limit){
	User.find(callback).limit(limit);
}

// Get User
module.exports.getUserById = function(id, callback){
	User.findById(id, callback);					
}

// Add User
module.exports.addUser = function(user, callback){
	User.create(user, callback);
}