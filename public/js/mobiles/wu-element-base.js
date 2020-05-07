'use strict';


import { prefixedLogger } from '../utils/general-utils.js'


// Export

export const WUElementBase = class
{
    constructor ()
    {
        this.log = prefixedLogger(this.constructor.name)
    }

    addChild (child)
    {
        if (!child.element)
        {
            console.error('The following object is probably not a wuElement: ', child);
            return;
        }
        this.element.appendChild(child.element);
        return this;
    }

    addChildren (children)
    {
        for (const child of children)
        {
            if (!child.element)
            {
                console.error('The following object is probably not a wuElement: ', child);
                continue;
            }

            this.element.appendChild(child.element);
        }

        return this;
    }

    remChildren (children)
    {
        for (const child of children)
        {
            if (!child.element)
            {
                console.error('The following object is probably not a wuElement: ', child);
                continue;
            }

            this.element.removeChild(child.element);
        }

        return this;
    }

    remove ()
    {
        this.element.remove();
        return this;
    }

    hide (...args)
    {
        this.element.style.display = 'none';
        if (this.onhide) this.onhide(...args);
        return this;
    }

    show (...args)
    {
        this.element.style.display = '';
        if (this.onshow) this.onshow(...args);
        return this;
    }

    get visible ()
    {
        return !this.element.style.display;
    }
}
