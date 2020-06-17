const functions = require('firebase-functions');
const express = require('express')
const items = require('./items.json')


const app = express()

const regExes = {
	uint: /\d+/,
	name: /[a-z ]+/i
}


app.get('/items/', (req, res) =>
{
	res.status(200).json(items)
})

app.get('/items/:id_or_name', (req, res) =>
{
	const version = String(req.params.version)
	const id_or_name = String(req.params.id_or_name)

	const prop = regExes.uint.test(id_or_name) ? 'id'
						 : regExes.name.test(id_or_name) ? 'name'
						 : ''

	if (!prop) return res.status(400).json({
		message: 'The parameter must be an numeric ID or name of the item you are looking for'
	})

	const item = items.find(item =>
	{
		return item.hasOwnProperty(prop)
				&& String(item[prop]).toLowerCase() === id_or_name.toLowerCase()
	})

	if (!item) return res.status(404).json({
		message: `No item with ID or name '${ id_or_name }'`
	})

	return res.json(item)
})


exports.api = functions.https.onRequest(app)
