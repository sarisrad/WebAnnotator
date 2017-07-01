var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var expressValidator = require('express-validator');
var randomstring = require('randomstring');

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

// Connect to Mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:root@ds119682.mlab.com:19682/webannotator');
var db = mongoose.connection;

// app.use(cookieParser());
app.use(expressValidator());
// TODO: change the session storing from memory
app.use(expressSession({secret: randomstring.generate(32), saveUninitialized: false, resave: false, cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }}));
app.use(permissions.checkAuth);
app.use('/', indexRoute);
app.use('/api/users', usersRoute);
app.use('/api/collections', collectionsRoute);
app.use('/api/manuscripts', manuscriptsRoute);
app.use('/api/login', loginRoute);

app.listen(port);
console.log('Running on port ' + port + '...');