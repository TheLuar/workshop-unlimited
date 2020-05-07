$.defineHTMLElement('wu-item-block', class WUItemBlock extends HTMLElement
{
    constructor (item = null)
    {
        super();

        this.elmSprite = document.createElement('elm-sprite');
        this.elmHitbox = document.createElement('elm-hitbox');
        
        this.appendChild(this.elmSprite);
        this.appendChild(this.elmHitbox);

        item ? this.show(item) : this.hide();
    }

    hide ()
    {
        this.style.display = 'none';
        this.elmHitbox.classList.remove('active');
    }

    show (item)
    {
        this.style.display = '';
        this.elmHitbox.item = item;
        this.elmSprite.style.backgroundImage = 'url(' + item.src + ')';
    }
});
