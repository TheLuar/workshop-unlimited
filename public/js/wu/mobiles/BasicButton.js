'use strict'


// Packages

import { div } from '../utils/GeneralUtils.js'
import { BaseElement } from '../bases/BaseElement.js'
import { defineCustomElement } from '../utils/GeneralUtils.js'


// Class

export const BasicButton = class extends BaseElement
{
	tip = null

	constructor (options = {})
	{
		super()

		const {
			title = '',
			icon = '',
			text = '',
			className = '',
			callback = null,
			onclick = null,
		} = options

		this.tip = { text: title }

		this.onclick = callback || onclick

		if (className) this.className = className

		if (icon)
		{
			const elmIcon = div('icon', null, null, { backgroundImage: `url(${ icon })` })
			this.appendChild(elmIcon)
		}
		else if (text)
		{
			this.appendChild(div('text', { innerText: text }))
		}
	}
}
defineCustomElement(BasicButton)
