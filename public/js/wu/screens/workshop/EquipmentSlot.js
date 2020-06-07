'use strict'


// Dependences

import { div, css, defineCustomElement } from '../../utils/GeneralUtils.js'
import { BaseElement } from '../../bases/BaseElement.js'


// Export

export const EquipmentSlot = class extends BaseElement
{
	type = 0
	item = null
	tip = null

	elm_icon = null
	elm_itemImg = null

	constructor (SelectItemsTab, type, iconName)
	{
		super()

		const backgroundImage = `url(../../../img/slots/${ iconName }.svg)`

		this.elm_icon = css(div('icon-gfx'), { backgroundImage })
		this.elm_itemImg = div('item-gfx')

		this.type = type

		this.classList.add('ui')
		this.appendChildren(this.elm_icon, this.elm_itemImg)
		this.init(SelectItemsTab)
	}

	init (SelectItemsTab)
	{
		this.addEventListener('click', () =>
		{
			SelectItemsTab.setSlot(this)
			SelectItemsTab.show()
		})
	}
	
	setItem (item)
	{
		if (!item) return this.clear()

		this.item = item
		this.tip = { item }
		this.elm_itemImg.style.backgroundImage = `url(${ item.url })`
		this.elm_itemImg.style.display = ''
		this.elm_icon.style.display = 'none'
	}

	clear ()
	{
		this.item = null
		this.tip = null
		this.elm_itemImg.style.display = 'none'
		this.elm_icon.style.display = ''
	}
}
defineCustomElement(EquipmentSlot)
