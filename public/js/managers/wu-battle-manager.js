'use strict'


// Dependences

import { WUBattleScreen } from '../screens/battle/wu-battle-screen.js'

import { WUBattleData } from '../helpers/wu-battle-data.js'


// Export

export const WUBattleManager = class
{
    constructor ()
    {
        this.events = {
            useItem: null,
            finish: null,
        }

        this.screen = WUBattleScreen.getInstance()
        this.screen.events.useItem = wi =>
        {
            if (this.local)
            {
                const dmg = this.local_getItemBaseDamage(this.data.p1.items[wi])

                this.gotData({
                    code: 'fire',
                    pid: this.data.p1.id,
                    dmg,
                    wi,
                })

                return
            }

            this.events.useItem(ui)
        }
        this.data = null
        this.local = true
        this.positions = 11

        window.sendData = data => this.gotData(data)
    }
    
    startBattle (a, b, local=true)
    {
        this.data = new WUBattleData(a, b)
        this.local = local

        window.battleData = this.data
        this.screen.init(this.data)

        if (this.local)
        {
            this.turnOwner = this.data.p1
            this.turns = 1

            this.gotData({
                code: 'turn',
                pid: this.data.p1.id,
            })
        }
    }

    finishBattle (winner)
    {
        this.events.finish(winner)
    }

    gotData (updateData)
    {
        console.log('battle update >', updateData)

        const { code, pid } = updateData

        const p1 = pid === this.data.p1.id ? this.data.p1 : this.data.p2
        const p2 = pid !== this.data.p1.id ? this.data.p1 : this.data.p2

        switch (code)
        {
            case 'turn':
                this.screen.toggleButtons(pid === this.data.p1.id)
                break;
            case 'fire':
                const { wi, dmg } = updateData;
                this.fire(pid, wi, dmg)
                break;
        }
    }

    fire (pid, wi, dmg)
    {
        const attacker = pid === this.data.p1.id ? this.data.p1 : this.data.p2
        const defender = pid !== this.data.p1.id ? this.data.p1 : this.data.p2

        const item = attacker.items[wi]

        if (!item)
        {
            console.log('no item at slot', wi)
            return
        }

        this.handleDamages(attacker, defender, item, dmg)
        this.handleDisplacements(attacker, defender, item)

        this.screen.updateStats(this.data)
        this.screen.updateMechPositions(this.data)

        this.vibeCheck()
    }

    vibeCheck ()
    {
        if (this.data.p1.stats.health < 1) return this.finishBattle(this.data.p2)
        if (this.data.p2.stats.health < 1) return this.finishBattle(this.data.p1)
    }

    handleDamages (p1, p2, item, dmg)
    {
        const dmgType = ['phy', 'exp', 'ele'][item.element - 1];
        const resType = dmgType + 'Res';

        // Apply resistance
        dmg -= p2.stats[resType];

        // Energy broken damage bonus
        if (item.stats.eneDmg) dmg += Math.min(0, p2.stats.energy - item.stats.eneDmg) * -1;

        // Deal
        p2.stats.health -= Math.max(1, Math.round(dmg));

        // Deal other damages
        if (item.stats[resType + 'Dmg']) p2.stats[resType] -= item.stats[resType + 'Dmg'];
        if (item.stats.eneDmg)    p2.stats.energy = Math.max(0, p2.stats.energy - item.stats.eneDmg);
        if (item.stats.eneCapDmg) p2.stats.eneCap = Math.max(1, p2.stats.eneCap - item.stats.eneCapDmg);
        if (item.stats.eneRegDmg) p2.stats.eneReg = Math.max(1, p2.stats.eneReg - item.stats.eneRegDmg);
        if (item.stats.heaDmg)    p2.stats.heat   += item.stats.heaDmg;
        if (item.stats.heaCapDmg) p2.stats.heaCap = Math.max(1, p2.stats.heaCap - item.stats.heaCapDmg);
        if (item.stats.heaColDmg) p2.stats.heaCol = Math.max(1, p2.stats.heaCol - item.stats.heaColDmg);

        // Do self damage
        if (item.stats.backfire) p1.stats.health -= item.stats.backfire;
        if (item.stats.eneCost)  p1.stats.energy -= item.stats.eneCost;
        if (item.stats.heaCost)  p1.stats.heat   += item.stats.heaCost;
    }

    handleDisplacements (attacker, defender, item)
    {
        const { advance, retreat, recoil, push, pull } = item.stats

        const dir = attacker.position < defender.position ? 1 : -1

        if (advance) attacker.position += advance * dir
        if (retreat) attacker.position -= retreat * dir
        if (recoil)  attacker.position -= recoil  * dir

        if (push) defender.position += push * dir
        if (pull) defender.position -= pull * dir

        if ((defender.position - attacker.position) * dir <= 0) defender.position = attacker.position + dir

        if (attacker.position < 0) attacker.position = 0
        if (defender.position < 0) defender.position = 0
        if (attacker.position > this.positions) attacker.position = this.positions
        if (defender.position > this.positions) defender.position = this.positions
    }

    local_getItemBaseDamage (item)
    {
        const dmgStat = ['phy', 'exp', 'ele'][item.element - 1] + 'Dmg';

        if (!item.stats[dmgStat]) return 0;

        const [min, max] = item.stats[dmgStat];

        let dmg = 0;

        dmg += min + Math.random() * (max - min);

        return dmg;
    }

    static getInstance ()
    {
        if (!this.instance) this.instance = new this()
        return this.instance
    }
}
