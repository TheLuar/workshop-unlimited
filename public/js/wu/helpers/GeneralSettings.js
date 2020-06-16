'use strict'


import { setLS, getLS } from '../utils/GeneralUtils.js'
import { Singleton } from '../bases/Singleton.js'


export class GeneralSettings extends Singleton
{
	lsPrefix = 'wu-settings-'

	toggles = {
		mobile_device_mode: true,
		arena_buffs: true,
		divine_tier: true,
		buffs_on_tooltip: true
	}

	constructor ()
	{
		super()
	}

	init ()
	{
		for (const key in this.toggles)
		{
			const state = getLS(this.lsPrefix + key, this.get(key))
			this.toggle(key, state)
		}

		this._init()
	}

	toggle (key, state = !this.toggles[key])
	{
		if (typeof this.toggles[key] === 'undefined') throw `Unknown setting '${ key }'`
		setLS(this.lsPrefix + key, state)
		return this.toggles[key] = state
	}

	get (key)
	{
		if (typeof this.toggles[key] === 'undefined') throw new Error(`Unknown setting '${ key }'`)
		return this.toggles[key]
	}
}
