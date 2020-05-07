'use strict'


// Outer

import { WUWorkshopScreen } from '../screens/workshop/wu-workshop-screen.js'


// Export

export const WUWorkshopManager = class
{
    constructor ()
    {
        this.screen = WUWorkshopScreen.getInstance()
    }

    static getInstance ()
    {
        if (!this.instance) this.instance = new this()
        return this.instance
    }
}
