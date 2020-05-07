$.defineHTMLElement('wu-tab', class WUTab extends HTMLElement
{
    constructor ()
    {
        super();

        this.className = 'tab';

        this.addEventListener('click', e => (e.target === this) && this.hide());
        this.hide();
    }

    hide ()
    {
        this.style.visibility = 'hidden';
    }

    show ()
    {
        this.style.visibility = '';
    }
});