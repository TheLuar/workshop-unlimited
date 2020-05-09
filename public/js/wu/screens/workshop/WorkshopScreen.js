'use strict'


// Packages

import { SingletonElement } from '../../bases/SingletonElement.js'
import { EquipmentSlot } from './EquipmentSlot.js'
import { SelectItemsTab } from './SelectItemsTab.js'
import { MechSummary } from './MechSummary.js'
import { MechDisplay } from '../../mobiles/MechDisplay.js'


// Class

export const WorkshopScreen = class extends SingletonElement
{
	constructor ()
	{
		super()
		
		this.slots = null
		this.itemsTab = null
		this.summary = null
		this.mech = null
	}

	init (slotConfs)
	{
		this.slots = []

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

			this.slots.push(slot)
			this.appendChild(slot)
		}

		this.appendChildren(this.itemsTab, this.summary, this.mech)
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
