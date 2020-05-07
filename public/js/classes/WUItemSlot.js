class WUItemSlot extends HTMLElement
{
    constructor (type, icon, item)
    {
        super();

        this.className = 'box ui';

        this.hoverData = { text:'(empty slot)' };
        this.ready = false;

        this.type = type;
        this._tips = $.dom('tips');
        this._gfx = new Image();
        this._gfx.draggable = false;

        $.toDataURL(icon, data =>
        {
            this._iconSrc = data;
            item ? this.setItem(item) : this.clear(true);
            this.ready = true;
        });

        this.appendChild(this._gfx);
        this.appendChild(this._tips);

        this.onclick = () => window.workshop.selectItemTab.show(this);
    }

    setItem (item)
    {
        if (!item)
        {
            this.clear();
            return;
        }

        if (item.type !== this.type)
        {
            this.clear();
            throw new Error(`Attempt of equipping an item of type '${item.type}' in a slot of type '${this.type}'`);
        }

        this.currentItem    = item;
        this.hoverData      = { item };
        this._gfx.hoverData = { item };

        this._gfx.classList.add('outline');
        this._gfx.src = item.src;
    }

    clear ()
    {
        this.currentItem    = null;
        this.hoverData      = { text:'(empty slot)' };
        this._gfx.hoverData = { text:'(empty slot)' };

        this._gfx.classList.remove('outline');
        this._gfx.src = this._iconSrc;
    }
}
window.customElements.define('wu-item-slot', WUItemSlot);
