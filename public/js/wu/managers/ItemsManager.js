'use strict';


// Dependences

import { Singleton } from '../bases/Singleton.js'
import { imagesLoader } from '../helpers/imagesLoader.js'


// Export

export const ItemsManager = class extends Singleton {

	TYPE_TORSO = 1
	TYPE_LEGS = 2
	TYPE_SIDE = 3
	TYPE_TOP = 4
	TYPE_DRONE = 5
	TYPE_CHARGE = 6
	TYPE_TELE = 7
	TYPE_HOOK = 8
	TYPE_MODULE = 9
	
	DISPLAYABLE_ITEM_TYPES = [
		this.TYPE_TORSO,
		this.TYPE_LEGS,
		this.TYPE_SIDE,
		this.TYPE_TOP,
		this.TYPE_DRONE
	]

	TIER_COMMON = 0
	TIER_RARE = 1
	TIER_EPIC = 2
	TIER_LEGENDARY = 3
	TIER_MYTHICAL = 4
	TIER_DIVINE = 5
	
	constructor () {
	
		super()
		
		this.total = 0
		this.loaded = 0

		this.list = []
		this.mapByID = {}
		this.mapByName = {}
		this.mapsByType = {}
	}

	init (items) {

		this.list = Object.keys(items).map(a => items[a])
		this.total = this.list.length

		for (const name in items) {

			const item = items[name]
			const fileType = (item.svg ? 'svg' : 'png')
			const fileName = item.name.replace(/\s/g, '') + '.' + fileType

			item.url = null
			item.fileType = fileType
			item.fileName = fileName
			
			if (!this.mapsByType[item.type]) this.mapsByType[item.type] = {}
			
			const safeName = item.name.replace(/\s+/g, '').toLowerCase()

			this.mapByName[safeName]
			 = this.mapByID[item.id]
			 = this.mapsByType[item.type][item.id]
			 = item
		}

		this._init()
	}

	load (path) {

		const imagesData = this.list.map(({ fileName, fileType }) => [path + fileName, 'image/' + fileType])

		imagesLoader(imagesData, 20, (url, i) => {
			this.loaded++
			this.list[i].url = url
		})
	}

	byID (id) {

		const item = this.mapByID[id]
		
		if (!item) throw new Error('No such item with id', id)
		
		return item
	}

	byName (name) {

		const safeName = name.replace(/\s+/g, '').toLowerCase()
		const item = this.mapByName[safeName]
		
		if (!item) throw new Error('No such item with name', name)
		
		return item
	}

	byType (type) {

		const map = this.mapsByType[type]
		
		if (!map) throw new Error('No such item type', type)
		
		return map
	}

	getItemKind (item) {

		const elements = ['Physical', 'Explosive', 'Electric']
		const types = ['Torso', 'Legs', 'Side Weapon', 'Top Weapon', 'Drone', 'Charge Engine', 'Teleporter', 'Grappling Hook', 'Module']
		
		return elements[item.element - 1] + ' ' + types[item.type - 1]
	}

	getLoadingProgress () {
		return this.total > 0 ? this.loaded / this.total : 0
	}

	isPremium (item) {
		return item.tiers[0] > this.TIER_EPIC
	}

	requireJump (item) {
		return 'advance' in item.stats || 'retreat' in item.stats
	}

	missingDivineBuffs (item) {
		return !item.divine && item.tiers[1] > 4
	}
}
