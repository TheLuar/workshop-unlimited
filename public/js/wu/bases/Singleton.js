'use strict'


// Class

export const Singleton = class
{
	constructor ()
	{
		this.listeners = {}
		this.initialized = false
	}

	_init ()
	{
		if (this.initialized) throw new Error(this.constructor.name + ' has already been initialized.')
		this.initialized = true
		console.log(performance.now().toFixed(2), 'init ::', this.constructor.name)
	}

	on (key, callback)
	{
		if (!this.listeners[key]) this.listeners[key] = []
		this.listeners[key].push(callback)
	}

	dispatch (key, data)
	{
		if (!this.listeners[key]) throw new Error(`no '${ key }' events assigned`)
		for (const listener of this.listeners[key]) listener(data)
	}

	static gi ()
	{
		if (!this.instance) this.instance = new this()
		return this.instance
	}
}
