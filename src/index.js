'use strict'


const express = require('express')
const http = require('http')
const path = require('path')
const routes = require('./router/routes')

const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)


// General

const { SocketManager } = require('./socket/SocketManager')
const { ItemsManager } = require('./items/ItemsManager')
const { BattleManager } = require('./battle/BattleManager')
const { MatchMaker } = require('./battle/MatchMaker')

const socketM = SocketManager.gi()
const itemsM = ItemsManager.gi()
const battleM = BattleManager.gi()
const matchMaker = MatchMaker.gi()


// start

socketM.init(server)
itemsM.init()
battleM.init()
matchMaker.init()


app.use('/', express.static(path.resolve(__dirname, '..', 'public')))
app.use(routes)

server.listen(PORT)
