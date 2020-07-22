'use strict'


// Packages

import { Singleton } from '../../bases/Singleton.js'

import LoadingScreen from './LoadingScreen.js'


// Class

export default class extends Singleton
{
	screen = null

	constructor ()
	{
		super()
	}

	init ()
	{
		this.screen = LoadingScreen.gi()
		this.screen.init('Loading...')
		this.screen.manager = this

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
