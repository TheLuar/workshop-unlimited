'use strict'


// Packages

import { SingletonElement } from '../../bases/SingletonElement.js'


// Class

export default class BattleScreen extends SingletonElement
{
    constructor ()
    {
        super()

        this.classList.add('screen')
    }

    init ()
    {
        this._init()
    }
}

// Dependences

// import { div } from '../../utils/general-utils.js'
// import { WUElementBase } from '../../mobiles/wu-element-base.js'
// import { WUPlayerInfoPanel } from './wu-player-info-panel.js'
// import { WUMechDisplay } from '../../mobiles/wu-mech-display.js'
// import { WUBattleWeaponButton } from './wu-battle-weapon-button.js'


// // Class

// export const WUBattleScreen = class extends WUElementBase
// {
//     constructor ()
//     {
//         super()

//         this.events = {
//             useItem: null
//         }

//         this.element = div('wu-battle-screen')

//         this.animationStack = []

//         this.places = 11

//         this.playerInfoPanels = [
//             new WUPlayerInfoPanel(),
//             new WUPlayerInfoPanel(),
//         ]

//         this.playerMechs = [
//             new WUMechDisplay(0.25),
//             new WUMechDisplay(0.25)
//         ]
        
//         this.gfxContainer = div('gfx-container', null, this.playerMechs.map(a => a.element))

//         this.buttons = div('move-buttons')

//         for (const mech of this.playerMechs)
//         {
//             mech.element.style.transition = 'left 0.5s cubic-bezier(0, 0.5, 0, 0.75)'
//         }

//         ;[
//             ...this.playerInfoPanels.map(a => a.element),
//             this.gfxContainer,
//             this.buttons,
//         ].forEach(a => this.element.appendChild(a))
//     }

//     init (data)
//     {
//         console.log(data)

//         this.toggleButtons(false)

//         while (this.buttons.lastChild) this.buttons.lastChild.remove()

//         for (let i = 0; i < data.p1.items.length; i++)
//         {
//             if (!data.p1.items[i]) continue

//             const btn = new WUBattleWeaponButton(i, data.p1)

//             btn.events.use = wi => this.events.useItem(wi)

//             this.buttons.appendChild(btn.element)
//         }

//         ;[data.p1, data.p2].forEach((p, i) =>
//         {
//             this.playerInfoPanels[i].setPlayerData(p)
//             this.playerMechs[i].assemble(p.items)
//         })

//         this.updateMechPositions(data)
//     }
    
//     updateMechPositions ({ p1, p2 })
//     {
//         ;[p1, p2].forEach((p, i) =>
//         {
//             this.playerMechs[i].element.style.left = this.getXforPosition(p.position)
//         })
//     }

//     getXforPosition (position)
//     {
//         return position / this.places * 100 + '%'
//     }

//     updateStats ({ p1, p2 })
//     {
//         ;[p1, p2].forEach((p, i) =>
//         {
//             this.playerInfoPanels[i].updateStats(p.stats)
//         })
//     }

//     toggleButtons (on)
//     {
//         this.buttons.style.display = on ? '' : 'none'
//     }

//     animFire ()
//     {
        
//     }
// }

// // data = {
// //     '1': {
// //         id: '1',
// //         stats: {},
// //         items: [{}, {}, {}],
// //     },
// //     '2': {
// //         id: '2',
// //         stats: {},
// //         items: [{}, {}, {}],
// //     }
// // }

// // function fire (pid1, pid2, itemIndex) {
// //     const attacker = data[pid1]
// //     const defender = data[pid2]
// //     const item = attacker.items[itemIndex]
// // }