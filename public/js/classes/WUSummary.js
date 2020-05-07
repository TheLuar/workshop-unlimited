class WUSummary extends HTMLElement
{
    constructor (item)
    {
        super();
        this.setItem(item);
    }

    setItem (item)
    {
        while (this.lastChild) this.lastChild.remove();

        if (!item) return;

        const statNames = Object.keys(item.stats);

        for (const name of statNames)
        {
            const stat = window.workshop.statsData[name];
            const block = new WUStatBlock(stat, item.stats[name]);

            this.appendChild(block);
        }
    }
}
window.customElements.define('wu-summary', WUSummary);
