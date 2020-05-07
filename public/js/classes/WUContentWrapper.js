$.defineHTMLElement('wu-content-wrapper', class WUContentWrapper extends HTMLElement
{
    constructor ()
    {
        super();

        this.className = 'box border';

        this.content = $.dom('content');

        this.appendChild(this.content);
        
        this.appendChild($.dom('close-tab-btn', {
            onclick: () => this.parentNode.hide(),
        }));
    }
});
