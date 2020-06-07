'use strict'


// Packages

import { Singleton } from '../bases/Singleton.js'
import { WorkshopUnlimited } from '../WorkshopUnlimited.js'


// General

let wu = null


// Class

export const SocketManager = class extends Singleton
{
	socket = null

	constructor ()
	{
		super()
	}

	init ()
	{
		wu = WorkshopUnlimited.gi()

		this.socket = io()

		this.setListeners()

		this._init()
	}

	setListeners ()
	{
		// Connection

		this.socket.on('connect', () => console.log('connected to socket as', this.socket.id))

		this.socket.on('disco', err => console.error('DISCONNECT', err))


		// General Events

		this.socket.on('data_error', console.error)


		// Battle

		this.socket.on('battle-begin', battleData =>
		{
			console.log(battleData)
			// battleM.
			wu.goToScreen('battle')
		})
	}

	battlePool_join (setup)
	{
		this.socket.emit('battle-pool-join', setup)
	}

	battlePool_quit ()
	{
		this.socket.emit('battle-pool-quit')
	}
}
