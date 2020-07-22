'use strict'


// Packages

import { Singleton } from '../../bases/Singleton.js'

import BattleScreen from './BattleScreen.js'


// Class

export default class BattleManager extends Singleton
{
	screen = null

	constructor ()
	{
		super()
	}

	init ()
	{
		this.screen = BattleScreen.gi()
		this._init()
	}
}
