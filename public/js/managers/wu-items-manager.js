'use strict';


// Dependences

import * as itemsDB from '../data/items.js';
import { getImgBlob } from '../utils/get-img-blob.js';


// General

const itemsByID = {};
const itemMapsByType = {};
const missingTextureEncoded = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNMCAwSDUwVjEwMEgxMDBWNTBIMFYwWiIgZmlsbD0iIzAwMDAwMCIvPjxwYXRoIGQ9Ik01MCAwSDEwMFY1MEgwVjEwMEg1MCBWMFoiIGZpbGw9IiNGRjAwRkYiLz48L3N2Zz4='


// Export

export const WUItemsManager = class
{
	constructor ()
	{
		this.TORSO_TYPE  = 1
		this.LEG_TYPE    = 2
		this.SIDE_TYPE   = 3
		this.TOP_TYPE    = 4
		this.DRONE_TYPE  = 5
		this.CHARGE_TYPE = 6
		this.TELE_TYPE   = 7
		this.HOOK_TYPE   = 8
		this.MOD_TYPE    = 9
		
		this.totalItems = Object.keys(itemsDB).length
		this.itemsLoaded = 0

		for (const name in itemsDB)
		{
			const item = itemsDB[name]
			const fileType = (item.svg ? 'svg' : 'png')
			const fileName = item.name.replace(/\s/g, '') + '.' + fileType

			item.url = null
			item.fileType = fileType
			item.fileName = fileName
			
			if (!itemMapsByType[item.type]) itemMapsByType[item.type] = {}
			
			itemMapsByType[item.type][item.id] = item
			itemsByID[item.id] = item
		}
	}

	load ()
	{
		const items = Object.keys(itemsDB).map(a => itemsDB[a]);

		const roll = i =>
		{
			const item = items[i]

			getImgBlob('../../../img/items/' + item.fileName, 'image/' + item.fileType)
				.then(blob => item.url = blob)
				.catch(() => item.url = missingTextureEncoded)
				.then(() =>
				{
					this.itemsLoaded++
					if (items[++i]) roll(i)
				})
		}

		roll(0)
	}

	getByID (id)
	{
		const item = itemsByID[id];
		if (!item) throw new Error('No such item with id', id);
		return item;
	}

	getByName (name)
	{
		const item = itemsDB[name.replace(/\s/g, '')]
		if (!item) throw new Error('No such item with name', name);
		return item
	}

	getMapByType (type)
	{
		const map = itemMapsByType[type];
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
		return this.itemsLoaded / this.totalItems
	}

	get ready ()
	{
		return this.itemsLoaded >= this.totalItems
	}

	static getInstance ()
	{
		return this.gi();
	}

	static gi ()
	{
		if (!this.instance) this.instance = new this();
		return this.instance;
	}
}
