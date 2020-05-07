'use strict'


// Outer

import { div } from '../../utils/general-utils.js'

import { WUItemsManager } from '../../managers/wu-items-manager.js'

import { WUElementBase } from '../../mobiles/wu-element-base.js'


// General

const itemsM = WUItemsManager.getInstance()

const clickAreaClassName = 'click-area'


// Export

export const WUSelectItemsTab = class extends WUElementBase
{
    constructor ()
    {
        super()

        const onclick = e =>
        {
            if (!e.target.className.includes(clickAreaClassName))
            {
                this.select(null);
                return;
            }
        }
        
        this.itemBlocksContainer = div('item-blocks-container')
        this.element = div('wu-select-items-tab', { onclick }, [this.itemBlocksContainer])
        this.items = {}
        this.currentSlot = null
    }

    onshow (slot)
    {
        this.itemBlocksContainer.scroll(0, 0)
        if (!slot)
        {
            console.error(`invalid 'slot' argument:`, slot)
            return
        }
        if (!this.currentSlot || slot.type !== this.currentSlot.type)
        {
            this.items = itemsM.getMapByType(slot.type)
            this.updateList()
        }
        this.currentSlot = slot
    }

    updateList ()
    {
        while (this.itemBlocksContainer.lastChild) this.itemBlocksContainer.lastChild.remove()

        let i = 0

        for (const id in this.items)
        {
            const item = this.items[id]
            const gfx = div('gfx')
            const clickArea = div(clickAreaClassName, null, null, { zIndex:1 })
            const block = div('item-block', { item }, [gfx, clickArea], { visibility:'hidden' })

            gfx.style.backgroundImage = `url(${ item.url })`

            setTimeout(() =>
            {
                block.style.visibility = ''
                block.onclick = () => this.select(item)
            }, i * 25)

            this.itemBlocksContainer.appendChild(block)

            i++
        }
    }

    select (item)
    {
        this.hide()
        this.onselect(this.currentSlot, item)
    }

    static getInstance ()
    {
        if (!this.instance) this.instance = new this()
        return this.instance
    }
}
