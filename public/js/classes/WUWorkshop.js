$.defineHTMLElement('wu-workshop', class WUWorkshop extends HTMLElement
{
    constructor ()
    {
        super();

        window.workshop = this;

        this.notexture = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjJweCIgaGVpZ2h0PSIycHgiPg0KICA8cGF0aCBkPSJNMCAwSDFWMkgyVjFIMFoiLz4NCiAgPHBhdGggZmlsbD0iI0ZGMDBGRiIgZD0iTTEgMEgyVjFIMFYySDFWMFoiLz4NCjwvc3ZnPg==';
        this.ready = false;
        this.itemSlots = [];
        this.topStatMap = {};
        this.itemQuery = {};
        

        // Local Storage checking

        if (typeof $.getLS('arena_buffs') !== 'boolean') $.setLS('arena_buffs', false);
        if (typeof $.getLS('arena_buffs_offset') !== 'boolean') $.setLS('arena_buffs_offset', false);
        if (typeof $.getLS('divine_tier') !== 'boolean') $.setLS('divine_tier', false);

        if (typeof $.getLS('main_mech_scale') !== 'number') $.setLS('main_mech_scale', 60);
        else if ($.getLS('main_mech_scale') > 100) $.setLS('main_mech_scale', 100);
        else if ($.getLS('main_mech_scale') < 1) $.setLS('main_mech_scale', 1);

        if (Array.isArray($.getLS('custom_items'))) this.customItems = $.getLS('custom_items')
        else this.customItems = $.setLS('custom_items', []);

        // End of Local Storage Checking


        const onWorkshopReady = setInterval(() =>
        {
            if (!window.workshop.ready) return;
            
            clearInterval(onWorkshopReady);

            this.mechsManager = new WUMechsManager();
            const setup = this.mechsManager.active.setup;

            // Mech Summary

            const MSStats = [];
            const MSStatNames = 'weight,health,eneCap,eneReg,heaCap,heaCol,phyRes,expRes,eleRes'.split(',');
            for (const s of MSStatNames) MSStats.push(this.statsData[s]);
            this.mechSummary = new WUMechSummary(MSStats, setup);
            this.appendChild(this.mechSummary);

            // End of Mech Summary

            this.partsSetup = new WUPartsSetup(setup);
            this.appendChild(this.partsSetup);
            this.modulesSetup = new WUModulesSetup(setup);
            this.appendChild(this.modulesSetup);

            this.itemSlots.push(...this.partsSetup.slots, ...this.modulesSetup.slots);

            this._plusTab = new WUPlusNSettingsTab();
            this._plusBtn = new WUButton('More', './img/general/plus.svg', () => this._plusTab.show());
            this._plusBtn.id = 'plus-button';
            this.appendChild(this._plusTab);
            this.appendChild(this._plusBtn);

            this.mechDisplay = new WUMechDisplay(this.mechsManager.active);
            this.appendChild(this.mechDisplay);

            this.selectItemTab = new WUSelectItemTab();
            this.customItemsTab = new WUCustomItemsTab();

            this.appendChild(this.selectItemTab);
            this.appendChild(this.customItemsTab);
            this.appendChild(new WUFloatingInfo());
        }, 250);

        this.hide();
    }

    get visible ()
    {
        return !this.style.display;
    }

    show ()
    {
        this.style.display = '';
    }

    hide ()
    {
        this.style.display = 'none';
    }

    updateMechSummary ()
    {
        const setup = [];

        let i = this.itemSlots.length;

        while (i--)
        {
            const slot = this.itemSlots[i];
            if (slot.currentItem) setup.push(slot.currentItem);
        }

        this.mechSummary.set(setup);
    }

    updateMechDisplay ()
    {
        this.mechDisplay.assemble(this.itemSlots.map(slot => slot.currentItem));
    }

    updateActiveMech ()
    {
        this.mechsManager.active.setup = this.itemSlots.map(slot =>
        {
            if (slot.currentItem) return slot.currentItem.name
        });
        this.mechsManager.save();
    }

    getItem (data)
    {
        const keys = Object.keys(data);

        for (const item of this.items) if (keys.every(key => item[key] === data[key])) return item;
    }

    init ()
    {
        const match = location.hash.match(/#[^#]*/g);

        if (match)
        {
            const item = JSON.parse(atob(match[0].split(':')[1]));

            if (window.confirm('Do you want to import "' + item.name + '"?'))
            {
                this.defineCustomItem(item);
                console.log(item);
            }
        }
        

        const statNames = Object.keys(this.statsData);

        console.time('assets delay');
        
        for (let i = this.officialItems.length; i--;)
        {
            const item = this.officialItems[i];
            const fixedName = item.name.replace(/\s/g, '');

            $.toDataURL('./img/items/' + fixedName + (item.svg ? '.svg' : '.png'), data => item.src = data);
            this.itemQuery[fixedName.toLowerCase()] = item;
        }

        for (let i = this.customItems.length; i--;)
        {
            const item = this.customItems[i];
            $.toDataURL(item.url, data => item.src = data);
        }

        for (let i = statNames.length; i--;)
        {
            const stat = this.statsData[statNames[i]];
            $.toDataURL(`./img/icons/stats/${stat.name}.svg`, data => stat.src = data);
        }

        const items = () => $.Array.every(this.items, item => item.src);
        const slots = () => $.Array.every(this.itemSlots, slot => slot.ready);
        const stats = () => $.Array.every(Object.keys(this.statsData), key => this.statsData[key].src);

        const onAssetsReady = setInterval(() =>
        {
            if (items() && slots() && stats())
            {
                console.timeEnd('assets delay');
                clearInterval(onAssetsReady);
                this.ready = true;
            }
        }, 250);
    }

    get items () {
        return [...this.customItems, ...this.officialItems];
    }

    defineCustomItem (item)
    {
        this.customItems.push(item);

        const srcLess = { ...item };

        delete srcLess.src;

        $.setLS('custom_items', [...$.getLS('custom_items'), srcLess]);
    }

    deleteCustomItem (item)
    {
        const setup = $.Array.map(this.itemSlots, slot => slot.currentItem);

        for (let i = this.itemSlots.length; i--;) if (this.itemSlots[i].currentItem === item) this.itemSlots[i].clear();
        
        if ($.Array.map(this.itemSlots, slot => slot.currentItem) !== setup)
        {
            this.updateMechSummary();
            this.updateActiveMech();
            if (item.type < 6) this.updateMechDisplay();
        }


        this.customItems.splice(this.customItems.indexOf(item), 1);

        delete item.src; // Items have no 'src' property on Local Storage

        const LSCustomItems = $.getLS('custom_items');
        const itemStr = JSON.stringify(item);

        for (let i = LSCustomItems.length; i--;)
        {
            const LSitem = LSCustomItems[i];

            if (JSON.stringify(LSitem) === itemStr)
            {
                LSCustomItems.splice(LSCustomItems.indexOf(item), 1);
                $.setLS('custom_items', LSCustomItems);
                break;
            }
        }
    }

    dismountMech ()
    {
        for (const slot of this.itemSlots) slot.clear();

        this.updateActiveMech();
        this.updateMechSummary();
        this.updateMechDisplay();
    }

    showDialog (data)
    {
        console.log(data);
    }

    getSetup ()
    {
        return this.itemSlots.map(slot => slot.currentItem ? slot.currentItem.id : 0);
    }
});
