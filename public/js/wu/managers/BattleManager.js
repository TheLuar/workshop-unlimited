'use strict'


// Packages

import { Singleton } from '../bases/Singleton.js'
import { BattleScreen } from '../screens/battle/BattleScreen.js'


// Class

export const BattleManager = class extends Singleton
{
	constructor ()
	{
		super()

		this.screen = null
	}

	init ()
	{
		this.screen = BattleScreen.gi()
		this.screen.manager = this
		this.screen.init()

		this._init()
	}
}
