'use strict'


// Packages

import { Singleton } from '../bases/Singleton.js'
import { SettingsScreen } from '../screens/settings/SettingsScreen.js'


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
		this.screen = SettingsScreen.gi()
		this.screen.init()
		this.screen.manager = this

		this._init()
	}
}
