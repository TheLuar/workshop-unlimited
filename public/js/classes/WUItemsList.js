$.defineHTMLElement('wu-items-list', class WUItemsList extends HTMLElement
{
    constructor ()
    {
        super();

        this.blocks = [];

        for (let i = 0; i < 30; i++)
        {
            const block = new WUItemBlock();
            
            this.blocks.push(block);
            this.appendChild(block)
        }
    }

    clear ()
    {
        for (const block of this.blocks) block.hide();
    }

    set (items)
    {
        this.scroll(0, 0);

        const itemsMap = { 1: [], 2: [], 3: [] };

        for (const item of items) itemsMap[item.element].push(item);

        const sortedItems = [...itemsMap[1], ...itemsMap[2], ...itemsMap[3]];

        for (let i = 0; i < sortedItems.length; i++)
        {
            if (this.blocks[i])
            {
                this.blocks[i].show(items[i]);
                continue;
            }

            this.blocks[i] = new WUItemBlock(items[i]);
            this.appendChild(this.blocks[i]);
        }
    }
});