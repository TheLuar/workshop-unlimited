'use strict'


// Packages

const { ItemsManager } = require('../items/ItemsManager')


// General

const itemsM = ItemsManager.gi()


// Class

module.exports.BattlePlayerData = class
{
	id = null
	battleID
	enemieID = null
	items = null
	stats = null
	position = 0
	socket = null
	uses = new Array(20).fill(0)

	constructor (battleID, position, client_player, client_enemie)
	{
		this.id = client_player.socket.id
		this.battleID = battleID
		this.enemieID = client_enemie.socket.id
		this.items = client_player.setup.map(itemID => itemsM.getByID(itemID))
		this.stats = this.createStats(this.items)
		this.position = position
		this.socket = client_player.socket
	}

	createStats (items)
	{
		const stats = {
			health: 0,
			eneCap: 0,
			eneReg: 0,
			heaCap: 0,
			heaCol: 0,
			phyRes: 0,
			expRes: 0,
			eleRes: 0
		}

		for (const item of items)
		{
			if (typeof item !== 'object' || item === null) continue
			for (const key in stats) stats[key] += Number(item.stats[key]) || 0
		}

		stats.healthCap = stats.health
		stats.energy = stats.eneCap,
		stats.heat = 0

		return stats
	}

	getDataForClient ()
	{
		const { id, stats, position } = this
		return { id, stats, position }
	}
}
