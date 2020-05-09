'use strict';


// Dependences

import { div, css, bound, defineCustomElement } from '../utils/GeneralUtils.js'
import { BaseElement } from '../bases/BaseElement.js'


// Export

export const ProgressBar = class extends BaseElement
{
    constructor (color = '#FF00FF', cap = 100, val = 50, format = 'none')
    {
        super()

        this.elmTxt = div('text outline')
        this.elmBar = css(div('bar'), { backgroundColor: color })

        this.appendChildren(this.elmTxt, this.elmBar)

        this.format = format
        this._cap = cap
        this._value = val

        this.render()
    }
    
    set value (val)
    {
        this._value = val
        this.render()
    }

    set cap (cap)
    {
        this._cap = cap;
        this.render();
    }

    setData (cap, val)
    {
        this._value = val;
        this._cap = cap;
        this.render();
    }

    render ()
    {
        const proc = this._value / this._cap * 100
        this.elmBar.style.width = bound(proc) + '%';
        let txt = this._value
        if (this.format === 'procent') txt = proc.toFixed(1) + '%'
        else if (this.format === 'slash') txt = Math.floor(this._value) + '/' + this._cap
        this.elmTxt.innerText = txt;
    }
}
defineCustomElement(ProgressBar)
