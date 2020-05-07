
$.defineHTMLElement('wu-stat-block', class WUStatBlock extends HTMLElement
{
    constructor (statData, value)
    {
        super();

        const hoverData = { text:statData.context };

        this.hoverData = hoverData;

        if (Array.isArray(value))
        {
            value = [...value];
            
            for (let i = 0; i < value.length; i++) if (!value[i] || value[i] === value[i - 1]) value.splice(i, 1);
        }
        
        if (typeof value === 'boolean') value = '!';

        const icon = $.dom('img', { className:'icon', hoverData, src:statData.src });
        const text = $.dom('div', { className:'text', hoverData, innerText:String(value).replace(',', '-') });
        
        this.appendChild(icon);
        this.appendChild(text);
    }
});
