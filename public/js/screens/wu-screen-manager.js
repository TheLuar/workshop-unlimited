'use strict'


// Outer

import { div } from '../utils/general-utils.js'

import { WUElementBase } from '../mobiles/wu-element-base.js'

import { WULoadingScreen } from '../screens/loading/wu-loading-screen.js'

import { WUWorkshopManager } from '../managers/wu-workshop-manager.js'

import { WUBattleManager } from '../managers/wu-battle-manager.js'

import { WUToolTip } from '../mobiles/wu-tool-tip.js'

import { WUPopup } from '../mobiles/wu-popup.js'


// General

const workshopM = WUWorkshopManager.getInstance()
const battleM = WUBattleManager.getInstance()
const toolTip = WUToolTip.getInstance()
const dialog = WUPopup.getInstance()


// Export

export const WUScreenManager = class extends WUElementBase
{
    constructor (container = document.body)
    {
        super()

        const loadingScreen = WULoadingScreen.getInstance()
        const workshopScreen = workshopM.screen
        const battleScreen = battleM.screen

        this.element = div('wu-stage')
        
        this.screens = {
            loading: loadingScreen,
            workshop: workshopScreen,
            battle: battleScreen,
        }

        this.addChildren([
            loadingScreen,
            workshopM.screen,
            battleM.screen,
            toolTip,
            dialog
        ])

        dialog.hide()

        toolTip.setListeners()
        
        container.appendChild(this.element)
    }

    getScreen (name)
    {
        return this.screens[name] || null
    }
    
    goToScreen (name, ...args)
    {
        for (const a in this.screens)
        {
            this.screens[a].hide()
        }
        this.screens[name].show(...args)
    }

    searchForBattle ()
    {
        console.log('search for battle')
    }

    static getInstance (container)
    {
        if (!this.instance) this.instance = new this(container)
        return this.instance
    }
}
