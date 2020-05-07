'use strict';

(function ()
{
    window.$ = {

    dom: (tag, data, style) =>
    {
        const elem = document.createElement(tag);

        if (data)
        {
            const props = Object.keys(data);
            for (let i = 0; i < props.length; i++) elem[props[i]] = data[props[i]];
        }

        return style ? this.css(elem, style) : elem;
    },

    css: function (elem, style)
    {
        const props = Object.keys(style);

        for (let i = 0; i < props.length; i++) elem.style[props[i]] = style[props[i]];

        return elem;
    },

    // Check if first argument equals any other argument
    eq: function () {
        for (let i = 1; i < arguments.length; i++) if (arguments[0] === arguments[i]) return true;
        return false;
    },

    // Set data to Local Storage
    setLS: (key, data) =>
    {
        localStorage.setItem(key, JSON.stringify(data));
        return data;
    },

    // Get data from Local Storage
    getLS: key => JSON.parse(localStorage.getItem(key)),

    // Get Blob
    getBlob: (url, callback) => fetch(url).then(response => response.blob()).then(blob => callback(URL.createObjectURL(blob))).catch(callback),

    // Get Base64
    toDataURL: function (url, callback)
    {
        fetch(url)
        .then(res => res.blob())
        .then(blob => new Promise((resolve, reject) =>
        {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        }))
        .then(b64 => { callback(b64) })
    },

    Array: {
        every: function (array, f)
        {
            let i = 0;
            
            while (i < array.length)
            {
                if (!f(array[i])) return false;
                i++;
            }
            
            return true;
        },
        map: (array, f) =>
        {
            const final = [];
            for (let i = 0; i < array.length; i++) final.push(f(array[i]));
            return final;
        },
        reverse: array =>
        {
            const final = [];
            for (let i = array.length; i--;) final.push(array[i]);
            return final;
        },
        filter: function (array, f)
        {
            const final = [];

            for (let i = 0; i < array.length; i++) f(array[i]) && final.push(array[i]);

            return final;
        },
    },

    defineHTMLElement: function (a, b)
    {
        window[b.name] = b;
        window.customElements.define(a, b);
    },

    testImg: (src, callback) =>
    {
        const img = new Image();
        const test = () =>
        {
            if (img.naturalWidth && img.naturalHeight)
            {
                clearInterval(listener)
                callback(img);
            }
        };
        const listener = setInterval(test, 100);
        img.onerror = () =>
        {
            clearInterval(listener);
            callback(null);
        }
        img.src = src;
    },

    Math: {
        round: function (x)
        {
            const
                k = String(x).split('.'),
                a = Number(k[0]),
                b = Number(k[1]),
                c = Number('5' + '0'.repeat(b.length - 1));
            
            return b > c ? a + 1 : a;
        },
    },
    String: {
        repeat: function (str, times)
        {
            if (times < 1) return '';

            let final = '';

            while (times--) final += str;

            return final;
        },
    },

    appendAndRef: function (parent, name, child)
    {
        parent[name] = child;
        parent.appendChild(child);
    },

    /*

    // Check if the object is DOM :boolean
    isDOM: o => o && o instanceof Element || o instanceof Node,

    query: s => document.querySelector(s),
    queryAll: s => document.querySelectorAll(s),

    // Append child at specific index :void
    appendChildAt: (parent, child, index) => parent.insertBefore(child, parent.children[index]),

    // Get request :object
    getJSON: (src, callback) => fetch(src).then(r => r.json()).then(callback),

    getBlob: function getBlob (src, callback)
    {
        fetch(src)
            .then(function (response) { return response.blob() })
            .then(function (blob) { callback(URL.createObjectURL(blob)) })
            .catch(function () { callback() });
    },

    // Get Element boundries :object
    bound: elm => elm.getBoundingClientRect(),

    // Capitalize first leter of string :string
    capital: str => typeof str !== 'string' ? '' : str.charAt(0).toUpperCase() + str.slice(1),

    // Remove all childs from element
    empty: foo =>
    {
        let el;
        if (typeof foo === 'string') el = $.query(foo);
        else if ($.isDOM(foo)) el = foo;
        else return;
        while (el.lastChild) el.removeChild(el.lastChild);
        return el;
    },

    // Set element style
    css: (el, style) =>
    {
        if (!$.isDOM(el)) return;
        for (const key of Object.entries(style)) el.style[key[0]] = key[1];
    },

    easyEase: (obj, prop, value) =>
    {
        const thisEaseID = String(Math.random());

        obj._easeID = thisEaseID;
        obj._easing = true;
        obj[prop]   = Number(obj[prop]) || 0;

        const poll = setInterval(() =>
        {
            if (!obj._easing)
            {
                clearInterval(poll);
                delete obj._easing;
                delete obj._easeID;
            }
        }, 10);

        let need = value - Number(obj[prop]);
        let val  = Number(obj[prop]);

        const roll = () => setTimeout(f =>
        {
            const am = need * 0.25;
            need -= am;
            val = val + am;

            obj[prop] = Math.round(val);

            if (Math.round(need))
            {
                if (obj._easeID === thisEaseID) roll();
            }
            else obj._easing = false;
        }, 50);
        roll();
    },

    // Copy String to clipboard
    toClipboard: str => {
        const _ = $.DOM('textarea', null, { value: String(str) });
        document.body.appendChild(_);
        _.select();
        document.execCommand('copy');
        _.remove();
    },

    */
}
})();
