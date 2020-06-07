'use strict'


// Serve

const express = require('express')
const http = require('http')

const app = express()
const server = http.createServer(app)

app.use('/', express.static('public'))
server.listen(process.env.PORT || 3000)


// Game

const { SocketManager } = require('./socket/SocketManager')
const { ItemsManager } = require('./items/ItemsManager')
const { BattleManager } = require('./battle/BattleManager')
const { MatchMaker } = require('./battle/MatchMaker')

const socketM = SocketManager.gi()
const itemsM = ItemsManager.gi()
const battleM = BattleManager.gi()
const matchMaker = MatchMaker.gi()

socketM.init(server)
itemsM.init()
battleM.init()
matchMaker.init()
