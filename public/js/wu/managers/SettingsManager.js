'use strict'


// Packages

import { Singleton } from '../bases/Singleton.js'


// Class

export const SettingsManager = class extends Singleton
{
	constructor ()
	{
		super()
	}

	init ()
	{
		this._init()
	}
}
