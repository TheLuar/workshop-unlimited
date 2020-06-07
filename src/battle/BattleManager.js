'use strict'


// Packages

const { Singleton } = require('../utils/Singleton')
const { BattleData } = require('./BattleData')


// Class

module.exports.BattleManager = class BattleManager extends Singleton
{
	map = {}
	battles = {}

	constructor ()
	{
		super()
	}

	init ()
	{
		this._init()
	}

	beginBattle (client_A, client_B)
	{
		this.map[client_A.socket.id] = client_A.socket
		this.map[client_B.socket.id] = client_B.socket

		const battle = new BattleData(client_A, client_B)

		// console.log(battle)

		const clientFriendlyBattleData = battle.getDataForClient()

		battle.getAttacker().socket.emit('battle-begin', clientFriendlyBattleData)
		battle.getDefender().socket.emit('battle-begin', clientFriendlyBattleData)

		this.battles[battle.id] = battle
	}

	inBattle (socket_id)
	{
		return this.map.hasOwnProperty(socket_id)
	}
}
