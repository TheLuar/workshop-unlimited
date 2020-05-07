class WUPartsSetup extends HTMLElement
{
    constructor (setup)
    {
        super();

        this.slots = [];

        const slotsData =
        {
            count: 12,
            areas: 'abcdefghijkl'.split(''),
            types: '123333445678'.split(''),
            icons: [
                'torso',  'legs',  'side-l', 'side-r',
                'side-l', 'side-r', 'top-l', 'top-r',
                'drone',  'charge', 'tele',  'hook'
            ]
        };

        for (let i = 0; i < slotsData.count; i++)
        {
            const src = `./img/icons/slots/${slotsData.icons[i]}.svg`;
            const slot = new WUItemSlot(Number(slotsData.types[i]), src, setup[i]);
            slot.style.gridArea = slotsData.areas[i];
            this.slots.push(slot);
            this.appendChild(slot);
        }
    }
}
window.customElements.define('wu-parts-setup', WUPartsSetup);