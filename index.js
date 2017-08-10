var path = require('path');
var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var dashboard = require('./parse/dashboard');
var baas = require('./parse/baas');

var app = express();
app.use('/public', express.static(path.join(__dirname, 'public')));

// Serve the Parse API on the /parse URL prefix
var parseMountPath = process.env.PARSE_MOUNT || '/parse';
app.use(parseMountPath, baas);

// Serve dashboard on the /dashboard url
var dashboardMountPath = process.env.PARSE_DASHBOARD_MOUNT || '/dashboard';
app.use(dashboardMountPath, dashboard);

// Parse Server plays nicely with the rest of your web routes
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// run server
var port = process.env.PORT || 1337;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function () {
  console.log('parse-baas running on port ' + port + '.');
});

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);