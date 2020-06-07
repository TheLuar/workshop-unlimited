'use strict'


// Dependences

import { div } from '../utils/GeneralUtils.js'
import { SingletonElement } from '../bases/SingletonElement.js'
import { ItemsManager } from '../managers/ItemsManager.js'
import { StatBlock } from './StatBlock.js'
import { StatsManager } from '../managers/StatsManager.js'
import { StatsResolver } from '../helpers/StatsResolver.js'
import { GeneralSettings } from '../helpers/GeneralSettings.js'


// General

let itemsM = null
let statsM = null
let statsResolver = null


// Class

export const ToolTip = class extends SingletonElement
{
	_offset = 20 // distance from pointer (pixels)
	_tip = null
	_lastTarget = null

	statBlocks = {}
	elm_textAndHTML = div('text-and-html')

	constructor ()
	{
		super()
	}

	init (container = document.body)
	{
		itemsM = ItemsManager.gi()
		statsM = StatsManager.gi()
		statsResolver = StatsResolver.gi()

		container.appendChild(this)
		container.addEventListener('mousemove', e =>
		{
			if (e.target !== this._lastTarget)
			{
				this._lastTarget = e.target
				this._findTip(e.target)

				if (this._changed) this._render()
			}

			if (this._tip)
			{
				const cx = this.parentNode.offsetWidth  / 2
				const cy = this.parentNode.offsetHeight / 2
				const x = e.x - this.parentNode.offsetLeft
				const y = e.y - this.parentNode.offsetTop
	
				this.x = x + (x > cx ? -this.offsetWidth  - this._offset : this._offset)
				this.y = y + (y > cy ? -this.offsetHeight - this._offset : this._offset)
			}
		})

		for (const key in statsM.mapByKey) this.statBlocks[key] = new StatBlock(key)

		this._init()
	}

	_findTip (HTMLElement)
	{
		let target = HTMLElement
		let newTip = null

		this._changed = false

		while (target !== this.parentNode)
		{
			if (typeof target.tip === 'object' && target.tip)
			{
				newTip = target.tip
				break
			}
			target = target.parentNode
		}

		if (newTip !== this.tip)
		{
			this._tip = newTip
			this._changed = true
		}
	}

	_render ()
	{
		this._clear()

		if (!this._tip) return this.hide()
		
		const { item, html, text } = this._tip
		
		this.show()

		if (item) return this._renderItem(item)
		if (html) return this._renderHTML(html)
		if (text) return this._renderText(text)

		this.hide()
	}

	_renderItem (item)
	{
		const content = []
		const sub = []

		content.push(div('item-name', { innerText: item.name }))

		sub.push(div('item-kind', { innerText: itemsM.getItemKind(item) }))

		if (itemsM.isPremium(item))   sub.push(div('is-premium',   { innerText: 'PREMIUM' }))
		if (itemsM.requireJump(item)) sub.push(div('require-jump', { innerText: 'Require Jump' }))
		
		if (GeneralSettings.get('divine_tier')
		 && GeneralSettings.get('buffs_on_tooltip')
		 && !item.divine
		 && item.tiers[1] > 4)
			sub.push(div('divine-missing', { innerText: '(Divine Stats Missing)' }))
		
		content.push(div('sub', null, sub))
		content.push(div('horizontal-separator'))
		
		for (const key in this.statBlocks)
		{
			if (!item.stats.hasOwnProperty(key)) continue

			const useArenaBuffs = key !== 'health'
			const value = statsResolver.get(item, key, useArenaBuffs)
			const statBlock = this.statBlocks[key]

			statBlock.val(value)
			content.push(statBlock)
		}

		this.appendChildren(...content)
	}

	_renderHTML (html)
	{
		this.innerHTML = html
	}

	_renderText (text)
	{
		this.innerText = text
	}
 
	_clear ()
	{
		while (this.lastChild) this.lastChild.remove()
	}

	set x (n) { this.style.left = (this._x = n) + 'px' }
	set y (n) { this.style.top  = (this._y = n) + 'px' }
}
