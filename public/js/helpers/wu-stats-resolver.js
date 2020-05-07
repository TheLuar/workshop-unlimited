'use strict'


// Dependences

import { WUStatsManager } from '../managers/wu-stats-manager.js'

import { WUItemsManager } from '../managers/wu-items-manager.js'


// General

const statsM = WUStatsManager.getInstance()
const itemsM = WUItemsManager.getInstance()


// Export

export const WUStatsResolver = class
{
    constructor ()
    {
        
    }

    getMechStatsFromSetup (items)
    {
        const sum = {}

        for (const key of statsM.mechSumStatKeys)
        {
            sum[key] = 0
            for (const item of items)
            {
                if (!item) continue
                sum[key] += item.stats[key] || 0
            }
        }

        return sum
    }

    getBattleStats (items)
    {
        const stats = {
            health: 0, eneCap: 0, eneReg: 0, heaCap: 0,
            heaCol: 0, phyRes: 0, expRes: 0, eleRes: 0, 
        };

        const statNames = Object.keys(stats);

        for (const item of items)
        {
            if (!item) continue;

            for (const name of statNames)
            {
                if (item.stats[name]) stats[name] += item.stats[name];
            }
        }

        stats.healthCap = stats.health;
        stats.energy = stats.eneCap;
        stats.heat = 0;

        return stats
    }

    static getInstance ()
    {
        if (!this.instance) this.instance = new this()
        return this.instance
    }
}
