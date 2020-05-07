'use strict';

window.hasFullES6Support = false;

try
{
    new Function('(x = 0) => x');

    window.hasFullES6Support = true;
}
catch (err) {}

console.log('%cwindow.hasFullES6Support = ' + window.hasFullES6Support + ';', 'color: #6688FF; font-weight: bold');
