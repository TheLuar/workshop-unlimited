'use strict'


// Dependences

import { WUStatsResolver } from '../helpers/wu-stats-resolver.js'


// General

const statsResolver = WUStatsResolver.getInstance()


// Class

export const WUBattlePlayerData = class
{
    constructor (playerData)
    {
        const { id, name, items, position } = playerData

        this.id = id
        this.name = name
        this.items = items
        this.position = position
        this.stats = statsResolver.getBattleStats(items)
        this.uses = (new Array(items.length)).fill(0)
        this.droneActive = false
    }
}
