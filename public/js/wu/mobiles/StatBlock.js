'use strict';


// Dependences

import { StatsManager } from '../managers/StatsManager.js';
import { div, defineCustomElement } from '../utils/GeneralUtils.js';
import { BaseElement } from '../bases/BaseElement.js';


// General

const statsM = StatsManager.gi();


// Export

export const StatBlock = class extends BaseElement
{
    constructor (key = 'weight', val = 0)
    {
        super()

        this._value = 0
        this.stat = null
        this.statIcon = div('icon');
        this.output = div('output');
        this.appendChildren(this.statIcon, this.output);
        this.setStat(key);
        this.val(val);
    }

    setStat (key)
    {
        this.stat = statsM.byKey(key);
        this.statIcon.style.backgroundImage = `url(${ this.stat.url })`;
        return this;
    }

    val (x = this._value)
    {
        this._value = x
        const txt = Array.isArray(x) ? x.filter(x => x) : x
        this.output.innerText = String(txt).replace(',', '-');
        return x;
    }
}
defineCustomElement(StatBlock)
