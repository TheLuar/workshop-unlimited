'use strict'


// Dependeces

import { div } from '../../utils/general-utils.js'

import { WUProcentBar } from '../../mobiles/wu-procent-bar.js'

import { WUElementBase } from '../../mobiles/wu-element-base.js'

import { WUResistanceDisplay } from './wu-resistance-display.js'


// Export

export const WUPlayerInfoPanel = class extends WUElementBase
{
    constructor ()
    {
        super()

        this.name = div('text', { innerText: '[name]' })
        this.health = new WUProcentBar('#FFAA33')
        this.energy = new WUProcentBar('#3388DD')
        this.heat = new WUProcentBar('#DD3300')
        this.phyRes = new WUResistanceDisplay(1)
        this.expRes = new WUResistanceDisplay(2)
        this.eleRes = new WUResistanceDisplay(3)
        this.layout = div('panel-layout')
        this.element = div('wu-player-info-panel', null, [this.name, this.layout])

        this.health.element.classList.add('health')
        this.energy.element.classList.add('energy')
        this.heat.element.classList.add('heat')

        this.addChildren([this.health, this.energy, this.heat, this.phyRes, this.expRes, this.eleRes])
    }

    updateStats (stats)
    {
        this.health.setVal(stats.health)
        this.energy.setCap(stats.eneCap).setVal(stats.energy)
        this.heat.setCap(stats.heaCap).setVal(stats.heat)
        this.phyRes.val(stats.phyRes)
        this.expRes.val(stats.expRes)
        this.eleRes.val(stats.eleRes)
        
        return this
    }
    
    setPlayerData (player)
    {
        const { name, stats } = player

        this.name.innerText = name
        this.health.setData(stats.healthCap, stats.health)
        this.energy.setData(stats.eneCap, stats.energy)
        this.heat.setData(stats.heaCap, 0)

        return this
    }
}

