'use strict'


export const dom = (tag, data, children, style) =>
{
    const element = document.createElement(tag);
    data && Object.assign(element, data);
    style && Object.assign(element.style, style);
    children && children.forEach(child => element.appendChild(child));
    return element;
};

export const css = (element, style) =>
{
    Object.assign(element.style, style)
    return element
}

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

export const prefixedLogger = prefix => function (first, ...rest)
{
    console.log('%c' + prefix + ' > ' + JSON.stringify(first), ...rest);
};

export const defineCustomElement = constructor =>
{
    const kebabCase = constructor.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
    window.customElements.define('wu-' + kebabCase, constructor)
    return constructor
}

export const bound = (value, max = 100, min = 0) => Math.max(min, Math.min(max, value))

export const getImgBlob = (src, mimeType) =>
{
    const cnv = document.createElement('canvas')
    const ctx = cnv.getContext('2d')
    const img = document.createElement('img')

    return new Promise((resolve, reject) =>
    {
        img.onload = e =>
        {
            cnv.width  = e.target.naturalWidth
            cnv.height = e.target.naturalHeight
            ctx.drawImage(e.target, 0, 0)
            cnv.toBlob(blob => resolve(URL.createObjectURL(blob)), mimeType)
        }

        img.onerror = () => reject(null)

        img.src = src
    })
}

export const neq = (first, args) =>
{
    return args.every(arg => arg !== first)
}
