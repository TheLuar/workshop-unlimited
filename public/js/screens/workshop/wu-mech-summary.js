'use strict';


// Dependences

import { div } from '../../utils/general-utils.js';

import { WUStatsManager } from '../../managers/wu-stats-manager.js';

import { WUStatBlock } from '../../mobiles/wu-stat-block.js';

import { WUElementBase } from '../../mobiles/wu-element-base.js';


// General

const statsM = WUStatsManager.getInstance();


// Export

export const WUMechSummary = class extends WUElementBase
{
    constructor ()
    {
        super();
        
        this.statBlocks = []
        this.element = div('wu-mech-summary')

        for (const key of statsM.mechSumStatKeys)
        {
            const statBlock = new WUStatBlock(key, 0)
            this.statBlocks.push(statBlock)
            this.addChild(statBlock)
        }
    }
}
