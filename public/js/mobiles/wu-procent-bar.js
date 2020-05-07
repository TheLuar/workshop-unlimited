'use strict';


// Dependences

import { div } from '../utils/general-utils.js';

import { WUElementBase } from './wu-element-base.js';


// Export

export const WUProcentBar = class extends WUElementBase
{
    constructor (color = '#FF00FF', cap = 100, val = 50, displayAsProcent = false)
    {
        super()

        this.elmTxt = div('text outline')
        this.elmBar = div('bar', null, null, { backgroundColor: color })
        this.element = div('wu-procent-bar', null, [this.elmTxt, this.elmBar])

        this.displayAsProcent = displayAsProcent
        this.color = color
        this.cap = cap
        this.val = val

        this.render()
    }
    
    setVal (val)
    {
        this.val = val;
        this.render();
        return this;
    }

    setCap (cap)
    {
        this.cap = cap;
        this.render();
        return this;
    }

    setData (cap, val)
    {
        this.val = val;
        this.cap = cap;
        this.render();
        return this;
    }

    render ()
    {
        this.elmBar.style.width = Math.round(Math.min(1, Math.max(0, this.val / this.cap)) * 100) + '%';
        this.elmTxt.innerText = this.displayAsProcent ? this.val + '%' : this.val + '/' + this.cap;
        return this;
    }
}
