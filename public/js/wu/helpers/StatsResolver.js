'use strict'


// Dependences

import { StatsManager } from '../managers/StatsManager.js'
import { ItemsManager } from '../managers/ItemsManager.js'


// General

const statsM = StatsManager.gi()
const itemsM = ItemsManager.gi()


// Export

export const StatsResolver = class
{
    constructor ()
    {
        this.maxWeight = 1000
    }

    getMechStatsFromSetup (items)
    {
        const sum = {}

        for (const key of statsM.mechSumStatKeys)
        {
            sum[key] = 0
            for (const item of items)
            {
                if (!item || !item.stats[key]) continue
                sum[key] += item.stats[key]
            }
        }

        if (sum.weight > this.maxWeight) sum.health -= (sum.weight - this.maxWeight) * 15
        
        if (window.arenaBuffs)
        {
            for (const key of statsM.mechSumStatKeys)
            {
                sum[key] += Math.round(this.getArenaBuff(key, sum[key]))
            }
        }

        return sum
    }

    getArenaBuff (key, value)
    {
        const { buff } = statsM.byKey(key)

        if (!buff) return 0

        if (buff.mode === '*') return value * buff.amount - value; else
        if (buff.mode === '+') return value + buff.amount - value;
        
        return 0
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

    static gi ()
    {
        if (!this.instance) this.instance = new this()
        return this.instance
    }
}
