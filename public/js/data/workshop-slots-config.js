'use strict';


const configs = [
    [1, 'torso'],
    [2, 'legs'],
    [3, 'side-l'],
    [3, 'side-r'],
    [3, 'side-l'],
    [3, 'side-r'],
    [4, 'top-l'],
    [4, 'top-r'],
    [5, 'drone'],
    [6, 'charge'],
    [7, 'tele'],
    [8, 'hook'],
    [9, 'mod'],
    [9, 'mod'],
    [9, 'mod'],
    [9, 'mod'],
    [9, 'mod'],
    [9, 'mod'],
    [9, 'mod'],
    [9, 'mod'],
];

const count = configs.length;

const get = (index) =>
{
    const [type, iconName] = configs[index];
    return { type, iconName };
}


export const workshopSlotConfigs = { get, count };
