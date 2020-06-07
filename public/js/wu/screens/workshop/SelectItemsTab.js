'use strict'


// Outer

import { div, css } from '../../utils/GeneralUtils.js'
import { ItemsManager } from '../../managers/ItemsManager.js'
import { SingletonElement } from '../../bases/SingletonElement.js'


// General

const itemsM = ItemsManager.gi()


// Export

export const SelectItemsTab = class extends SingletonElement
{
	constructor ()
	{
		super()
		
		this.itemBlocksCtn = null
		this.items = null
		this.currentSlot = null

		this.classList.add('tab')
	}

	init ()
	{
		this.itemBlocksCtn = div('item-blocks-container')

		this.addEventListener('click', e =>
		{
			if (!e.target.classList.contains('click-area')) this.select(null)
		})

		this.appendChild(this.itemBlocksCtn)
		this._init()
	}

	setSlot (slot)
	{
		this.itemBlocksCtn.scroll(0, 0)
		if (!this.currentSlot || slot.type !== this.currentSlot.type)
		{
			this.items = itemsM.byType(slot.type)
			this.refreshList()
		}
		this.currentSlot = slot
	}

	refreshList ()
	{
		while (this.itemBlocksCtn.lastChild) this.itemBlocksCtn.lastChild.remove()

		const items = Object.keys(this.items)
			.map(id => this.items[id])
			.sort((a, b) => a.element - b.element)

		for (let i = 0; i < items.length; i++)
		{
			const item  = items[i]
			const gfx   = css(div('gfx'), { backgroundImage: `url(${ item.url })` })
			const cArea = css(div('click-area', { zIndex:1 }))
			const block = div('item-block', { item }, [gfx, cArea], { visibility:'hidden' })

			setTimeout(() =>
			{
				block.style.visibility = ''
				block.addEventListener('click', e =>
				{
					if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents)
					{
						if (block.classList.contains('active'))
						{
							this.select(item)
							return
						}
						Array.from(this.itemBlocksCtn.children).forEach(b => b.classList.remove('active'))
						block.classList.add('active')
						return
					}
					this.select(item)
				})
			}, i * 25)
			this.itemBlocksCtn.appendChild(block)
		}
	}

	select (item)
	{
		this.hide()

		const event = new Event('selectitem')
		event.item = item
		event.slot = this.currentSlot

		this.parentNode.dispatchEvent(event)
	}
}
