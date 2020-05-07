class WUMechsManager
{
    constructor ()
    {
        this.mechs = $.getLS('mechs') || $.setLS('mechs', [{ name:'main', setup:[] }]);

        for (const mech of this.mechs) mech.setup = mech.setup.map(name => window.workshop.getItem({ name }));

        this.active = this.mechs[0];
    }

    save () 
    {
        $.setLS('mechs', this.mechs);
    }
}

