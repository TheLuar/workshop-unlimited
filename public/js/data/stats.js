'use strict'


// Export

export const weight = {
	id: 1,
	key: 'weight',
	inputs: 1,
	color: '#999999',
	buff: null,
	name: 'Weight'
}
export const health = {
	id: 2,
	key: 'health',
	inputs: 1,
	color: '#DDDDDD',
	buff: {
		mode: '+',
		amount: 350
	},
	name: 'Health Points'
}
export const eneCap = {
	id: 3,
	key: 'eneCap',
	inputs: 1,
	color: '#00AAEE',
	buff: {
		mode: '*',
		amount: 1.2
	},
	name: 'Energy Capacity'
}
export const eneReg = {
	id: 4,
	key: 'eneReg',
	inputs: 1,
	color: '#00BFBF',
	buff: {
		mode: '*',
		amount: 1.2
	},
	name: 'Energy Regeneration'
}
export const heaCap = {
	id: 5,
	key: 'heaCap',
	inputs: 1,
	color: '#FF5500',
	buff: {
		mode: '*',
		amount: 1.2
	},
	name: 'Heat Capacity'
}
export const heaCol = {
	id: 6,
	key: 'heaCol',
	inputs: 1,
	color: '#DDDDDD',
	buff: {
		mode: '*',
		amount: 1.2
	},
	name: 'Heat Cooling'
}
export const phyRes = {
	id: 7,
	key: 'phyRes',
	inputs: 1,
	color: '#FFBB33',
	buff: {
		mode: '*',
		amount: 1.4
	},
	name: 'Physical Resistance'
}
export const expRes = {
	id: 8,
	key: 'expRes',
	inputs: 1,
	color: '#FF6622',
	buff: {
		mode: '*',
		amount: 1.4
	},
	name: 'Explosive Resistance'
}
export const eleRes = {
	id: 9,
	key: 'eleRes',
	inputs: 1,
	color: '#33BBFF',
	buff: {
		mode: '*',
		amount: 1.4
	},
	name: 'Electric Resistance'
}
export const phyDmg = {
	id: 10,
	key: 'phyDmg',
	inputs: 2,
	color: '#FFBB00',
	buff: {
		mode: '*',
		amount: 1.2
	},
	name: 'Physical Damage'
}
export const phyResDmg = {
	id: 11,
	key: 'phyResDmg',
	inputs: 1,
	color: '#DDAA00',
	buff: null,
	name: 'Physical Resistance Damage'
}
export const expDmg = {
	id: 12,
	key: 'expDmg',
	inputs: 2,
	color: '#FF5500',
	buff: {
		mode: '*',
		amount: 1.2
	},
	name: 'Explosive Damage'
}
export const heaDmg = {
	id: 13,
	key: 'heaDmg',
	inputs: 1,
	color: '#FF5500',
	buff: {
		mode: '*',
		amount: 1.2
	},
	name: 'Heat Damage'
}
export const heaCapDmg = {
	id: 14,
	key: 'heaCapDmg',
	inputs: 1,
	color: '#994499',
	buff: null,
	name: 'Heat Capacity Damage'
}
export const heaColDmg = {
	id: 15,
	key: 'heaColDmg',
	inputs: 1,
	color: '#994499',
	buff: null,
	name: 'Heat Cooling Damage'
}
export const expResDmg = {
	id: 16,
	key: 'expResDmg',
	inputs: 1,
	color: '#DD4400',
	buff: null,
	name: 'Explosive Resistance Damage'
}
export const eleDmg = {
	id: 17,
	key: 'eleDmg',
	inputs: 2,
	color: '#00BBFF',
	buff: {
		mode: '*',
		amount: 1.2
	},
	name: 'Electric Damage'
}
export const eneDmg = {
	id: 18,
	key: 'eneDmg',
	inputs: 1,
	color: '#00BBFF',
	buff: {
		mode: '*',
		amount: 1.2
	},
	name: 'Energy Damage'
}
export const eneCapDmg = {
	id: 19,
	key: 'eneCapDmg',
	inputs: 1,
	color: '#994499',
	buff: null,
	name: 'Energy Capacity Damage'
}
export const eneRegDmg = {
	id: 20,
	key: 'eneRegDmg',
	inputs: 1,
	color: '#994499',
	buff: null,
	name: 'Energy Regeneration Damage'
}
export const eleResDmg = {
	id: 21,
	key: 'eleResDmg',
	inputs: 1,
	color: '#00AADD',
	buff: null,
	name: 'Electric Resistance Damage'
}
export const range = {
	id: 22,
	key: 'range',
	inputs: 2,
	color: '#DDDDDD',
	buff: null,
	name: 'Range'
}
export const push = {
	id: 23,
	key: 'push',
	inputs: 1,
	color: '#DDDDDD',
	buff: null,
	name: 'Knockback'
}
export const pull = {
	id: 24,
	key: 'pull',
	inputs: 1,
	color: '#DDDDDD',
	buff: null,
	name: 'Pull'
}
export const recoil = {
	id: 25,
	key: 'recoil',
	inputs: 1,
	color: '#DDDDDD',
	buff: null,
	name: 'Recoil'
}
export const retreat = {
	id: 26,
	key: 'retreat',
	inputs: 1,
	color: '#DDDDDD',
	buff: null,
	name: 'Retreat'
}
export const advance = {
	id: 27,
	key: 'advance',
	inputs: 1,
	color: '#DDDDDD',
	buff: null,
	name: 'Advance'
}
export const walk = {
	id: 28,
	key: 'walk',
	inputs: 1,
	color: '#DDDDDD',
	buff: null,
	name: 'Walking Distance'
}
export const jump = {
	id: 29,
	key: 'jump',
	inputs: 1,
	color: '#DDDDDD',
	buff: null,
	name: 'Jumping Distance'
}
export const uses = {
	id: 30,
	key: 'uses',
	inputs: 1,
	color: '#22FF22',
	buff: null,
	name: 'Max Uses'
}
export const backfire = {
	id: 31,
	key: 'backfire',
	inputs: 1,
	color: '#AA0000',
	buff: {
		mode: '*',
		amount: 0.8
	},
	name: 'Backfire'
}
export const heaCost = {
	id: 32,
	key: 'heaCost',
	inputs: 1,
	color: '#882200',
	buff: null,
	name: 'Heat Generation'
}
export const eneCost = {
	id: 33,
	key: 'eneCost',
	inputs: 1,
	color: '#005588',
	buff: null,
	name: 'Energy Consumption'
}
