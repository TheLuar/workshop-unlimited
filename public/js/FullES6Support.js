'use strict'

export const ES6Support = (() =>
{
    try
    {
        new Function('(x = 0) => x')
        return true
    }
    catch (err)
    {
        return false
    }
})()
