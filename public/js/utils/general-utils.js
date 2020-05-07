'use strict'


export const dom = (tag, data, children, style) =>
{
    const element = document.createElement(tag);

    data && Object.assign(element, data);

    style && Object.assign(element.style, style);

    children && children.forEach(child => element.appendChild(child));

    return element;
};

export const div = (className, data, children, style) =>
{
    const element = document.createElement('div');

    Object.assign(element, { className }, data);

    Object.assign(element.style, style);

    if (children)
    {
        for (const child of children)
        {
            if (!(child instanceof HTMLElement))
            {
                console.error('Not a node:', child)
                break
            }
            element.appendChild(child);
        }
    }

    return element;
};

export const prefixedLogger = (prefix) => function (first, ...rest)
{
    console.log('%c' + prefix + ' > ' + JSON.stringify(first), ...rest);
};
