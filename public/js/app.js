'use strict'


// Packages

import * as items from './data/items.js'
import * as stats from './data/stats.js'

import { WorkshopUnlimited } from './wu/WorkshopUnlimited.js'


// General

const container = document.querySelector('#app')
const wu = WorkshopUnlimited.gi()

wu.init({ container, items, stats })

document.addEventListener('readystatechange', e =>
{
	if (e.target.readyState === 'complete')
	{
		wu.load({
			items: '../../img/items/',
			stats: '../../img/stats/',
		})
	}
})
