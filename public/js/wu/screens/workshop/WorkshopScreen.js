'use strict'


// Packages

import { div } from '../../utils/GeneralUtils.js'
import { SingletonElement } from '../../bases/SingletonElement.js'
import { EquipmentSlot } from './EquipmentSlot.js'
import { SelectItemsTab } from './SelectItemsTab.js'
import { SearchingForBattleTab } from './SearchingForBattleTab.js'
import { MechSummary } from './MechSummary.js'
import { MechDisplay } from '../../mobiles/MechDisplay.js'
import { BasicButton } from '../../mobiles/BasicButton.js'


// Class

export default class WorkshopScreen extends SingletonElement
{
	manager = null
	slots = []
	ctnPartsAndSpecials = null
	ctnModules = null
	btn_settings = null
	btn_searchBattle = null
	itemsTab = null
	summary = null
	mech = null

	constructor ()
	{
		super()
		
		this.classList.add('screen')
	}

	init (manager, slotConfs)
	{
		const slotGridAreas = Array.from('abcdefghiabcabcdefgh')

		this.manager = manager

		this.ctnParts = div('ctn-parts')
		this.ctnSpecs = div('ctn-specials')
		this.ctnMods  = div('ctn-modules')

		this.btn_settings = new BasicButton({
			title: 'Settings',
			icon: '../../../../img/general/cog.png',
			className: 'settings',
			onclick: () => this.manager.dispatch('goto', 'settings')
		})

		this.btn_searchBattle = new BasicButton({
			title: 'Search for Battle',
			icon: '../../../../img/general/mech.svg',
			className: 'battle',
		})
		// this.btn_searchBattle.style.display = 'none'

		this.itemsTab = SelectItemsTab.gi()
		this.itemsTab.init()

		this.tab_searchingForBattle = SearchingForBattleTab.gi()
		this.tab_searchingForBattle.init()

		this.summary = MechSummary.gi()
		this.summary.show()
		this.summary.init()

		this.mech = new MechDisplay(0.7).drone(true)

		for (let i = 0; i < slotConfs.length; i++)
		{
			const [type, iconName] = slotConfs[i]
			const slot = new EquipmentSlot(this.itemsTab, type, iconName)

			slot.index = i
			slot.style.gridArea = slotGridAreas[i]

			const container = i < 9  ? this.ctnParts
											: i < 12 ? this.ctnSpecs
											: this.ctnMods

			this.slots.push(slot)
			container.appendChild(slot)
		}

		this.appendChildren(
			this.ctnParts,
			this.ctnSpecs,
			this.ctnMods,
			this.btn_settings,
			this.btn_searchBattle,
			this.itemsTab,
			this.tab_searchingForBattle,
			this.summary,
			this.mech
		)

		this._init()
	}

	updateSummary (sum)
	{
		for (const statBlock of this.summary.blocks)
		{
			statBlock.val(sum[statBlock.stat.key])
		}
	}

	updateMechDisplay (setup)
	{
		this.mech.assemble(setup)
	}
}
