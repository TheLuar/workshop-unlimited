'use strict'


// Packages

const { BattlePlayerData } = require('./BattlePlayerData')


// General

let battleCount = 0


// Class

module.exports.BattleData = class
{
	id = ++battleCount
	history = []
	movesCount = 0
	moves = 1
	players = {}
	attacker = null

	constructor (client_A, client_B)
	{
		const attackerPos = 2 + Math.floor(Math.random() * 4)
		const defenderPos = 11 - attackerPos

		const playerA = new BattlePlayerData(this.id, attackerPos, client_A, client_B)
		const playerB = new BattlePlayerData(this.id, defenderPos, client_B, client_A)

		this.players[client_A.socket.id] = playerA
		this.players[client_B.socket.id] = playerB

		this.attacker = playerA
	}

	getAttacker ()
	{
		return this.attacker
	}

	getDefender ()
	{
		return this.players[this.attacker.enemieID]
	}

	passTurn ()
	{
		this.attacker = this.getDefender()
	}

	getDataForClient ()
	{
		const { moves } = this

		const attacker = this.getAttacker()
		const defender = this.getDefender()

		return {
			moves,
			attacker: attacker.id,
			players: {
				[attacker.id]: attacker.getDataForClient(),
				[defender.id]: defender.getDataForClient()
			}
		}
	}
}
