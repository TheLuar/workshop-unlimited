'use strict'


// Packages

import { dom } from '../utils/GeneralUtils.js'
import { BaseElement } from '../bases/BaseElement.js'
import { defineCustomElement } from '../utils/GeneralUtils.js'
import { ToolTip } from '../mobiles/ToolTip.js'


// General

const toolTip = ToolTip.gi()


// Class

export const BasicButton = class extends BaseElement
{
	constructor (options = {})
	{
		super()

		const {
			title = '',
			icon = '',
			className = '',
			callback = null,
		} = options

		this.tip = { text: title }
		this.style.backgroundImage = `url(${ icon })`

		this.addEventListener('click', callback)

		if (className) this.className = className
	}
}
defineCustomElement(BasicButton)
