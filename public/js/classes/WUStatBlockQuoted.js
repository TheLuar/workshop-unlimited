class WUStatBlockQuoted extends HTMLElement
{
    constructor (data)
    {
        super();

        this._icon  = document.createElement('img');
        this._value = document.createElement('value');
        this._quote = $.dom('quote', { className:'pc-only' });

        this.hoverData = { text:data.context };
        this.statData = data;

        this._icon.src = data.src;

        this.appendChild(this._icon);
        this.appendChild(this._value);
        this.appendChild(this._quote);
    }

    value (any)
    {
        if (typeof any !== 'undefined') this._value.innerText = String(any);
        return Number(this._value.innerText);
    }

    quote (any, color)
    {
        if (color) this._quote.style.color = color;
        if (typeof any !== 'undefined') this._quote.innerHTML = String(any);
        return this._quote.innerHTML;
    }

    set hoverData (data)
    {
        this._hoverData = data;
        this._icon.hoverData = data;
        this._value.hoverData = data;
        this._quote.hoverData = data;
    }

    get hoverData ()
    {
        return this._hoverData;
    }
}
window.customElements.define('wu-stat-block-quoted', WUStatBlockQuoted);