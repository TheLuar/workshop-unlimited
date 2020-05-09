'use strict';


// Dependences

import { div } from '../../utils/GeneralUtils.js';
import { StatsManager } from '../../managers/StatsManager.js';
import { StatBlock } from '../../mobiles/StatBlock.js';
import { SingletonElement } from '../../bases/SingletonElement.js';


// General

const statsM = StatsManager.gi();


// Export

export const MechSummary = class extends SingletonElement
{
    constructor ()
    {
        super();
        
        this.blocks = []
        this.element = div('wu-mech-summary')
    }

    init ()
    {
        for (const key of statsM.mechSumStatKeys)
        {
            const statBlock = new StatBlock(key, 0)
            this.blocks.push(statBlock)
            this.appendChild(statBlock)
        }
    }
}
