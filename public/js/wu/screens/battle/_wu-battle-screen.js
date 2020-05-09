'use strict'


// Outer

import { div } from '../../utils/general-utils.js'

import { WUPlayerStatsPanel } from './wu-player-stats-panel.js'

import { WUElementBase } from '../../mobiles/wu-element-base.js'

import { WUMechDisplay } from '../../mobiles/wu-mech-display.js'

import { WUBattleWeaponButton } from './wu-battle-weapon-button.js'


// Export

export const WUBattleScreen = class extends WUElementBase
{
    constructor ()
    {
        super()

        this.events = {
            useItem: null,
        }

        this.itemButtons = []
        this.p1StatsPanel = new WUPlayerStatsPanel()
        this.p2StatsPanel = new WUPlayerStatsPanel()
        this.p1MechDisplay = new WUMechDisplay(0.22)
        this.p2MechDisplay = new WUMechDisplay(0.22)
        this.header = div('header', null, [this.p1StatsPanel.element, this.p2StatsPanel.element])
        this.gfxContainer = div('gfx-container', null, [this.p1MechDisplay.element, this.p2MechDisplay.element])
        this.footer = div('footer')
        this.element = div('wu-battle-screen', null, [this.header, this.gfxContainer, this.footer])
    }
    

    init ({ p1, p2 })
    {
        

        this.p1MechDisplay.element.style.left = this.getMechGraphicPosition(p1.position)
        this.p2MechDisplay.element.style.left = this.getMechGraphicPosition(p2.position)


        // Reset item buttons

        this.itemButtons = []

        while (this.footer.lastChild) this.footer.lastChild.remove()

        for (let i = 0; i < p1.items.length; i++)
        {
            const item = p1.items[i]

            if (!item || item.type === 1 || item.type === 9) continue

            const btn = new WUBattleWeaponButton(i, p1)

            btn.element.addEventListener('click', () => this.events.useItem(i, p1.id))

            this.itemButtons.push(btn)
            this.footer.appendChild(btn.element)
        }
    }

    getMechGraphicPosition (position)
    {
        return position / 11 * 100 + '%'
    }
    
    hideFooter ()
    {
        this.footer.style.top = '100%'
        return this
    }

    showFooter ()
    {
        this.footer.style.top = '0'
        return this
    }

    static getInstance ()
    {
        if (!this.instance) this.instance = new this()
        return this.instance
    }
}





