$.defineHTMLElement('wu-mech-part', class WUMechPart extends HTMLElement
{
    constructor ()
    {
        super();

        this.item = null;
        this.style.visibility = 'hidden';
        this.attachment = null;
        this.img = window.document.createElement('img');
        this.img.className = 'outline';

        this.appendChild(this.img);
    }

    setItem (item)
    {
        if (!item)
        {
            this.clear();
            return;
        }

        this.item = item;
        this.img.hoverData = { item };
        this.img.src = item.src;
        this.img.style.width  = item.width ? item.width : '';
        this.img.style.height = item.height ? item.height : '';
        this.attachment = item.attachment;
        this.style.visibility = '';
    }

    clear ()
    {
        this.item = null;
        this.img.hoverData = null;
        this.img.src = '';
        this.style.visibility = 'hidden';
    }

    set x (x) { this.style.left = Number(x) + 'px' }
    set y (y) { this.style.top  = Number(y) + 'px' }
    get x ()  { return Number(this.style.left.replace(/[^\d|.|-]/g, '')) }
    get y ()  { return Number(this.style.top.replace(/[^\d|.|-]/g,  '')) }
    get w ()  { return this.img.offsetWidth }
    get h ()  { return this.img.offsetHeight }
    
    get ready () { return this.img.complete }
});
