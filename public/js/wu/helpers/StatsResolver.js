'use strict'


// Dependences

import { StatsManager } from '../managers/StatsManager.js'
import { GeneralSettings } from '../helpers/GeneralSettings.js'
import { Singleton } from '../bases/Singleton.js'


// General

let statsM = null
let generalSettings = null


// Export

export const StatsResolver = class extends Singleton
{
	maxWeight = 1000
	
	constructor ()
	{
		super()

		this.init()
	}

	init ()
	{
		statsM = StatsManager.gi()
		generalSettings = GeneralSettings.gi()

		this._init()
	}

	getMechStatsFromSetup (items)
	{
		const sum = {}

		for (const key of statsM.mechSumStatKeys)
		{
			sum[key] = 0
			for (const item of items)
			{
				if (!item || !item.stats[key]) continue

				if (generalSettings.get('divine_tier') && item.divine && item.divine[key])
				{
					sum[key] += item.divine[key]
				}
				else
				{
					sum[key] += item.stats[key]
				}
			}
		}

		if (sum.weight > this.maxWeight) sum.health -= (sum.weight - this.maxWeight) * 15
		
		if (generalSettings.get('arena_buffs'))
		{
			for (const key of statsM.mechSumStatKeys)
			{
				sum[key] = Math.round(this.getArenaBuff(key, sum[key]))
			}
		}

		return sum
	}

	getArenaBuff (key, value)
	{
		const { buff } = statsM.byKey(key)

		if (buff)
		{
			if (buff.mode === '*') value *= buff.amount; else
			if (buff.mode === '+') value += buff.amount;
		}

		return value
	}

	getBattleStats (items)
	{
		const stats = {
			health: 0, eneCap: 0, eneReg: 0, heaCap: 0,
			heaCol: 0, phyRes: 0, expRes: 0, eleRes: 0, 
		};

		const statNames = Object.keys(stats);

		for (const item of items)
		{
			if (!item) continue;

			for (const name of statNames)
			{
				if (item.stats[name]) stats[name] += item.stats[name];
			}
		}

		stats.healthCap = stats.health;
		stats.energy = stats.eneCap;
		stats.heat = 0;

		return stats
	}

	get (item, key, arenaBuffs = true)
	{
		let value = item.stats[key]

		if (generalSettings.get('buffs_on_tooltip'))
		{
			if (generalSettings.get('divine_tier')
			 && item.divine
			 && item.divine[key])
			{
				value = item.divine[key]	
			}
			
			if (generalSettings.get('arena_buffs') && arenaBuffs)
			{
				value = Array.isArray(value) ? value.map(x => this.getArenaBuff(key, x)) : this.getArenaBuff(key, value)
			}
		}
		
		return Array.isArray(value) ? value.map(Math.ceil) : Math.ceil(value)
	}

	static gi ()
	{
		if (!this.instance) this.instance = new this()
		return this.instance
	}
}
