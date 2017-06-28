var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cookie = require('cookie');
var cookieSession = require('cookie-session');
var cookieParser = require('cookie-parser');

var indexRoute = require('./routes/index');
var usersRoute = require('./routes/users');
var collectionsRoute = require('./routes/collections');
var manuscriptsRoute = require('./routes/manuscripts');
var loginRoute = require('./routes/login');
var permissions = require('./permissions');

var port = 8000;

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cookies Stuff
app.use(cookieSession({
	name: 'session',
	keys: [ 'sessionHash' ],
	maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));
app.use(cookieParser());

// Connect to Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:root@ds119682.mlab.com:19682/webannotator');
var db = mongoose.connection;

app.use(permissions.checkAuth);
app.use('/', indexRoute);
app.use('/api/users', usersRoute);
app.use('/api/collections', collectionsRoute);
app.use('/api/manuscripts', manuscriptsRoute);
app.use('/api/login', loginRoute);

app.listen(port);
console.log('Running on port ' + port + '...');