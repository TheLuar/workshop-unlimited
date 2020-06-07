'use strict'


// Packages

const socketio = require('socket.io')
const { Singleton } = require('../utils/Singleton')


// class

module.exports.SocketManager = class SocketManager extends Singleton
{
	io = null
	sockets = {}

	init (server)
	{
		this.io = socketio(server)

		this.io.on('connection', socket =>
		{
			this.sockets[socket.id] = socket
		})

		this.io.on('disconnect', socket =>
		{
			delete this.sockets[socket.id]
		})

		this._init()
	}

	error (socket, data = null)
	{
		if (typeof data === 'string') data = { message: data }
		
		socket.emit('data_error', data)
	}

	disco (socket, data = null)
	{
		if (typeof data === 'string') data = { message: data }

		socket.emit('disco', data)
		socket.disconnect()
	}
}
