'use strict'


// Packages

import { Singleton } from '../bases/Singleton.js'
import { WorkshopScreen } from '../screens/workshop/WorkshopScreen.js'
import { SocketManager } from '../managers/SocketManager.js'
import { ItemsManager } from '../managers/ItemsManager.js'
import { StatsResolver } from '../helpers/StatsResolver.js'


// General

let socketM = null
let itemsM = null
let statsResolver = null


// Class

export const WorkshopManager = class extends Singleton
{
	screen = null
	setup = []

	constructor ()
	{
		super()
	}

	init ()
	{
		socketM = SocketManager.gi()
		itemsM = ItemsManager.gi()
		statsResolver = StatsResolver.gi()

		const slotConfs = [
			[1, 'torso'],  [2, 'legs'],  [3, 'side-l'], [3, 'side-r'], [3, 'side-l'],
			[3, 'side-r'], [4, 'top-l'], [4, 'top-r'],  [5, 'drone'],  [6, 'charge'],
			[7, 'tele'],   [8, 'hook'],  [9, 'mod'],    [9, 'mod'],    [9, 'mod'],
			[9, 'mod'],    [9, 'mod'],   [9, 'mod'],    [9, 'mod'],    [9, 'mod']
		]

		this.screen = WorkshopScreen.gi()
		this.screen.init(this, slotConfs)

		this.setup = new Array(slotConfs.length).fill(null)

		this.setScreenListeners(this.screen)

		this._init()
	}

	setScreenListeners (scr)
	{
		scr.addEventListener('selectitem', ({ slot, item }) =>
		{
			slot.setItem(item)
			this.setup[slot.index] = item
			this.updateSummary()
			
			if (itemsM.DISPLAYABLE_ITEM_TYPES.includes(slot.type)) this.updateMechDisplay()
		})

		scr.btn_searchBattle.onclick = () =>
		{
			console.log('battle-pool-join')
			console.log(this.setup)
			socketM.battlePool_join(this.setup.map(item => item ? item.id : '0'))
			scr.tab_searchingForBattle.show()
		}

		scr.tab_searchingForBattle.btn_cancel.onclick = () =>
		{
			console.log('battle-pool-quit')
			socketM.battlePool_quit()
			scr.tab_searchingForBattle.hide()
		}
	}

	updateSummary ()
	{
		this.screen.updateSummary(statsResolver.getMechStatsFromSetup(this.setup))
	}

	updateMechDisplay ()
	{
		this.screen.updateMechDisplay(this.setup)
	}
}
