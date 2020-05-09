'use strict'


// Dependences

import { WUBattlePlayerData } from '../helpers/wu-battle-player-data.js'


// Class

export const WUBattleData = class
{
    constructor (a, b)
    {
        this[a.id] = new WUBattlePlayerData(a)
        this[b.id] = new WUBattlePlayerData(b)
        this.p1 = this[a.id]
        this.p2 = this[b.id]
        this.p1.opponent = this.p2
        this.p2.opponent = this.p1
    }
}
