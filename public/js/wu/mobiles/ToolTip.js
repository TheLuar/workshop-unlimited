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
	_x = 0
	_y = 0

	offset = 20 // distance from tooltip to pointer (pixels)
	changed = false
	currentTip = null
	lastTarget = null

	statBlocks = []
	

	elm_title = null
	
	elm_itemKind = null
	elm_itemIsPremium = null
	elm_itemRequireJump = null
	elm_itemMissingDivine = null

	ctn_itemDetails = null
	ctn_statBlocks = null
	
	elm_textAndHTML = null


	constructor ()
	{
		super()
	}

	init (container = document.body)
	{
		itemsM = ItemsManager.gi()
		statsM = StatsManager.gi()
		statsResolver = StatsResolver.gi()


		this.statBlocks = statsM.list.map(statConf => new StatBlock(statConf.key))


		this.elm_title = div('title')

		this.elm_itemKind = div('item-kind')
		this.elm_itemIsPremium = div('item-is-premium', { innerText: 'PREMIUM' })
		this.elm_itemRequireJump = div('item-require-jump', { innerText: 'Require Jump' })
		this.elm_itemMissingDivine = div('item-missing-divine', { innerText: '(Divine Stats Missing)' })

		this.ctn_itemDetails = div('item-details', null, [
			div('horizontal-separator'),
			this.elm_itemKind,
			this.elm_itemIsPremium,
			this.elm_itemRequireJump,
			this.elm_itemMissingDivine
		])

		this.ctn_statBlocks = div('stat-blocks',  null, [
			div('horizontal-separator'),
			...this.statBlocks
		])


		this.elm_textAndHTML = div('text-and-html')


		this.appendChildren(
			this.elm_title,
			this.ctn_itemDetails,
			this.ctn_statBlocks,
			this.elm_textAndHTML
		)

		container.appendChild(this)

		this.setContainerListeners(container)
		this._init()
	}

	setContainerListeners (container)
	{
		container.addEventListener('mousemove', e =>
		{
			if (e.target !== this.lastTarget)
			{
				this.lastTarget = e.target
				this._findTip(e.target)

				if (this.changed) this._render()
			}

			if (this.currentTip)
			{
				const cx = this.parentNode.offsetWidth  / 2
				const cy = this.parentNode.offsetHeight / 2
				const x = e.x - this.parentNode.offsetLeft
				const y = e.y - this.parentNode.offsetTop
	
				this.x = x + (x > cx ? -this.offsetWidth  - this.offset : this.offset)
				this.y = y + (y > cy ? -this.offsetHeight - this.offset : this.offset)
			}
		})
	}

	_findTip (HTMLElement)
	{
		let target = HTMLElement
		let newTip = null

		this.changed = false

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
			this.currentTip = newTip
			this.changed = true
		}
	}

	_render ()
	{
		if (!this.currentTip) return this.hide()
		
		const { item, html, text } = this.currentTip
		
		this.elm_title.style.display = 'none'
		this.ctn_itemDetails.style.display = 'none'
		this.ctn_statBlocks.style.display = 'none'
		this.elm_textAndHTML.style.display = 'none'

		if (item) this._renderItem(item); else
		if (html) this._renderHTML(html); else
		if (text) this._renderText(text); else
		if (this.visible) this.hide()
	}

	_renderItem (item)
	{
		this.elm_title.innerText = item.name
		this.elm_itemKind.innerText = itemsM.getItemKind(item)

		this.elm_itemIsPremium.style.display = itemsM.isPremium(item) ? '' : 'none'
		this.elm_itemRequireJump.style.display = itemsM.requireJump(item) ? '' : 'none'
		this.elm_itemMissingDivine.style.display = this.isMissingDivineStats(item) ? '' : 'none'
		
		for (const block of this.statBlocks)
		{
			if (!item.stats.hasOwnProperty(block.stat.key))
			{
				block.hide()
				continue
			}

			const key = block.stat.key
			const useArenaBuffs = key !== 'health'
			const value = statsResolver.get(item, key, useArenaBuffs)

			block.val(value)
			block.show()
		}

		this.elm_title.style.display = ''
		this.ctn_itemDetails.style.display = ''
		this.ctn_statBlocks.style.display = ''
		this.show()
	}

	_renderHTML (html)
	{
		this.elm_textAndHTML.style.display = ''
		this.elm_textAndHTML.innerHTML = html
		this.show()
	}

	_renderText (text)
	{
		this.elm_textAndHTML.style.display = ''
		this.elm_textAndHTML.innerText = text
		this.show()
	}

	isMissingDivineStats (item)
	{
		return GeneralSettings.get('divine_tier')
		    && GeneralSettings.get('buffs_on_tooltip')
		    && !item.divine
		    && item.tiers[1] > 4
	}

	set x (n) { this.style.left = (this._x = n) + 'px' }
	set y (n) { this.style.top  = (this._y = n) + 'px' }
}
