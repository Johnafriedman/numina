console.log('Starting server in ' + process.env.NODE_ENV + ' mode');

// var express = require('express');
// var app = express();
// app.use(express.static('www'));
// var port = process.env.PORT || 3000;
// app.listen(port);
// console.log('Web server listening on port ' + port);

var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var app = express();
app.use(sslRedirect());
app.use(express.static('www'));
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Web server listening on port ' + port);