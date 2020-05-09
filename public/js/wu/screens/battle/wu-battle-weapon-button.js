'use strict';


import { div } from '../../utils/general-utils.js';
import { WUItemsManager } from '../../managers/wu-items-manager.js';


const itemsM = WUItemsManager.gi()


export const WUBattleWeaponButton = class
{
    constructor (index, p)
    {
        this.events = {
            use: null
        }

        this.itemIndex = index;
        this.item = p.items[index];
        this.player = p;

        this.itemGfx = div('item-gfx');
        this.hitBox = div('click-area');
        this.element = div('wu-battle-item-button', null, [this.itemGfx, this.hitBox]);

        this.usedThisTurn = false;

        this.itemGfx.style.backgroundImage = 'url(' + this.item.url + ')';
        this.hitBox.hoverData = { item: this.item };

        this.hitBox.onclick = () => this.use();

        this.render();
    }

    use ()
    {
        if (this.canUse())
        {
            this.player.uses[this.itemIndex]++;
            this.events.use(this.itemIndex)
        }
        
        this.usedThisTurn = this.item.type !== itemsM.LEG_TYPE
        this.render()
    }

    reset ()
    {
        this.usedThisTurn = false;
        this.render();
    }

    canUse ()
    {
        if (this.usedThisTurn) return false

        if (this.item.stats.eneCost)
            if (this.player.stats.energy < this.item.stats.eneCost) return false

        if (this.item.stats.backfire)
            if (this.player.stats.health < this.item.stats.backfire) return false

        if (this.item.stats.uses)
            if (this.player.uses[this.itemIndex] >= this.item.stats.uses) return false

        // if (this.item.range)
            

        return true;
    }

    render ()
    {
        if (this.canUse())
        {
            this.element.classList.remove('disabled');
            return;
        }

        this.element.classList.add('disabled');
    }
}
