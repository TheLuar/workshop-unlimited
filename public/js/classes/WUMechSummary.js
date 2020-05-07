class WUMechSummary extends HTMLElement
{
    constructor (stats, setup)
    {
        super();

        this.className = 'box ui';

        this.statNames = [];

        for (const stat of stats)
        {
            this.statNames.push(stat.name);
            this[stat.name] = new WUStatBlockQuoted(stat);
            this.appendChild(this[stat.name]);
        }

        this.set(setup);
    }

    set (setup)
    {
        const statMap = {};

        for (const statName of this.statNames)
        {
            statMap[statName] = 0;

            for (const item of setup)
                if (item && item.stats[statName])
                    statMap[statName] += item.stats[statName];

            this[statName].quote('');
        }

        for (const statName of this.statNames)
        {
            const statBlock = this[statName];
            let hoverData = { text:statMap[statName] + ' ' + statBlock.statData.context };

            if (!statMap[statName] || !statBlock.statData.buff) continue;

            if ($.getLS('arena_buffs'))
            {
                const buffData  = statBlock.statData.buff;

                let buffedVal = 0;

                if (buffData.mode === '*') buffedVal = Math.round(statMap[statName] * buffData.amount);
                if (buffData.mode === '+') buffedVal = Math.round(statMap[statName] + buffData.amount);

                const buffExtra = buffedVal - statMap[statName];

                hoverData = { text:`${statMap[statName]}<c1> + ${buffExtra} ${statBlock.statData.context} from Arena Buffs</c1>` };
    
                statMap[statName] = buffedVal;

                if ($.getLS('arena_buffs_offset')) statBlock.quote(`(+${ buffExtra })`);
            }

            statBlock._quote.hoverData = hoverData;
            statBlock._value.hoverData = hoverData;
        }

        if (statMap.weight > 1000)
        {
            const healthNerf = (statMap.weight - 1000) * 15;
            
            statMap.health -= healthNerf;

            if (statMap.weight > 1010) this.weight.quote('over', '#F66');
            else this.weight.quote('heavy', '#FA8');
        }
        else if (statMap.weight > 994)
        {
            if (statMap.weight === 1000) this.weight.quote('perfect', '#86F');
            else this.weight.quote('good', '#6F8');
        }
        else this.weight.quote('');

        for (const statName of this.statNames) this[statName].value(statMap[statName]);
    }
}
window.customElements.define('wu-mech-summary', WUMechSummary);
