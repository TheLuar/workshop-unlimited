'use strict';


// Dependences

import { Singleton } from '../bases/Singleton.js'
import { getImgBlob } from '../utils/GeneralUtils.js';
import { MISSING_TEXTURE } from '../consts.js'


// Export

export const StatsManager = class extends Singleton
{
	constructor ()
	{
        super()
        
		this.total = 0
		this.loaded = 0
		
		this.mechSumStatKeys = [
			'weight', 'health', 'eneCap',
			'eneReg', 'heaCap', 'heaCol',
			'phyRes', 'expRes', 'eleRes'
		]

        this.list = []
		this.mapByKey = {}
	}

	init (stats)
	{
		this.list = Object.keys(stats).map(k => stats[k])
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
        let loading = 0
        let i = 0

        const roll = () =>
        {
            const stat = this.list[i]

            loading++

            getImgBlob(path + stat.fileName, 'image/svg')
                .then(blob => stat.url = blob)
                .catch(() => stat.url = MISSING_TEXTURE)
                .then(() =>
                {
                    loading--
                    i++
                    this.loaded++
                    if (loading < 20 && this.list[i]) roll(i)
                })
        }

        roll()
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


// 'use strict';


// // Dependences

// import * as statsDB from '../data/stats.js';
// import { getImgBlob } from '../utils/get-img-blob.js';


// // General

// const missingTextureEncoded = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNMCAwSDUwVjEwMEgxMDBWNTBIMFYwWiIgZmlsbD0iIzAwMDAwMCIvPjxwYXRoIGQ9Ik01MCAwSDEwMFY1MEgwVjEwMEg1MCBWMFoiIGZpbGw9IiNGRjAwRkYiLz48L3N2Zz4='


// // Export

// export const WUStatsManager = class
// {
//     constructor ()
//     {
//         this.list = Object.keys(statsDB).map(k => statsDB[k])
//         this.loaded = 0
//         this.totalStats = this.list.length
//     }

//     load ()
//     {
// 		const roll = i =>
// 		{
// 			const stat = this.list[i]

// 			getImgBlob('../../../img/icons/stats/' + stat.key + '.svg', 'image/svg')
// 				.then(blob => stat.url = blob)
// 				.catch(() => stat.url = missingTextureEncoded)
// 				.then(() =>
// 				{
// 					this.loaded++
// 					if (this.list[++i]) roll(i)
// 				})
// 		}

// 		roll(0)
//     }

//     getByKey (key)
//     {
//         const stat = statsDB[key];
//         if (!stat) throw new Error('No such stat with key', key);
//         return stat;
//     }

// 	getLoadingProgress ()
// 	{
// 		return this.loaded / this.totalStats
// 	}

// 	get ready ()
// 	{
// 		return this.loaded >= this.totalStats
// 	}

//     static getInstance ()
//     {
//         if (!this.instance) this.instance = new this()
//         return this.instance;
//     }
// }
