'use strict';


// Dependences

import { WUStatsManager } from '../managers/wu-stats-manager.js';
import { div } from '../utils/general-utils.js';
import { WUElementBase } from './wu-element-base.js';


// General

const statsM = WUStatsManager.getInstance();


// Export

export const WUStatBlock = class extends WUElementBase
{
    constructor (key='weight', val=0)
    {
        super()
        this._value = 0
        this.statIcon = div('icon');
        this.output = div('output');
        this.element = div('wu-stat-block', null, [this.statIcon, this.output]);
        this.setStat(key);
        this.val(val);
    }

    setStat (key)
    {
        this.stat = statsM.getByKey(key);
        console.log(this.stat.url)
        this.statIcon.style.backgroundImage = `url(${ this.stat.url })`;
        return this;
    }

    val (x=this._value)
    {
        this.output.innerText = String(this._value = x).replace(',', '-');
        return x;
    }
}
