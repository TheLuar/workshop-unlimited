$.defineHTMLElement('wu-select-item-tab', class WUSelectItemTab extends HTMLElement
{
    constructor ()
    {
        super();


        this.currentSlot = null;

        this.panel = new WUItemDataPanel();

        this.list = new WUItemsList();


        // Listeners

        this.addEventListener('click', ({ target }) =>
        {
            if (target.nodeName !== 'ELM-HITBOX') return this.selectItem(null);
        
            if (!isTouchDevice || target.classList.includes('active')) return this.selectItem(target.item);
                        
            this.list.querySelectorAll('.active').forEach(x => x.classList.remove('active'));

            target.classList.add('active');
        });

        this.addEventListener('mouseover', e => this.panel.setItem(e.target.nodeName === 'ELM-HITBOX' ? e.target.item : this.currentSlot.currentItem));


        // End

        this.appendChild(this.panel);
        this.appendChild(this.list);

        this.classList.add('tab');
        
        this.hide();
    }

    hide ()
    {
        this.style.display = 'none';
        this.list.clear();
    }

    show (slot)
    {
        this.style.display = '';
        this.currentSlot = slot;
        
        this.panel.setItem(slot.currentItem);
        this.list.set(workshop.items.filter(item => item.type === slot.type));
    }

    selectItem (item)
    {
        const previousItem = this.currentSlot.item;

        this.currentSlot.setItem(item);
        this.hide();

        if (item !== previousItem)
        {
            window.workshop.updateActiveMech();
            window.workshop.updateMechSummary();

            if (this.currentSlot.type < 6) window.workshop.updateMechDisplay();
        }
    }
});
