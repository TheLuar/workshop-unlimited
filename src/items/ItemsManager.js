'use strict'


// Packages

const { Singleton } = require('../utils/Singleton')


// Class

module.exports.ItemsManager = class ItemsManager extends Singleton
{
	items = require('./items.json')

	constructor ()
	{
		super()
	}

	init ()
	{
		this._init()
	}

	getByID (itemID)
	{
		return this.items[itemID] || null
	}
}
