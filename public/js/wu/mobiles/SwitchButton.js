'use strict'


// Packages

import { div } from '../utils/GeneralUtils.js'
import { BaseElement } from '../bases/BaseElement.js'
import { defineCustomElement } from '../utils/GeneralUtils.js'
import { ToolTip } from '../mobiles/ToolTip.js'


// General

const toolTip = ToolTip.gi()


// Class

export const SwitchButton = class extends BaseElement
{
	constructor (options = {})
	{
		super()

		const {
			tip = '',
			callback = null,
			state = false
		} = options

		this.tip = tip
		this.callback = callback
		this.state = !!state
		this.thumb = null

		this._init()
	}

	_init ()
	{
		this._build()
		this._setListeners()
		this.toggle(false, this.state)
	}

	_build ()
	{
		this.thumb = div('thumb')
		this.appendChild(this.thumb)
	}

	_setListeners ()
	{
		this.addEventListener('click', () => this.toggle())
		this.addEventListener('mouseenter', () => toolTip.displayHTML(this.tip))
		this.addEventListener('mouseleave', () => toolTip.hide())
	}

	toggle (trigger = true, state = !this.state)
	{
		this.state = state
		this.classList[state ? 'add' : 'remove']('active')
		if (trigger && typeof this.callback === 'function') this.callback(state)
	}
}
defineCustomElement(SwitchButton)
