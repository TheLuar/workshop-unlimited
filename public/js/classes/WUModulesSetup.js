class WUModulesSetup extends HTMLElement
{
    constructor (setup)
    {
        super();

        this.slots = [];

        for (let i = 12; i < 20; i++)
        {
            const slot = new WUItemSlot(9, './img/icons/slots/mod.svg', setup[i]);
            this.slots.push(slot);
            this.appendChild(slot);
        }
    }
}
window.customElements.define('wu-modules-setup', WUModulesSetup);