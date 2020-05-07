'use strict'


// Dependences

import { div } from '../../utils/general-utils.js'

import { WUElementBase } from '../../mobiles/wu-element-base.js'

import { WUProcentBar } from '../../mobiles/wu-procent-bar.js'


// Class

export const WULoadingScreen = class extends WUElementBase
{
    constructor ()
    {
        super()

        this.textContainer = div('elm-text', { innerText:'Loading...' })
        this.progressBar = new WUProcentBar('#DDDDDD', 100, 0, true)
        this.element = div('wu-loading-screen', null, [this.textContainer, this.progressBar.element])
    }

    setText (text)
    {
        this.textContainer.innerText = text
    }

    setProgress (x)
    {
        this.progressBar.setVal(Number(x) || 0)
    }

    static getInstance ()
    {
        if (!this.instance) this.instance = new this()
        return this.instance
    }
}