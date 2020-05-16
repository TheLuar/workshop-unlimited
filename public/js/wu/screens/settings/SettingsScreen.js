'use strict'


// Packages

import { div } from '../../utils/GeneralUtils.js'
import { SingletonElement } from '../../bases/SingletonElement.js'
import { BasicButton } from '../../mobiles/BasicButton.js'


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

		const header = div('header', null, [btnGoBack])

		const secWorkshop = this.createSection('Workshop')

		const sectionsWrapper = div('sections-wrapper', null, [secWorkshop])
		
		this.appendChildren(header, sectionsWrapper)

		this._init()
	}

	createSection (name)
	{
		const title = div('title', { innerText: name })
		const rows = div('rows-holder', { innerText: 'Soon' })
		const section = div('section', null, [title, rows])

		return section
	}
}
