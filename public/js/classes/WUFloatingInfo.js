class WUFloatingInfo extends HTMLElement
{
    constructor ()
    {
        super();

        this.currentData = null;
        this._text = document.createElement('text');
        this._bars = new WUSummary();
        this.className = 'pc-only';

        this.appendChild(this._text);
        this.appendChild(this._bars);

        const update = e =>
        {
            if (window.innerWidth < window.innerHeight || window.innerWidth < 812) return;

            if (e.target.hoverData)
            {
                if (e.target.hoverData !== this.currentData) this.show(e.target.hoverData);
            }
            else this.hide();

            if (this.visible)
            {
                if (e.clientX > window.innerWidth / 2) this.x = e.clientX - this.offsetWidth - 40;
                else this.x = e.clientX + 40;

                let y = e.clientY - this.offsetHeight / 2;

                if (y < 20) y = 20;
                if (y + this.offsetHeight > window.innerHeight - 20) y = window.innerHeight - this.offsetHeight - 20;
                
                this.y = y;
            }
        };

        window.addEventListener('mousemove', update);

        this.hide();
    }

    get visible ()
    {
        return this.style.visibility === 'visible';
    }

    set x (n)
    {
        this.style.left = n + 'px';
    }

    set y (n)
    {
        this.style.top = n + 'px';
    }

    show (data)
    {
        if (data.item)
        {
            this._bars.setItem(data.item);
            this._text.innerHTML = data.item.name;
        }
        else if (data.text)
        {
            this._text.innerHTML = data.text;
            this._bars.setItem();
        }

        this.currentData = data;
        this.style.visibility = 'visible';
    }

    hide ()
    {
        this.currentData = null;
        this.style.visibility = 'hidden';
    }
}
window.customElements.define('wu-floating-info', WUFloatingInfo);