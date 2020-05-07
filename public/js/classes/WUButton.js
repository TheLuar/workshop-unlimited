$.defineHTMLElement('wu-button', class WUButton extends HTMLElement
{
    constructor (text, src, onclick)
    {
        super();

        this.hoverData = { text };
        this.className = 'box border';

        const img = new Image();
        img.hoverData = { text };
        img.src = src;
        img.draggable = false;

        this.addEventListener('click', onclick);

        this.appendChild(img);
    }
});
