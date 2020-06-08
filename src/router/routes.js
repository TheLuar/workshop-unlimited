'use strict'


const items = require('../items.json')
const routes = require('express').Router()

const regExes = {
	uint: /\d+/,
	name: /[a-z ]+/
}


routes.get('/api/items', (req, res) =>
{
	res.status(200).send(items)
})

routes.get('/api/items/:name_or_id', (req, res) =>
{
	const x = String(req.params.name_or_id)

	const prop = regExes.uint.test(x) ? 'id'
						 : regExes.name.test(x) ? 'name'
						 : ''

	if (!prop) return res.status(400).send({
		message: 'The parameter must be an numeric ID or name of the item you are looking for'
	})

	const item = items.find(item =>
	{
		return item.hasOwnProperty(prop)
		    && String(item[prop]).toLowerCase() === x.toLowerCase()
	})

	if (!item) return res.status(404).send({
		message: `No item with ID or name '${ x }'`
	})

	return res.send(item)
})


module.exports = routes
