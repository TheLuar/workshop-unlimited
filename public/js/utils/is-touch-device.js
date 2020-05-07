(function ()
{
    var clicked = false, moved = false;

    function click () { clicked = true }
    function move  () { moved = true; window.isTouchDevice = clicked }
    function down  () { window.isTouchDevice = moved }

    var onInputTypeDetected = setInterval(function ()
    {
        if (window.isTouchDevice !== undefined)
        {
            clearInterval(onInputTypeDetected);

            window.removeEventListener('pointerup', click, false);
            window.removeEventListener('mousemove', move, false);
            window.removeEventListener('mousedown', down, false);

            console.log('%cwindow.isTouchDevice = ' + window.isTouchDevice + ';', 'color: #6688FF; font-weight: bold');
        }
    }, 10);

    window.addEventListener('pointerup', click, false);
    window.addEventListener('mousemove', move, false);
    window.addEventListener('mousedown', down, false);
})();
