var cool = require('cool-ascii-faces');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
console.log('a user connected');
socket.on('xy', function(msg) {
console.log(msg);
io.emit('pos', msg);
});

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
