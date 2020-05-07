'use strict'


// Dependences

import { div, dom } from '../utils/general-utils.js'

import { WUElementBase } from './wu-element-base.js'


// Export

const WUMechDisplayPart = class extends WUElementBase
{
	constructor (name)
	{
		super()

		this.element = dom('img', { onload, className: 'wu-mech-display-part outline' })

		this.name = name
		this.ready = true
		this.previousItem = null
		this.item = null
		this._x = 0
		this._y = 0
		this._w = 0
		this._h = 0
	}

	setItem (item)
	{
		this.previousItem = this.item
		this.item = item || null

		if (this.previousItem !== this.item) this.hide()

		if (!item)
		{
			this.hide()
			return
		}

		this.ready = false
		this.element.hoverData = { item }
		this.element.src = item.url

		const onFinished = setInterval(() =>
		{
			if (!this.element.complete) return

			clearInterval(onFinished)

			this.w = this.item.width  || this.element.naturalWidth
			this.h = this.item.height || this.element.naturalHeight

			this.ready = true;
		}, 100)
	}

	set x (n=this._x) { this.element.style.left = (this._x = n) + 'px' }
	get x () { return this._x }

	set y (n=this._y) { this.element.style.top = (this._y = n) + 'px' }
	get y () { return this._y }

	set w (n=this._w) { this.element.style.width = (this._w = n) + 'px' }
	get w () { return this._w }

	set h (n=this._h) { this.element.style.height = (this._h = n) + 'px' }
	get h () { return this._h }
}

export const WUMechDisplay = class extends WUElementBase
{
	constructor (scale = 0.6)
	{
		super()

		const zIndexMap = [5, 6, 4, 8, 1, 9, 2, 7, 3, 0]

		this._scale = scale

		this.partsCont = div('parts-container')
		this.element = div('wu-mech-display', null, [this.partsCont])

		this.droneActive = false
		this.partsList = []
		this.parts = {}
		this.setup = []
		this.items = []
		this.partNames = [
			'torso', 'leg1',  'leg2', 'side1', 'side2',
			'side3', 'side4', 'top1', 'top2',  'drone'
		]

		for (let i = 0; i < this.partNames.length; i++)
		{
			const name = this.partNames[i]
			const part = new WUMechDisplayPart(name)

			part.element.style.zIndex = zIndexMap[i]

			if (name === 'drone') part.element.classList.add('smooth-moving')

			this.parts[name] = part
			this.partsList.push(part)
			this.partsCont.appendChild(part.element)
		}
	}

	scale (n=this._scale)
	{
		this.partsCont.style.transform = `scale(${ (this._scale = n) })`
		return this._scale
	}

	assemble (setup)
	{
		// Check if doesn't have torso
		if (!setup[0])
		{
			this.hide()
			return;
		}

		this.show()

		// Add leg 2 to the setup
		setup = Array.from(setup)
		setup.splice(2, 0, setup[1])

		// Set part items
		this.partsList.map((part, i) => part.setItem(setup[i]))

		// Handle images loaded
		const onImagesReady = setInterval(() =>
		{
			const partsLoaded = this.partsList.every(part => part.ready)
			if (!partsLoaded) return;
			this.adjust()
			clearInterval(onImagesReady);
		}, 100);

		return this
	}

	drone (active)
	{
		const { drone, torso } = this.parts

		if (drone.item)
		{
			if (active)
			{
				if (!this.droneActive)
				{
					drone.hide()
					drone.x = torso.x + torso.w / 2 - drone.w / 2
					drone.y = torso.y + torso.h / 2 - drone.h / 2
					drone.show()
				}
				setTimeout(() =>
				{
					drone.x = torso.x - drone.w
					drone.y = torso.y - drone.h
				}, 100)
			}
			else
			{
				if (!this.droneActive)
				{
					drone.x = torso.x - drone.w
					drone.y = torso.y - drone.h
				}
				setTimeout(() =>
				{
					drone.x = torso.x + torso.w / 2 - drone.w / 2
					drone.y = torso.y + torso.h / 2 - drone.h / 2
					setTimeout(() => drone.hide(), 500)
				}, 100)
			}
		} 

		this.droneActive = active

		return this
	} 

	adjust ()
	{
		const skipAttachment = ['leg1', 'torso', 'drone']
		const leg1 = this.partsList[1]
		const torso = this.partsList[0]
		const drone = this.partsList[9]
		
		if (!leg1.item)
		{
			torso.x = -torso.w / 2
			torso.y = -torso.h
		}
		else
		{
			leg1.x = (-leg1.w - (torso.item.attachment.leg2.x - torso.item.attachment.leg1.x)) / 2;
			leg1.y = -leg1.h;

			torso.x = leg1.x + (leg1.item.attachment.x - torso.item.attachment.leg1.x);
			torso.y = leg1.y + (leg1.item.attachment.y - torso.item.attachment.leg1.y);
		}

		if (drone.item && this.droneActive)
		{
			if (drone.item !== drone.previousItem)
			{
				drone.hide()
				drone.x = torso.x + torso.w / 2 - drone.w / 2
				drone.y = torso.y + torso.h / 2 - drone.h / 2
				drone.show()
			}
			setTimeout(() =>
			{
				drone.x = torso.x - drone.w
				drone.y = torso.y - drone.h
			}, 100)
		}

		for (const part of this.partsList)
		{
			if (!part.item || part.name === 'drone') continue

			part.show();
			
			if (skipAttachment.includes(part.name)) continue;

			part.x = torso.x + (torso.item.attachment[part.name].x - part.item.attachment.x);
			part.y = torso.y + (torso.item.attachment[part.name].y - part.item.attachment.y);
		}

		this.scale()

		return this
	}
}
