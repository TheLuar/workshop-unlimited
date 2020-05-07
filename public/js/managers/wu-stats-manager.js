'use strict';


// Dependences

import * as stats from '../data/stats.js';


// General


// Export

export const WUStatsManager = class
{
    constructor ()
    {
        this.mechSumStatKeys = [
            'weight', 'health', 'eneCap',
            'eneReg', 'heaCap', 'heaCol',
            'phyRes', 'expRes', 'eleRes'
        ]
    }

    getByKey (key)
    {
        const stat = stats[key];
        if (!stat) throw new Error('No such stat with key', key);
        return stat;
    }

    static getInstance ()
    {
        if (!this.instance) this.instance = new this()
        return this.instance;
    }
}
