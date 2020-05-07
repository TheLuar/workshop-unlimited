'use strict'


// Dependences

import { div } from '../../utils/general-utils.js'

import { WUElementBase } from '../../mobiles/wu-element-base.js'


// Export

export const WUEquipmentSlot = class extends WUElementBase
{
    constructor (selectItemsTab, { type, iconName })
    {
        super()

        const backgroundImage = `url(../../../img/icons/slots/${ iconName }.svg)`
        const onclick = () => selectItemsTab.show(this)

        this.iconGfx = div('icon-gfx', null, null, { backgroundImage })
        this.itemGfx = div('item-gfx')
        this.clickArea = div('click-area')
        this.element = div('wu-equipment-slot', { onclick }, [this.iconGfx, this.itemGfx, this.clickArea])

        this.type = type
        this.item = null
    }
    
    setItem (item)
    {
        if (!item)
        {
            this.clear()
            return
        }
        this.item = item
        this.clickArea.hoverData = { item }
        this.itemGfx.style.backgroundImage = `url(${ item.url })`
        this.itemGfx.style.display = ''
        this.iconGfx.style.display = 'none'
    }

    clear ()
    {
        this.item = null
        this.clickArea.hoverData = null
        this.iconGfx.style.display = ''
        this.itemGfx.style.display = 'none'
    }
}
