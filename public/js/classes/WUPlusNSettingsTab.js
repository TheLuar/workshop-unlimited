$.defineHTMLElement('wu-switch-button', class WUSwitchButton extends HTMLElement
{
    constructor (checked, oninput)
    {
        super();

        this.appendChild($.dom('input', { type:'checkbox', checked, oninput }));
        this.appendChild(document.createElement('runnable-track'));
        this.appendChild(document.createElement('togglable-thumb'));
    }
});


$.defineHTMLElement('wu-switch-container', class WUSwitchContainer extends HTMLElement
{
    constructor (innerText, checked, oninput)
    {
        super();

        this.appendChild(new WUSwitchButton(checked, oninput));
        this.appendChild($.dom('text', { innerText }));
    }
});


$.defineHTMLElement('wu-plus-n-settings-tab', class WUPlusNSettingsTab extends HTMLElement
{
    constructor ()
    {
        super();

        this.className = 'tab';


        const switchArenaBuffsEvent = function(e)
        {
            $.setLS('arena_buffs', Boolean(e.target.checked));
            window.workshop.updateMechSummary();
        };
        const switchArenaBuffsOffsetEvent = function(e)
        {
            $.setLS('arena_buffs_offset', Boolean(e.target.checked));
            window.workshop.updateMechSummary();
        };
        const btnCustomItemsEvent = () => window.workshop.customItemsTab.show();


        this.contentWrapper = document.createElement('content-wrapper');
        
        this.ctnButtons = document.createElement('buttons-container');


        // Switchs

        this.addSwitch('Arena Buffs', $.getLS('arena_buffs'), switchArenaBuffsEvent);

        this.addSwitch('Show Buffs Offset', $.getLS('arena_buffs_offset'), switchArenaBuffsOffsetEvent);


        // Buttons

        this.addButton('Custom Items', './img/general/customitems.png', btnCustomItemsEvent);
        
        this.addButton('Battle', './img/general/mech.svg', () => socket.emit('battle-join-pool', workshop.getSetup()));
        
        this.addButton('Dismount Mech', './img/general/bin.png', () => window.workshop.dismountMech());

        this.addButton('Reload', './img/general/refresh.svg', () => window.location.reload(true));


        // Other

        this.contentWrapper.className = 'box border';

        this.appendChild(this.contentWrapper);

        this.contentWrapper.appendChild($.dom('close-tab-btn', { onclick:() => this.hide() }));
        this.contentWrapper.appendChild(this.ctnButtons);

        this.addEventListener('click', e => (e.target === this) && this.hide());

        this.hide();
    }

    show ()
    {
        this.style.visibility = '';
    }

    hide ()
    {
        this.style.visibility = 'hidden';
    }

    addButton (text, icon, call)
    {
        const evt = e =>
        {
            this.hide();
            call(e);
        };

        const btn = new WUButton(text, icon, evt);

        this.ctnButtons.appendChild(btn);
    }

    addSwitch (text, checked, call)
    {
        const label = document.createElement('label');

        const switchbtn = new WUSwitchButton(checked, call);

        const switchContext = document.createElement('switch-context');

        
        label.className = 'switch-container';

        switchContext.innerText = text;


        label.appendChild(switchbtn);
        label.appendChild(switchContext);

        this.contentWrapper.appendChild(label);
    }
});
