'use strict';


// Dependences

import * as statsDB from '../data/stats.js';
import { getImgBlob } from '../utils/get-img-blob.js';


// General

const missingTextureEncoded = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cGF0aCBkPSJNMCAwSDUwVjEwMEgxMDBWNTBIMFYwWiIgZmlsbD0iIzAwMDAwMCIvPjxwYXRoIGQ9Ik01MCAwSDEwMFY1MEgwVjEwMEg1MCBWMFoiIGZpbGw9IiNGRjAwRkYiLz48L3N2Zz4='


// Export

export const WUStatsManager = class
{
    constructor ()
    {
        this.statsList = Object.keys(statsDB).map(k => statsDB[k])
        this.statsLoaded = 0
        this.totalStats = this.statsList.length
        this.mechSumStatKeys = [
            'weight', 'health', 'eneCap',
            'eneReg', 'heaCap', 'heaCol',
            'phyRes', 'expRes', 'eleRes'
        ]
    }

    load ()
    {
		const roll = i =>
		{
			const stat = this.statsList[i]

			getImgBlob('../../../img/icons/stats/' + stat.key + '.svg', 'image/svg')
				.then(blob => stat.url = blob)
				.catch(() => stat.url = missingTextureEncoded)
				.then(() =>
				{
					this.statsLoaded++
					if (this.statsList[++i]) roll(i)
				})
		}

		roll(0)
    }

    getByKey (key)
    {
        const stat = statsDB[key];
        if (!stat) throw new Error('No such stat with key', key);
        return stat;
    }

	getLoadingProgress ()
	{
		return this.statsLoaded / this.totalStats
	}

	get ready ()
	{
		return this.statsLoaded >= this.totalStats
	}

    static getInstance ()
    {
        if (!this.instance) this.instance = new this()
        return this.instance;
    }
}
