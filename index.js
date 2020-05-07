'use strict'


const express = require('express');
const http = require('http');
// const socketio = require('socket.io');


const PORT = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
// const io = socketio(server);


app.use(express.static('public'))
server.listen(PORT)
