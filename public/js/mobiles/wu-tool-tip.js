'use strict'


// Dependences

import { div } from '../utils/general-utils.js'

import { WUElementBase } from './wu-element-base.js'

import { WUItemsManager } from '../managers/wu-items-manager.js'
import { WUStatBlock } from './wu-stat-block.js'


// General

const itemsM = WUItemsManager.getInstance()
const mouse = { x: 0, y: 0 }
const center = { x: 0, y: 0 }


// Class

export const WUToolTip = class extends WUElementBase
{
    constructor ()
    {
        super()

        this.element = div('wu-tool-tip')
    }

    setListeners ()
    {
        this.element.parentNode.addEventListener('mousemove', e =>
        {
            if (!this.visible) return

            center.x = this.element.parentNode.offsetWidth  / 2
            center.y = this.element.parentNode.offsetHeight / 2

            mouse.x = e.x - this.element.parentNode.offsetLeft
            mouse.y = e.y - this.element.parentNode.offsetTop

            this.x = mouse.x + (mouse.x > center.x ? -this.element.offsetWidth  - 20 : 20)
            this.y = mouse.y + (mouse.y > center.y ? -this.element.offsetHeight - 20 : 20)
        })

        this.element.parentNode.addEventListener('mouseover', e =>
        {
            if (!e.target.hoverData)
            {
                this.hide()
                return
            }

            this.display(e.target.hoverData)
        })
    }

    html (content)
    {
        this.element.innerHTML = content
        this.show()
    }

    item (item)
    {
        if (!item) return

        const statBlocks = []

        for (const key in item.stats)
        {
            const block = new WUStatBlock(key, item.stats[key])
            statBlocks.push(block.element)
        }

        const title = div('item-name', { innerText: item.name })
        const sub = div('item-kind', { innerText: itemsM.getItemKind(item) })

        this.element.appendChild(title)
        this.element.appendChild(sub)

        if (item.tiers[0] > 2) this.element.appendChild(div('is-premium', { innerText: 'PREMIUM' }))

        this.element.appendChild(div('horizontal-separator'))

        statBlocks.forEach(a => this.element.appendChild(a))
        
        this.show()
    }

    display ({ html, item })
    {
        this.clear()
        if (html) this.html(html)
        if (item) this.item(item)
    }
 
    clear ()
    {
        while (this.element.lastChild) this.element.lastChild.remove()
    }

    set x (n) { this.element.style.left = (this._x = n) + 'px' }
    set y (n) { this.element.style.top  = (this._y = n) + 'px' }

    static getInstance ()
    {
        if (!this.instance) this.instance = new this()
        return this.instance
    }
}
