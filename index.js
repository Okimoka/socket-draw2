var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
console.log('a user connected');

games = ["TF2", "Terraria", "Minecraft", "CSGO"];


for (var i = 0; i < games.length; i++) {
	eval('socket.on("'+games[i]+'", function(vc) {io.emit("'+games[i]+'", vc);})')
};


socket.on("spun", function(vs) {io.emit("adaptVs", vs);})
socket.on("freshCharts", function(fresh){io.emit("freshdumbles", fresh)})
socket.on("realthing", function(stronk){io.emit("actuallySpun", stronk)})


});

http.listen(process.env.PORT || 5000, function(){
  console.log('listening on *:5000');
});
