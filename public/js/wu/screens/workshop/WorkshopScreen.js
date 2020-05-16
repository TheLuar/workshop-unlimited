'use strict'


// Packages

import { div } from '../../utils/GeneralUtils.js'
import { SingletonElement } from '../../bases/SingletonElement.js'
import { EquipmentSlot } from './EquipmentSlot.js'
import { SelectItemsTab } from './SelectItemsTab.js'
import { MechSummary } from './MechSummary.js'
import { MechDisplay } from '../../mobiles/MechDisplay.js'
import { BasicButton } from '../../mobiles/BasicButton.js'


// Class

export const WorkshopScreen = class extends SingletonElement
{
	constructor ()
	{
		super()
		
		this.slots = null
		this.ctnPartsAndSpecials = null
		this.ctnModules = null
		this.btnSettings = null
		this.itemsTab = null
		this.summary = null
		this.mech = null
		
		this.classList.add('screen')
	}

	init (slotConfs)
	{
		const slotGridAreas = Array.from('abcdefghijklabcdefgh')

		this.slots = []

		this.ctnPartsAndSpecs = div('ctn-parts-and-specs')
		this.ctnModules = div('ctn-modules')

		this.btnSettings = new BasicButton({
			title: 'Settings',
			icon: '../../../../img/general/cog.png',
			className: 'settings',
			callback: () => this.manager.dispatch('goto', 'settings')
		})

		this.itemsTab = SelectItemsTab.gi()
		this.itemsTab.init()

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

			const container = i < 12 ? this.ctnPartsAndSpecs : this.ctnModules

			this.slots.push(slot)
			container.appendChild(slot)
		}

		this.appendChildren(this.ctnPartsAndSpecs, this.ctnModules, this.btnSettings, this.itemsTab, this.summary, this.mech)
		this._init()
	}

	updateSummary (sum)
	{
		for (const statBlock of this.summary.blocks)
		{
			statBlock.val(sum[statBlock.stat.key])
		}
	}

	updateMech (setup)
	{
		this.mech.assemble(setup)
	}
}
