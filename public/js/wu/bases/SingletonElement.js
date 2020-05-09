'use strict'


// Packages

import { BaseElement } from './BaseElement.js'
import { defineCustomElement } from '../utils/GeneralUtils.js'


// Class

export const SingletonElement = class extends BaseElement
{
	constructor ()
	{
		super()

		this.initialized = false
		
		this.hide()
	}

	_init ()
	{
		this.initialized = true
		console.log(performance.now().toFixed(2), 'init ::', this.constructor.name)
	}

	static gi ()
	{
		if (!this.instance)
		{
			defineCustomElement(this)
			this.instance = new this()
		}
		return this.instance
	}
}
