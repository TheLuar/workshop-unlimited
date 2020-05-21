'use strict'


// Packages

import { div } from '../../utils/GeneralUtils.js'
import { SingletonElement } from '../../bases/SingletonElement.js'
import { BasicButton } from '../../mobiles/BasicButton.js'
import { SwitchButton } from '../../mobiles/SwitchButton.js'


// Class

export const SettingsScreen = class extends SingletonElement
{
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

		const rowArenaBuffs = this.createSwitch('Arena Buffs', false, state => this.manager.dispatch('toggle-arena-buffs', state))
		const secWorkshop = this.createSection('Workshop', [rowArenaBuffs])

		const sectionsWrapper = div('sections-wrapper', null, [secWorkshop])
		
		this.appendChildren(header, sectionsWrapper)

		this._init()
	}

	createSection (name, rowElements = [])
	{
		const title = div('title', { innerText: name })
		const rows = div('rows-holder', null, rowElements)
		const section = div('section', null, [title, rows])
		return section
	}

	createSwitch (title, state = false, callback)
	{
		const btn = new SwitchButton({ title: 'Toggle ' + title, state, callback })
		const txt = div('label', { innerText: title })
		const ctn = div('switch-container', null, [btn, txt])
		return ctn
	}
}
