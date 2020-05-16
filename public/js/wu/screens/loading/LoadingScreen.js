'use strict'


// Dependences

import { div } from '../../utils/GeneralUtils.js'
import { SingletonElement } from '../../bases/SingletonElement.js'
import { ProgressBar } from '../../mobiles/ProgressBar.js'


// Class

export const LoadingScreen = class extends SingletonElement
{
    constructor ()
    {
        super()

        this.textElm = null
        this.progressBar = null

        this.classList.add('screen')
    }

    init (txt = '')
    {
        this.elmText = div('elm-text', { innerText: txt })
        this.progressBar = new ProgressBar('#DDDDDD', 100, 0, 'procent')
        
		// this.addEventListener('mouseenter', () => toolTip.displayItem(...))
		// this.addEventListener('mouseleave', () => toolTip.hide())

        this.appendChildren(this.elmText, this.progressBar)

        this._init()
    }

    set text (txt = '')
    {
        this.elmText.innerText = txt
    }

    set progress (x = 0)
    {
        this.progressBar.value = Number(x) || 0
    }
}