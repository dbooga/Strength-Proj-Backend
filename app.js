// Imports
var express = require('express');
var app = express();
var bodyParser = require('body-parser');						// For input fields
var mongoose = require('mongoose');

app.use(bodyParser.json());										// Enables POST to APIs

// Modules to bring in (classes to bring in from other files)
User = require('./models/user');								// Bring in mongoose model

// Connect to Mongoose
mongoose.connect('mongodb://localhost/strengthdb')
var db = mongoose.connection;

// Route to HOME
app.get('/', function(req, res){
	res.send('Please use /api/users');
});

// GET ALL USERS
app.get('/api/users', function(req,res){
	// Calls getUsers API function of Users module
	User.getUsers(function(err,users){
		if(err){
			throw err;
		}
		// Get the response from API and read as JSON
		res.json(users);
	});
});

// GET USER BY ID
app.get('/api/user/:_id', function(req,res){					// _id is passed in parameter to url
	// Calls getUserById API function of Users module
	User.getUserById(req.params._id, function(err,user){		// _id is passed to function call
		if(err){
			throw err;
		}
		// Get the response from API and read as JSON
		res.json(user);
	});
});

// CREATE USER
app.post('/api/users/', function(req,res){		
	var user = req.body;										// Grabs request body from post call
	// Calls addUser API function of Users module
	User.addUser(user, function(err,user){						// user is passed to function call
		if(err){
			throw err;
		}
		// Get the response from API and read as JSON
		res.json(user);
	});
});

// Specify port to run on
app.listen(3000);
console.log('Running on port 3000...');