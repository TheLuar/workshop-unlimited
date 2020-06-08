'use strict'


const items = require('../items.json')
const routes = require('express').Router()

const regExes = {
	uint: /\d+/,
	name: /[a-z ]+/i
}


routes.get('/api/items', (req, res) =>
{
	res.status(200).json(items)
})

routes.get('/api/items/:name_or_id', (req, res) =>
{
	const x = String(req.params.name_or_id)

	const prop = regExes.uint.test(x) ? 'id'
						 : regExes.name.test(x) ? 'name'
						 : ''

	if (!prop) return res.status(400).json({
		message: 'The parameter must be an numeric ID or name of the item you are looking for'
	})

	const item = items.find(item =>
	{
		return item.hasOwnProperty(prop)
		    && String(item[prop]).toLowerCase() === x.toLowerCase()
	})

	if (!item) return res.status(404).json({
		message: `No item with ID or name '${ x }'`
	})

	return res.json(item)
})


module.exports = routes
