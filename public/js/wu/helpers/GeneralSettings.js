'use strict'


export const GeneralSettings = { toggle, get }


const settings = {
	arena_buffs: true,
	divine_tier: true,
	buffs_on_tooltip: true
}


function toggle (key, state = !settings[key])
{
	if (typeof settings[key] === 'undefined') throw new Error(`Unknown setting '${ key }'`)
	return settings[key] = state
}

function get (key)
{
	if (typeof settings[key] === 'undefined') throw new Error(`Unknown setting '${ key }'`)
	return settings[key]
}
