'use strict'


// Packages

import { defineCustomElement } from '../utils/GeneralUtils.js'
import { BaseElement } from '../bases/BaseElement.js'
import { ToolTip } from '../mobiles/ToolTip.js'


// General

let toolTip = ToolTip.gi()


// Class

export const MechDisplayPart = class extends BaseElement
{
	constructor (name)
	{
		super()

		this.img = document.createElement('img')
		this._ready = true
		this.name = name
		this.lastItem = null
		this.item = null
		this._x = 0
		this._y = 0
		this._w = 0
		this._h = 0

		this.appendChild(this.img)
		this.init()
	}

	init ()
	{
		this.classList.add('outline')
		this.addEventListener('mouseenter', () => toolTip.displayItem(this.item))
		this.addEventListener('mouseleave', () => toolTip.hide())
	}

	setItem (item = null)
	{
		this.lastItem = this.item
		this.item = item

		if (this.item === this.lastItem) return

		this.hide()

		if (!item) return

		this._ready = false

		this.img.src = this.item.url

		const onReady = setInterval(() =>
		{
			if (this.img.complete)
			{
				clearInterval(onReady)
				this.w = this.item.width  || this.img.naturalWidth
				this.h = this.item.height || this.img.naturalHeight
				this._ready = true
			}
		}, 50)
	}

	get ready ()
	{
		return this._ready
	}

	set x (n=this._x) { this.style.left = (this._x = n) + 'px' }
	get x () { return this._x }

	set y (n=this._y) { this.style.top = (this._y = n) + 'px' }
	get y () { return this._y }

	set w (n=this._w) { this.img.style.width = (this._w = n) + 'px' }
	get w () { return this._w }

	set h (n=this._h) { this.img.style.height = (this._h = n) + 'px' }
	get h () { return this._h }
}
defineCustomElement(MechDisplayPart)
