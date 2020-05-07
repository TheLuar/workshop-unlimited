'use strit'


// Dependeces

import { div } from '../utils/general-utils.js'

import { WUElementBase } from './wu-element-base.js'


// Class

export const WUPopup = class extends WUElementBase
{
    constructor ()
    {
        super()

        this.title = div('title')
        this.text = div('text')
        this.btnOk = div('basic-button', { innerText: 'OK' })
        this.btnCancel = div('basic-button', { innerText: 'CANCEL' })
        this.actions = div('actions', null, [this.btnOk, this.btnCancel])
        this.element = div('wu-popup', null, [this.title, this.text, this.actions])
    }

    ok (text = '', title = '', callback)
    {
        this.title.innerHTML = title
        this.title.style.display = title ? '' : 'none'
        this.text.innerHTML = text
        this.text.style.display = text ? '' : 'none'
        this.btnCancel.style.display = 'none'
        this.btnOk.style.display = ''
        this.btnOk.onclick = () =>
        {
            this.hide()
            if (callback) callback()
        }
        this.show()
    }

    static getInstance (container)
    {
        if (!this.instance) this.instance = new this(container)
        return this.instance
    }
}
