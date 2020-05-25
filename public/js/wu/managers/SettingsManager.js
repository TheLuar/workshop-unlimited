'use strict'


// Packages

import { Singleton } from '../bases/Singleton.js'
import { SettingsScreen } from '../screens/settings/SettingsScreen.js'
import { GeneralSettings } from '../helpers/GeneralSettings.js'
import { WorkshopManager } from '../managers/WorkshopManager.js'


// General

let workshopM = null

const toggleBuff = (key, state) =>
{
	GeneralSettings.toggle(key, state)
	workshopM.updateSummary()
}


// Class

export const SettingsManager = class extends Singleton
{
	constructor ()
	{
		super()

		this.screen = null
	}

	init ()
	{
		workshopM = WorkshopManager.gi()

		this.screen = SettingsScreen.gi()
		this.screen.init()
		this.screen.manager = this

		this.screen.addSection('Workshop', [
			['Arena Buffs', true, state => toggleBuff('arena_buffs', state)],
			['Divine tier', true, state => toggleBuff('divine_tier', state)],
			['Buffs on ToolTip', true, state => toggleBuff('buffs_on_tooltip', state)]
		])
		
		this._init()
	}
}
