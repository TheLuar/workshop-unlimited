'use strict'


const express = require('express')
// const ItemsController = require('./controllers/ItemsController.js')

const router = express.Router()


router.get('/api', (req, res) =>
{
	console.log(req.body)
	res.send('api!')
})

router.get('/version', (req, res) =>
{
	console.log(req.body)
	res.send('version!')
})


module.exports = router
