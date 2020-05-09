'use strict'


// Packages

import { div, defineCustomElement } from '../utils/GeneralUtils.js'
import { BaseElement } from '../bases/BaseElement.js'
import { MechDisplayPart } from './MechDisplayPArt.js'


// Class

export const MechDisplay = class extends BaseElement
{
	constructor (scale = 0.6)
	{
		super()

		this._scale = scale
		this.partsCont = div('parts-container')
		this.droneActive = false
		this.parts = []
		this.setup = []
		this.items = []

		this.appendChild(this.partsCont)
		this.init()
	}

	init ()
	{
		const zIndexMap = [5, 6, 4, 8, 1, 9, 2, 7, 3, 0]
		const partNames = ['torso', 'leg1', 'leg2', 'side1', 'side2', 'side3', 'side4', 'top1', 'top2', 'drone']

		for (let i = 0; i < partNames.length; i++)
		{
			const name = partNames[i]
			const part = new MechDisplayPart(name)

			part.style.zIndex = zIndexMap[i]

			this.parts.push(part)
			this.partsCont.appendChild(part)

			if (name === 'drone') part.classList.add('smooth-moving')
		}
	}

	scale (n=this._scale)
	{
		this.partsCont.style.transform = `scale(${ (this._scale = n) })`
		return this._scale
	}

	async assemble (setup)
	{
		// Check if doesn't have torso
		if (!setup[0])
		{
			this.hide()
			return
		}

		this.show()

		// Add leg 2 to the setup
		setup = Array.from(setup)
		setup.splice(2, 0, setup[1])

		this.parts.map((part, i) => part.setItem(setup[i]))

		await this.waitPartsFinishLoading()
		this.adjust()

		return this
	}

	waitPartsFinishLoading ()
	{
		return new Promise(resolve =>
		{
			const onImagesReady = setInterval(() =>
			{
				if (!this.parts.every(part => part.ready)) return
				clearInterval(onImagesReady)
				resolve()
			}, 100);
		})
	}

	drone (active)
	{
		const torso = this.parts[0]
		const drone = this.parts[9]

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
		const leg1 = this.parts[1]
		const torso = this.parts[0]
		const drone = this.parts[9]
		
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

		for (const part of this.parts)
		{
			if (!part.item || part.name === 'drone') continue

			part.show()
			
			if (skipAttachment.includes(part.name)) continue

			part.x = torso.x + (torso.item.attachment[part.name].x - part.item.attachment.x)
			part.y = torso.y + (torso.item.attachment[part.name].y - part.item.attachment.y)
		}

		this.scale()

		return this
	}
}
defineCustomElement(MechDisplay)