/* Dependences

import { div, prefixedLogger } from '../../utils/general-utils.js'

import { playerDataPanel } from './player-data-panel.js'

import { createPlayerData } from './player-data.js'

import { WUBattleWeaponButton } from './wu-battle-weapon-button.js'


// Functions

const getElementString = (item) => ['phy', 'exp', 'ele'][item.element - 1] || null


// Instance

export const WUBattleScreen = class extends HTMLElement
{
    static get instance ()
    {
        return this._ || (this._ = new this())
    }

    constructor ()
    {
        super()

        this.itemButtons = []
        this.mechPositions = []

        this.log = prefixedLogger(this.constructor.name)

        this.p1 = null
        this.p2 = null

        this.p1DataPanel = playerDataPanel()
        this.p2DataPanel = playerDataPanel()
        
        this.p1MechDisplay = new WUMechDisplay(null, 25)
        this.p2MechDisplay = new WUMechDisplay(null, 25)

        this.mechsContainer = div('mechs-container', null, [this.p1MechDisplay, this.p2MechDisplay])



        // Elements

        this.elmFooter = div('elm-footer')

        this.appendChild(this.p1DataPanel.element)
        this.appendChild(this.p2DataPanel.element)
        this.appendChild(this.mechsContainer)
        this.appendChild(this.elmFooter)

        for (let i = 0 i < 12 i++)
        {
            const p = this.getMechGraphicPosition(i)
            const div = document.createElement('div')

            div.style.position = 'absolute'
            div.style.display = 'block'
            div.style.width = '2px'
            div.style.height = '100%'
            div.style.zIndex = '200'
            div.style.left = p + 'px'
            div.style.background = 'red'

            this.appendChild(div)
        }

        this.hide()
    }

    getMechGraphicPosition (position)
    {
        return (position + 1) / 12 * 740
    }

    show (data)
    {
        const { a, b } = data

        this.p1 = createPlayerData(a)
        this.p2 = createPlayerData(b)
        
        this.p1DataPanel.setPlayerData(this.p1)
        this.p2DataPanel.setPlayerData(this.p2)

        this.p1MechDisplay.assemble(this.p1.items)
        this.p2MechDisplay.assemble(this.p2.items)

        this.p1MechDisplay.style.left = this.getMechGraphicPosition(a.position) + 'px'
        this.p2MechDisplay.style.left = this.getMechGraphicPosition(b.position) + 'px'

        this.style.display = ''
        

        for (let i = 0 i < this.p1.items.length i++)
        {
            const item = this.p1.items[i]

            if (!item ||
                item.type === 1 ||
                item.type === 9)
                continue

            const btn = new WUBattleWeaponButton(i, this.p1)

            this.itemButtons.push(btn)

            this.elmFooter.appendChild(btn.element)
        }
    }

    update (data)
    {
        const { code, dmg, pid, index, double } = data

        //this.log(data)
        const myTurn = pid === this.p1.id
        const style = 'font-weight:boldcolor:' + (myTurn ? '#0066FF' : '#FF6600')

        const p1 = myTurn ? this.p1 : this.p2
        const p2 = myTurn ? this.p2 : this.p1
        
        switch (code)
        {
            case 'turn':
                this.log(`${ myTurn ? 'Your' : 'Enemie\'s' } turn.`, style)
                myTurn ? this.showFooter() : this.hideFooter()
                break

            case 'fire':
                const b4 = p2.stats.health
                this.fire(index, dmg, p1, p2)
                const aft = p2.stats.health
                this.log(`${ myTurn ? 'Dealed' : 'Took' } ${ b4 - aft } dmg.`, style)
                break

            case 'regen':
                p1.stats.energy = Math.min(p1.stats.eneCap, p1.stats.energy + p1.stats.eneReg)
                this.log(`${ myTurn ? 'You' : 'Enemie' } regenerated ${ p1.stats.eneReg }`, style)
                this.updateStats()
                break
            
            case 'shutdown':
                p1.stats.heat = Math.max(0, p1.stats.heat - p1.stats.heaCol * (double + 1))
                this.log(`${ myTurn ? 'You' : 'Enemie' } ${ double ? 'double ' : '' }cooled down. -(${ p1.stats.heaCol * (double + 1) })`, style)
                this.updateStats()
                break
        }
    }

    updateStats ()
    {
        this.p1DataPanel.updateStats(this.p1.stats)
        this.p2DataPanel.updateStats(this.p2.stats)
    }

    hide ()
    {
        this.style.display = 'none'

        this.player = null
        this.enemie = null

        while (this.itemButtons[0]) this.itemButtons[0].element.remove()

        this.hideFooter()
    }

    hideFooter ()
    {
        this.elmFooter.style.top = this.elmFooter.offsetHeight + 'px'
        setTimeout(() => this.elmFooter.style.display = 'none', 100)
    }

    showFooter ()
    {
        this.itemButtons.forEach(c => c.reset())

        this.elmFooter.style.display = ''

        const onFooterVisible = setInterval(() =>
        {
            if (!this.elmFooter.offsetHeight) return
            clearInterval(onFooterVisible)
            this.elmFooter.style.top = '0'
        }, 10)
    }

    fire (index, dmg, p1, p2)
    {
        const item = p1.items[index]

        const dmgType = getElementString(item)
        const resType = dmgType + 'Res'

        // Apply resistance
        dmg -= p2.stats[resType]

        // Energy broken damage bonus
        if (item.stats.eneDmg) dmg += Math.min(0, p2.stats.energy - item.stats.eneDmg) * -1

        // Deal
        p2.stats.health -= Math.max(1, Math.round(dmg))

        // Deal other damages
        if (item.stats[resType + 'Dmg']) p2.stats[resType] -= item.stats[resType + 'Dmg']
        if (item.stats.eneDmg)    p2.stats.energy = Math.max(0, p2.stats.energy - item.stats.eneDmg)
        if (item.stats.eneCapDmg) p2.stats.eneCap = Math.max(1, p2.stats.eneCap - item.stats.eneCapDmg)
        if (item.stats.eneRegDmg) p2.stats.eneReg = Math.max(1, p2.stats.eneReg - item.stats.eneRegDmg)
        if (item.stats.heaDmg)    p2.stats.heat   += item.stats.heaDmg
        if (item.stats.heaCapDmg) p2.stats.heaCap = Math.max(1, p2.stats.heaCap - item.stats.heaCapDmg)
        if (item.stats.heaColDmg) p2.stats.heaCol = Math.max(1, p2.stats.heaCol - item.stats.heaColDmg)

        // Do self damage
        if (item.stats.backfire) p1.stats.health -= item.stats.backfire
        if (item.stats.eneCost)  p1.stats.energy -= item.stats.eneCost
        if (item.stats.heaCost)  p1.stats.heat   += item.stats.heaCost

        this.updateStats()
    }
}

window.customElements.define('wu-screen-battle', WUBattleScreen)
*/