$.defineHTMLElement('wu-custom-items-tab', class WUCustomItemsTab extends HTMLElement
{
    constructor ()
    {
        super();

        this.className = 'tab';
        this.currentItem = null


        this.list = new WUItemsList();
        this.panel = new WUItemDataPanel();


        const tabCreateItem = new WUCreateItemTab();
        const contPanel     = document.createElement('panel-container');
        const contBtns      = document.createElement('buttons-container');
        const contCIBtn     = document.createElement('create-item-button-container');
        const btnEditItem   = new WUButton('Edit item', './img/general/pencil.svg');
        const btnDeleteItem = new WUButton('Delete Item', './img/general/x.svg', () =>
        {
            this.panel.setItem(null);
            if (this.currentItem) window.workshop.deleteCustomItem(this.currentItem);
            this.currentItem = null;
            this.hide();
            this.show();
        });
        const btnCreateItem = new WUButton('Create New Item', './img/general/plus.svg', () =>
        {
            this.hide();
            tabCreateItem.show();
        });


        btnDeleteItem.classList.add('evil-btn');


        contBtns.appendChild(btnEditItem);
        contBtns.appendChild(btnDeleteItem);

        this.panel.appendChild(contBtns);

        contCIBtn.appendChild(btnCreateItem);

        contPanel.appendChild(this.panel);
        contPanel.appendChild(contCIBtn);

        this.appendChild(contPanel);
        this.appendChild(this.list);

        window.workshop.appendChild(tabCreateItem);


        this.addEventListener('click', e =>
        {
            if (e.target === this) this.hide();

            if (e.target.item)
            {
                this.currentItem = e.target.item;
                this.panel.setItem(e.target.item);

                const active = this.list.querySelectorAll('hitbox.active');

                for (let i = active.length; i--;) if (active[i].className.includes('active')) active[i].classList.remove('active');
                
                e.target.classList.add('active');
            }
        });

        this.hide();
    }

    hide ()
    {
        this.style.visibility = 'hidden';

        while (this.list.lastChild) this.list.lastChild.remove();
    }

    show ()
    {
        for (let i = window.workshop.customItems.length; i--;)
        {
            const item = window.workshop.customItems[i];
            const block = new WUItemBlock(item);
            block.hoverData = { item };
            block.onmouseover = () => this.panel.setItem(block.item);
            block.onmouseout  = () => this.panel.setItem(this.currentItem);
            this.list.appendChild(block);
        }

        this.style.visibility = '';
    }
});
