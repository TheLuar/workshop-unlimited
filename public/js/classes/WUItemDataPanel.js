class WUItemDataPanel extends HTMLElement
{
    constructor ()
    {
        super();
        
        this._name = $.dom('name');
        this._gfx  = new Image();
        this._sum  = new WUSummary();

        this.appendChild(this._name);
        this.appendChild(this._gfx);
        this.appendChild(this._sum);

        this.setItem(null);
    }

    setItem (item)
    {
        if (item)
        {
            this._name.innerText = item.name;
            this._gfx.src = item.src;
            this._gfx.style.visibility = '';
            this._sum.setItem(item);
        }
        else
        {
            this._name.innerText = '(nothing)';
            this._gfx.style.visibility = 'hidden';
            this._sum.setItem(null);
        }
    }
}
window.customElements.define('wu-item-data-panel', WUItemDataPanel);
