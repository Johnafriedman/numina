console.log('Starting server in ' + process.env.NODE_ENV + ' mode');

var express = require('express');
var app = express();
app.use(express.static('public'));
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Web server listening on port ' + port);
