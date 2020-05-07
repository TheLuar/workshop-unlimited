'use strict'



const express = require('express')
const http = require('http')
const socketio = require('socket.io')



const app = express()
const server = http.createServer(app)
const io = socketio(server)
const PORT = process.env.PORT || 3000



const run = () =>
{
	app.use(express.static('public'))
	http.listen(PORT)
}



io.on('connection', socket =>
{

})



run()
