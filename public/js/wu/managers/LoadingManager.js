'use strict'


// Packages

import { Singleton } from '../bases/Singleton.js'

import { LoadingScreen } from '../screens/loading/LoadingScreen.js'


// Class

export const LoadingManager = class extends Singleton
{
	constructor ()
	{
		super()

		this.screen = null
	}

	init ()
	{
		this.screen = LoadingScreen.gi()
		this.screen.init('Loading...')

		this._init()
	}

	setText (txt)
	{
		this.screen.text = txt
	}

	setProgress (x)
	{
		this.screen.progress = x
	}
}
