'use strict'


// Class

export const WUCursorEventsHelper = class
{
	constructor (element)
	{
		this.element = element || document.body
		this.listening = {}
		this.listeners = {}
	}

	on (type, callback)
	{
		if (typeof this.listening[type] !== 'function')
		{
			const handler = e => this.listeners[type].forEach(listener => listener(e))

			this.listening[type] = handler
			this.listeners[type] = []

			this.element.addEventListener(type, handler)
		}

		this.listeners[type].push(callback)
	}

	off (type, callback, removeDuplicates)
	{
		if (!this.listeners[type]) return false

		if (!callback)
		{
			this.listeners[type] = []
		}
		else
		{
			for (let i = 0; i < this.listeners[type].length; i++)
			{
				if (this.listeners[type][i] !== callback) continue
				this.listeners[type].splice(i, 1)
			}
		}		

		if (!this.listeners[type].length)
		{
			const handler = this.listening[type]

			delete this.listening[type]
			delete this.listeners[type]

			this.element.removeEventListener(type, handler)
		}
	}

	static getInstance ()
	{
		if (!this.instance) this.instance = new this()
		return this.instance
	}
}
