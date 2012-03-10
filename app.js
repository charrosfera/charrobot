var app = require('express').createServer();
var io = require('socket.io').listen(app);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

var port = process.env.PORT || 5000;
app.listen(port);

io.sockets.on('connection', function (socket) {
    socket.on('nickname', function (data) {
        socket.emit('welcome', 'Hello ' + data);
    });
});
