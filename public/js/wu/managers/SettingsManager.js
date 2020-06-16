'use strict'


// Packages

import { Singleton } from '../bases/Singleton.js'
import { SettingsScreen } from '../screens/settings/SettingsScreen.js'
import { GeneralSettings } from '../helpers/GeneralSettings.js'
import { WorkshopManager } from '../managers/WorkshopManager.js'


// General

let workshopM = null
let generalSettings = null

const toggleBuff = (key, state) =>
{
	generalSettings.toggle(key, state)
	workshopM.updateSummary()
}


// Class

export const SettingsManager = class extends Singleton
{
	screen = null

	constructor ()
	{
		super()
	}

	init ()
	{
		workshopM = WorkshopManager.gi()
		generalSettings = GeneralSettings.gi()


		if (!generalSettings.initialized) throw new Error(`${ generalSettings.constructor.name } has to be initialized before me!`)


		this.screen = SettingsScreen.gi()
		this.screen.init()
		this.screen.manager = this


		this.screen.addSection('General', [
			[
				'Mobile Device Mode',
				generalSettings.get('mobile_device_mode'),
				state => generalSettings.toggle('mobile_device_mode', state)
			]
		])

		this.screen.addSection('Workshop', [[
				'Arena Buffs',
				generalSettings.get('arena_buffs'),
				state => toggleBuff('arena_buffs', state)
			], [
				'Divine Tier',
				generalSettings.get('divine_tier'),
				state => toggleBuff('divine_tier', state)
			], [
				'Buffs on ToolTip',
				generalSettings.get('buffs_on_tooltip'),
				state => generalSettings.toggle('buffs_on_tooltip', state)
			]
		])
		

		this._init()
	}
}
