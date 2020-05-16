'use strict'


// Packages

import { Singleton } from '../bases/Singleton.js'
import { WorkshopScreen } from '../screens/workshop/WorkshopScreen.js'
import { StatsResolver } from '../helpers/StatsResolver.js'


// General

let statsResolver = null


// Class

export const WorkshopManager = class extends Singleton
{
	constructor ()
	{
		super()

		this.screen = null
		this.setup = null
	}

	init ()
	{
		statsResolver = StatsResolver.gi()

		const slotConfs = [
			[1, 'torso'],  [2, 'legs'],  [3, 'side-l'], [3, 'side-r'], [3, 'side-l'],
			[3, 'side-r'], [4, 'top-l'], [4, 'top-r'],  [5, 'drone'],  [6, 'charge'],
			[7, 'tele'],   [8, 'hook'],  [9, 'mod'],    [9, 'mod'],    [9, 'mod'],
			[9, 'mod'],    [9, 'mod'],   [9, 'mod'],    [9, 'mod'],    [9, 'mod'],
		];

		this.screen = WorkshopScreen.gi()
		this.screen.init(slotConfs)
		this.screen.addEventListener('selectitem', ({ slot, item }) =>
		{
			slot.setItem(item)
			this.setup[slot.index] = item
			const sum = statsResolver.getMechStatsFromSetup(this.setup)
			this.screen.updateSummary(sum)
			this.screen.updateMech(this.setup)
		})
		this.screen.manager = this

		this.setup = new Array(slotConfs.length).fill(null)

		this._init()
	}
}
