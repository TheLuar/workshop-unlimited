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

/*
{
  "name": "workshop-unlimited",
  "version": "1.0.0",
  "description": "What about being able to build your dreams’ mech? Or just any mech that ever came in your mind, for free and without limitations? Well, here you go.",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/TheLuar/workshop-unlimited.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/TheLuar/workshop-unlimited/issues"
  },
  "homepage": "https://github.com/TheLuar/workshop-unlimited#readme",
  "dependencies": {
    "express": "^4.17.1",
    "socket.io": "^2.3.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.3"
  }
}
*/