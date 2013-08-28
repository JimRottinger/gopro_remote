var Camera = require('./index').Camera
var cam = new Camera('10.5.5.9', 'password_here')
var http = require ('http');
var express = require('express');
var url = require('url');

var app = express();
var server = require('http').createServer(app).listen(8080);
var io = require('socket.io').listen(server);
console.log('Listening on port 8080...');

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use(express.static(__dirname + '/css'));

app.get('/index', function (req, res){
    res.render('index.html');
});


io.sockets.on('connection', function (client) {
  client.on("action", function(action){
  	console.log(action);
  });
});