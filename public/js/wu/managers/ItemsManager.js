'use strict';


// Dependences

import { Singleton } from '../bases/Singleton.js'
import { getImgBlob } from '../utils/GeneralUtils.js';
import { MISSING_TEXTURE } from '../consts.js'


// Export

export const ItemsManager = class extends Singleton
{
	constructor ()
	{
		super()

		this.TYPE_TORSO = 1
		this.TYPE_LEG = 2
		this.TYPE_SIDE = 3
		this.TYPE_TOP = 4
		this.TYPE_DRONE = 5
		this.TYPE_CHARGE = 6
		this.TYPE_TELE = 7
		this.TYPE_HOOK = 8
		this.TYPE_MOD = 9
		this.TIER_COMMON = 0
		this.TIER_RARE = 1
		this.TIER_EPIC = 2
		this.TIER_LEGENDARY = 3
		this.TIER_MYTHICAL = 4
		this.TIER_DIVINE = 5
		
		this.totalItems = 0
		this.itemsLoaded = 0

		this.itemsList = []
		this.mapByID = {}
		this.mapByName = {}
		this.mapsByType = {}
	}

	init (items)
	{
		this.itemsList = Object.keys(items).map(a => items[a])
		this.totalItems = this.itemsList.length

		for (const name in items)
		{
			const item = items[name]
			const fileType = (item.svg ? 'svg' : 'png')
			const fileName = item.name.replace(/\s/g, '') + '.' + fileType

			item.url = null
			item.fileType = fileType
			item.fileName = fileName
			
			if (!this.mapsByType[item.type]) this.mapsByType[item.type] = {}
			
			const safeName = item.name.replace(/\s+/g, '').toLowerCase()

			this.mapByName[safeName] = item
			this.mapByID[item.id] = item
			this.mapsByType[item.type][item.id] = item
		}

		this._init()
	}

	async load (path)
	{
		return new Promise(resolve =>
		{
			let itemsLoading = 0
			let i = 0

			const roll = () =>
			{
				const item = this.itemsList[i]

				itemsLoading++

				getImgBlob(path + item.fileName, 'image/' + item.fileType)
					.then(blob => item.url = blob)
					.catch(() => item.url = MISSING_TEXTURE)
					.then(() =>
					{
						itemsLoading--
						i++
						this.itemsLoaded++
						
						if (this.itemsList[i])
						{
							if (itemsLoading < 20) roll(i)
						}
						else resolve()
					})
			}

			roll()
		})
	}

	byID (id)
	{
		const item = this.mapByID[id];
		if (!item) throw new Error('No such item with id', id);
		return item;
	}

	byName (name)
	{
		const safeName = name.replace(/\s+/g, '').toLowerCase()
		const item = this.mapByName[safeName]
		if (!item) throw new Error('No such item with name', name);
		return item
	}

	byType (type)
	{
		const map = this.mapsByType[type];
		if (!map) throw new Error('No such item type', type);
		return map;
	}

	getItemKind (item)
	{
		const elements = ['Physical', 'Explosive', 'Electric']
		const types = ['Torso', 'Legs', 'Side Weapon', 'Top Weapon', 'Drone', 'Charge Engine', 'Teleporter', 'Grappling Hook', 'Module']
		return elements[item.element - 1] + ' ' + types[item.type - 1]
	}

	getLoadingProgress ()
	{
		return this.totalItems > 0 ? this.itemsLoaded / this.totalItems : 0
	}

	isPremium (item)
	{
		return item.tiers[0] > this.TIER_EPIC
	}
}
