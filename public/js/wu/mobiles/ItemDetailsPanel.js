'use strict'


import { BaseElement } from '../bases/BaseElement.js'
import { div, defineCustomElement } from '../utils/GeneralUtils.js'
import { StatBlock } from './StatBlock.js'
import { ItemsManager } from '../managers/ItemsManager.js'
import { StatsManager } from '../managers/StatsManager.js'
import { GeneralSettings } from '../helpers/GeneralSettings.js'
import { StatsResolver } from '../helpers/StatsResolver.js'


let
	itemsM,
	statsM,
	generalSettings,
	statsResolver


export const ItemInfoPanel = class ItemInfoPanel extends BaseElement
{
	_txtName = null
	_txtKind = null

	_txtIsPremium = null
	_txtRequireJump = null
	_txtMissingDivine = null

	_ctnHead = null
	_ctnDetails = null
	_ctnStats = null

	_statBlocks = null

	constructor ()
	{
		super()

		this._init()
	}

	_init ()
	{
		itemsM = ItemsManager.gi()
		statsM = StatsManager.gi()
		generalSettings = GeneralSettings.gi()
		statsResolver = StatsResolver.gi()
		

		this._txtName = div('name')
		this._txtKind = div('kind')
		
		this._txtIsPremium = div('is-premium', { innerText: 'PREMIUM' })
		this._txtRequireJump = div('require-jump', { innerText: 'Require Jumping' })
		this._txtMissingDivine = div('missing-divine', { innerText: 'Missing Divine Stats' })

		this._statBlocks = statsM.list.map(conf => new StatBlock(conf.key))


		this._ctnHead = div('header', null, [
			this._txtName,
			this._txtKind
		])

		this._ctnDetails = div('details', null, [
			div('horizontal-separator'),
			this._txtIsPremium,
			this._txtRequireJump,
			this._txtMissingDivine,
		])

		this._ctnStats = div('stats', null, [
			div('horizontal-separator'),
			...this._statBlocks
		])


		this.appendChildren(this._ctnHead, this._ctnDetails, this._ctnStats)
	}

	setItem (item = null)
	{
		if (item === null) return this.clear()

		const displayDivine = generalSettings.get('divine_tier') && generalSettings.get('buffs_on_tooltip')
		
		this._txtName.innerText = item.name
		this._txtKind.innerText = itemsM.getItemKind(item)

		this._txtIsPremium.style.display = itemsM.isPremium(item) ? '' : 'none'
		this._txtRequireJump.style.display = itemsM.requireJump(item) ? '' : 'none'
		this._txtMissingDivine.style.display = itemsM.missingDivineBuffs(item) && displayDivine ? '' : 'none'

		for (const block of this._statBlocks)
		{
			if (!item.stats.hasOwnProperty(block.stat.key))
			{
				if (block.visible) block.hide()
				continue
			}

			const key = block.stat.key
			const useArenaBuffs = key !== 'health'
			const value = statsResolver.get(item, key, useArenaBuffs)

			block.val(value)
			if (!block.visible) block.show()
		}


		const hasStats = this._statBlocks.some(a => a.style.display !== 'none')
		const hasDetails = this._txtIsPremium.style.display !== 'none'
										|| this._txtRequireJump.style.display !== 'none'
										|| this._txtMissingDivine.style.display !== 'none'
		
		this._ctnStats.style.display = hasStats ? '' : 'none'
		this._ctnDetails.style.display = hasDetails ? '' : 'none'


		return this
	}

	clear ()
	{
		this._txtName.innerText = '(nothing)'
		this._txtKind.innerText = 'inspect an item'

		this._ctnDetails.style.display = 'none'
		this._ctnStats.style.display = 'none'

		for (const block of this._statBlocks)
		{
			if (block.visible) block.hide()
		}

		return this
	}
}
defineCustomElement(ItemInfoPanel)
