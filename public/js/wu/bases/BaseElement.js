'use strict'


// Class

export const BaseElement = class extends HTMLElement
{
	constructor ()
	{
		super()
	}

	appendChildren ()
	{
		for (const elm of arguments) this.appendChild(elm)
	}

	hide () { this.style.display = 'none' }
	show () { this.style.display = '' }

	get visible ()
	{
		return !this.style.display
	}
}
