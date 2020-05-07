'use strict'


// Outer

import { div } from '../../utils/general-utils.js'

import { WUElementBase } from '../../mobiles/wu-element-base.js'

import { workshopSlotConfigs } from '../../data/workshop-slots-config.js'

import { WUEquipmentSlot } from './wu-equipment-slot.js'

import { WUSelectItemsTab } from './wu-select-items-tab.js'

import { WUMechSummary } from './wu-mech-summary.js'

import { WUMechDisplay } from '../../mobiles/wu-mech-display.js'

import { WUStatsResolver } from '../../helpers/wu-stats-resolver.js'


// General

const statsResolver = WUStatsResolver.getInstance()

const createButton = (src, title, onclick) =>
{
    const icon = div('icon', null, null, { backgroundImage: `url(${ src })` })
    const clickArea = div('click-area', { onclick })
    const btn = div('battle-btn', null, [icon, clickArea])

    clickArea.hoverData = { html: title }

    return btn
}


// Export

export const WUWorkshopScreen = class extends WUElementBase
{
    constructor ()
    {
        super()

        this.events = {
            searchBattle: null,
            updateSetup: null,
        }

        this.selectItemsTab = WUSelectItemsTab.getInstance()
        this.mechSummary = new WUMechSummary()
        this.mechDisplay = new WUMechDisplay().drone(true)
        this.btnBattle = createButton('../../../img/general/mech.svg', 'Search for battle', () => this.events.searchBattle())
        this.element = div('wu-workshop-screen')

        window.mech = this.mechDisplay

        this.slots = []

        for (let i = 0; i < workshopSlotConfigs.count; i++)
        {
            const config = workshopSlotConfigs.get(i)
            const slot = new WUEquipmentSlot(this.selectItemsTab, config)
            this.slots.push(slot)
        }
        
        this.selectItemsTab.onselect = (slot, item) =>
        {
            if (item === slot.item) return
            
            slot.setItem(item)
            this.events.updateSetup(this.getSetup())
            this.updateMechSummary()

            // checks if it's an item visible in mech
            if (slot.type < 6) this.updateMechDisplay()
        }

        this.selectItemsTab.hide()

        this.addChildren([...this.slots, this.selectItemsTab, this.mechSummary, this.mechDisplay])
        this.element.appendChild(this.btnBattle)
    }

    updateMechSummary ()
    {
        const sum = statsResolver.getMechStatsFromSetup(this.getSetup());

        for (const statBlock of this.mechSummary.statBlocks)
        {
            statBlock.val(sum[statBlock.stat.key])
        }
    }

    updateMechDisplay ()
    {
        this.mechDisplay.assemble(this.getSetup());
    }

    getSetup ()
    {
        return this.slots.map(slot => slot.item)
    }

    static getInstance ()
    {
        if (!this.instance) this.instance = new this()
        return this.instance
    }
}
