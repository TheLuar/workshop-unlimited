'use strict'


// Class

module.exports.Singleton = class
{
	initialized = false

	_init ()
	{
		if (this.initialized) throw (this.constructor.name + ' has already been initialized')
		this.initialized = true

		console.log('init ::', this.constructor.name)
	}

	static gi ()
	{
		if (!(this._instance instanceof this)) this._instance = new this()
		return this._instance
	}
}
