const express = require('express');
const http = require('http');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio(server);


app.use(express.static('public'));
server.listen(process.env.PORT || 3000);

io.on('connection', socket => {
	console.log(socket.id, 'has connected')
});
