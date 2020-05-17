'use strict'


// Dependences

import { div, css, defineCustomElement } from '../../utils/GeneralUtils.js'
import { BaseElement } from '../../bases/BaseElement.js'
import { ToolTip } from '../../mobiles/ToolTip.js'


// General

let toolTip = null


// Export

export const EquipmentSlot = class extends BaseElement
{
	constructor (SelectItemsTab, type, iconName)
	{
		super()

		const backgroundImage = `url(../../../img/slots/${ iconName }.svg)`

		this.iconGfx = css(div('icon-gfx'), { backgroundImage })
		this.itemGfx = div('item-gfx')

		this.type = type
		this.item = null

		this.classList.add('ui')
		this.appendChildren(this.iconGfx, this.itemGfx)
		this.init(SelectItemsTab)
	}

	init (SelectItemsTab)
	{
		toolTip = ToolTip.gi()
		
		this.addEventListener('mouseenter', () => toolTip.displayItem(this.item))
		this.addEventListener('mouseleave', () => toolTip.hide())
		
		this.addEventListener('click', () =>
		{
			SelectItemsTab.setSlot(this)
			SelectItemsTab.show()
		})
	}
	
	setItem (item)
	{
		if (!item)
		{
			this.clear()
			return
		}
		this.item = item
		this.itemGfx.style.backgroundImage = `url(${ item.url })`
		this.itemGfx.style.display = ''
		this.iconGfx.style.display = 'none'
	}

	clear ()
	{
		this.item = null
		this.iconGfx.style.display = ''
		this.itemGfx.style.display = 'none'
	}
}
defineCustomElement(EquipmentSlot)
