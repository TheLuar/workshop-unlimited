'use strict'


// Dependences

import { div } from '../utils/GeneralUtils.js'
import { SingletonElement } from '../bases/SingletonElement.js'
import { ItemsManager } from '../managers/ItemsManager.js'
import { StatBlock } from './StatBlock.js'


// General

const itemsM = ItemsManager.gi()


// Class

export const ToolTip = class extends SingletonElement
{
	constructor ()
	{
		super()
	}

	init (container = document.body)
	{
		container.appendChild(this)
		container.addEventListener('mousemove', e =>
		{
			const cx = this.parentNode.offsetWidth  / 2
			const cy = this.parentNode.offsetHeight / 2
			const x = e.x - this.parentNode.offsetLeft
			const y = e.y - this.parentNode.offsetTop

			this.x = x + (x > cx ? -this.offsetWidth  - 20 : 20)
			this.y = y + (y > cy ? -this.offsetHeight - 20 : 20)
		})

		this._init()
	}

	displayHTML (html)
	{
		this.clear()
		this.innerHTML = html
		this.show()
	}

	displayItem (item)
	{
		if (!item)
		{
			this.hide()
			return
		}

		this.clear()

		const content = []

		content.push(div('item-name', { innerText: item.name }))
		content.push(div('item-kind', { innerText: itemsM.getItemKind(item) }))

		if (itemsM.isPremium(item)) content.push(div('is-premium', { innerText: 'PREMIUM' }))

		content.push(div('horizontal-separator'))

		for (const key in item.stats)
		{
			const block = new StatBlock(key, item.stats[key])
			content.push(block)
		}

		this.appendChildren(...content)
		this.show()
	}
 
	clear ()
	{
		while (this.lastChild) this.lastChild.remove()
	}

	set x (n) { this.style.left = (this._x = n) + 'px' }
	set y (n) { this.style.top  = (this._y = n) + 'px' }
}
