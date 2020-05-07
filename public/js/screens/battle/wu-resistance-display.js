'use strict'


// Dependences

import { div } from '../../utils/general-utils.js'

import { WUElementBase } from '../../mobiles/wu-element-base.js'


// Class

export const WUResistanceDisplay = class extends WUElementBase
{
    constructor (itemElement)
    {
        super()

        const src = `url(../../../img/battleScreen/${ ['phy', 'exp', 'ele'][itemElement - 1] }ResIcon.png)`

        this.text = div('text outline', { innerText: 0 })
        this.element = div('wu-resistance-display', null, [this.text], { backgroundImage: src })

        this._val = 0
    }

    val (n=this._val)
    {
        this._val = n
        this.text.innerText = this._val
        return this._val
    }
}
