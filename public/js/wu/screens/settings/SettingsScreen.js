'use strict'


// Packages

import { div } from '../../utils/GeneralUtils.js'
import { SingletonElement } from '../../bases/SingletonElement.js'
import { BasicButton } from '../../mobiles/BasicButton.js'
import { SwitchButton } from '../../mobiles/SwitchButton.js'


// Class

export default class SettingsScreen extends SingletonElement
{
	sectionsWrapper = null
	
	constructor ()
	{
		super()

		this.classList.add('screen')
	}

	init ()
	{
		const btnGoBack = new BasicButton({
			title: 'Go Back',
			icon: '../../../../img/general/x.svg',
			callback: () => this.manager.dispatch('goto', '_'),
		})

		const txtSettings = div('text', { innerText: 'Settings' })
		const header = div('header', null, [btnGoBack, txtSettings])

		this.sectionsWrapper = div('sections-wrapper')
		
		this.appendChildren(header, this.sectionsWrapper)

		this._init()
	}

	addSection (name, rows = [])
	{
		const toggles = rows.map(data => this.createSwitch(...data))
		const section = this.createSection(name, toggles)

		this.sectionsWrapper.appendChild(section)
	}

	createSection (name, children = [])
	{
		const title = div('title', { innerText: name })
		const rows = div('rows-holder', null, children)
		const section = div('section', null, [title, rows])
		return section
	}

	createSwitch (label, state, callback)
	{
		const btn = new SwitchButton({ tip: 'Toggle ' + label, state, callback })
		const txt = div('label', { innerText: label })
		const ctn = div('switch-container', null, [btn, txt])
		return ctn
	}
}
