'use strict'


// Packages

const { Singleton } = require('../utils/Singleton')
const { SocketManager } = require('../socket/SocketManager')
const { BattleManager } = require('./BattleManager')


// General

let socketM = null
let battleM = null


// Class

module.exports.MatchMaker = class MatchMaker extends Singleton
{
	setups = {}
	pool = {}

	init ()
	{
		socketM = SocketManager.gi()
		battleM = BattleManager.gi()

		socketM.io.on('connection', socket =>
		{
			socket.on('battle-pool-join', setup =>
			{
				if (this.inPool(socket.id))
					return socketM.error(socket, 'already searching for battle')
				
				if (battleM.inBattle(socket.id))
					return socketM.error(socket, 'already in battle')

				this.joinPool(socket, setup)
			})

			socket.on('battle-pool-quit', () =>
			{
				if (!this.inPool(socket.id))
					return socketM.error(socket, 'not searching for battle')
				
				if (battleM.inBattle(socket.id))
					return socketM.disco(socket, 'searching for battle while in battle')

				this.quitPool(socket)
			})

			socket.on('disconnect', () =>
			{
				this.inPool(socket.id) && this.quitPool(socket)
				battleM.inBattle(socket.id) && battleM.quitBattle(socket)
			})
		})

		this._init()
	}

	joinPool (socket, setup)
	{
		this.pool[socket.id] = socket
		this.setups[socket.id] = setup

		console.log(socket.id, 'has joined the battle pool')

		this.tryToMatch()
	}

	quitPool (socket)
	{
		delete this.pool[socket.id]
		delete this.setups[socket.id]

		console.log(socket.id, 'has left the battle pool')
	}

	tryToMatch ()
	{
		for (const id_A in this.pool)
		{
			for (const id_B in this.pool)
			{
				if (id_B === id_A) continue

				const socket_A = this.pool[id_A]
				const socket_B = this.pool[id_B]

				battleM.beginBattle({ 
					socket: socket_A,
					setup: this.setups[id_A]
				}, { 
					socket: socket_B,
					setup: this.setups[id_B]
				})

				this.quitPool(socket_A)
				this.quitPool(socket_B)

				// Ikr, that is a lot of verbose for such a
				// simple "match making" system. Maybe I'll
				// make something more complex soon. /shrug
			}
		}
	}

	inPool (id)
	{
		return this.pool.hasOwnProperty(id)
	}
}
