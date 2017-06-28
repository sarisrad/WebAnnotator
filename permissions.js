var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var cookie = require('cookie');

// This function runs automatically before every server request
checkAuth = function(req, res, next){
				// console.log('checkAuth ' + req.url);
				// console.log('session ' + req.sessionOptions.maxAge);
				// console.log('cookies ' + req.cookies);

				// don't serve /secure to those not logged in
				// you should add to this list, for each and every secure url
				// if (req.url === '/secure' && (!req.session || !req.session.authenticated)) {
				// 	res.render('unauthorised', { status: 403 });
				// 	return;
				// }
				next();
			}

module.exports = { checkAuth }

// cookie example
// function onRequest(req, res) {
//   // Parse the query string 
//   var query = url.parse(req.url, true, true).query;
 
//   if (query && query.name) {
//     // Set a new cookie with the name 
//     res.setHeader('Set-Cookie', cookie.serialize('name', String(query.name), {
//       httpOnly: true,
//       maxAge: 60 * 60 * 24 * 7 // 1 week 
//     }));
 
//     // Redirect back after setting cookie 
//     res.statusCode = 302;
//     res.setHeader('Location', req.headers.referer || '/');
//     res.end();
//     return;
//   }