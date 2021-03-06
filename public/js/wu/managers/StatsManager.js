'use strict';


// Dependences

import { Singleton } from '../bases/Singleton.js'
import { imagesLoader } from '../helpers/imagesLoader.js'


// Export

export const StatsManager = class extends Singleton
{
	total = 0
	loaded = 0

	mechSumStatKeys = [
		'weight', 'health', 'eneCap',
		'eneReg', 'heaCap', 'heaCol',
		'phyRes', 'expRes', 'eleRes'
	]

	list = []
	mapByKey = {}

	constructor ()
	{
		super()
	}

	init (stats)
	{
		this.list = Object.keys(stats).map(k => stats[k]).sort((a, b) => a.id - b.id)
		this.total = this.list.length

		for (const key in stats)
		{
			const stat = stats[key]
			const fileName = stat.key + '.svg'

			stat.url = null
			stat.fileName = fileName

			this.mapByKey[key] = stat
		}

		this._init()
	}

	load (path)
	{
		const imagesData = this.list.map(({ fileName }) => [path + fileName, 'image/svg'])

		imagesLoader(imagesData, 1, (url, i) =>
		{
			this.loaded++
			this.list[i].url = url
		})
	}

	byKey (key)
	{
		const stat = this.mapByKey[key];
		if (!stat) throw new Error('No such stat with key', key);
		return stat;
	}

	getLoadingProgress ()
	{
		return this.total > 0 ? this.loaded / this.total : 0
	}
}
