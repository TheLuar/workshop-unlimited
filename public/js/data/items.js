'use strict';

/* This is supposed to be a JSON file, however, as awesome as
 * it is, ESModules doesn't allow to import JSON directly.
 */

export const Interceptor = {
	id: '1',
	name: 'Interceptor',
	type: 1,
	element: 1,
	tiers: [0, 5],
	stats: {
		weight: 309,
		health: 860,
		eneCap: 193,
		eneReg: 56,
		heaCap: 265,
		heaCol: 80,
		phyRes: 16,
		expRes: 22,
		eleRes: 22
	},
	attachment: {
		leg1: { x: 58, y: 189 },
		leg2: { x: 134, y: 189 },
		side1: { x: 64, y: 141 },
		side2: { x: 133, y: 141 },
		side3: { x: 60, y: 89 },
		side4: { x: 137, y: 89 },
		top1: { x: 59, y: 44 },
		top2: { x: 122, y: 44 }
	}
}
export const Archimonde = {
	id: '2',
	name: 'Archimonde',
	svg: true,
	type: 1,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 363,
		health: 1090,
		eneCap: 265,
		eneReg: 76,
		heaCap: 265,
		heaCol: 76,
		phyRes: 22,
		expRes: 22,
		eleRes: 22
	},
	attachment: {
		leg1: { x: 53, y: 214 },
		leg2: { x: 116, y: 214 },
		side1: { x: 49, y: 176 },
		side2: { x: 116, y: 176 },
		side3: { x: 45, y: 128 },
		side4: { x: 120, y: 128 },
		top1: { x: 41, y: 83 },
		top2: { x: 101, y: 83 }
	}
}
export const Avenger = {
	id: '3',
	name: 'Avenger',
	svg: true,
	type: 1,
	element: 1,
	tiers: [2, 5],
	stats: {
		weight: 350,
		health: 1271,
		eneCap: 193,
		eneReg: 64,
		heaCap: 145,
		heaCol: 48,
		phyRes: 16,
		expRes: 22,
		eleRes: 22
	},
	attachment: {
		leg1: { x: 60, y: 168 },
		leg2: { x: 123, y: 168 },
		side1: { x: 65, y: 128 },
		side2: { x: 145, y: 128 },
		side3: { x: 58, y: 92 },
		side4: { x: 146, y: 92 },
		top1: { x: 57, y: 28 },
		top2: { x: 120, y: 28 }
	}
}
export const HollowSpectralArmor = {
	id: '4',
	name: 'Hollow Spectral Armor',
	type: 1,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 370,
		health: 1589,
		eneCap: 241,
		eneReg: 80,
		heaCap: 241,
		heaCol: 80
	},
	attachment: {
		leg1: { x: 63, y: 189 },
		leg2: { x: 125, y: 189 },
		side1: { x: 60, y: 148 },
		side2: { x: 140, y: 148 },
		side3: { x: 54, y: 80 },
		side4: { x: 142, y: 80 },
		top1: { x: 53, y: 24 },
		top2: { x: 107, y: 24 }
	}
}
export const EnergyFreeArmor = {
	id: '5',
	name: 'Energy Free Armor',
	svg: false,
	type: 1,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 335,
		health: 1343,
		eneCap: 25,
		eneReg: 8,
		heaCap: 223,
		heaCol: 80,
		phyRes: 24,
		expRes: 24,
		eleRes: 24
	},
	attachment: {
		leg1: { x: 83, y: 175 },
		leg2: { x: 145, y: 175 },
		side1: { x: 70, y: 155 },
		side2: { x: 150, y: 155 },
		side3: { x: 70, y: 105 },
		side4: { x: 150, y: 105 },
		top1: { x: 63, y: 24 },
		top2: { x: 147, y: 24 }
	}
}
export const BatteryArmor = {
	id: '6',
	name: 'Battery Armor',
	width: 222,
	height: 226,
	type: 1,
	element: 1,
	tiers: [2, 5],
	stats: {
		weight: 360,
		health: 1239,
		eneCap: 361,
		eneReg: 24,
		heaCap: 334,
		heaCol: 24,
		phyRes: 14,
		expRes: 14,
		eleRes: 14
	},
	attachment: {
		leg1:  { x: 71,  y: 187 },
		leg2:  { x: 125, y: 187 },
		side1: { x: 57,  y: 146 },
		side2: { x: 145, y: 146 },
		side3: { x: 66,  y: 83 },
		side4: { x: 132, y: 83 },
		top1:  { x: 50,  y: 16 },
		top2:  { x: 97,  y: 16 }
	}
}
export const IronBoots = {
	id: '7',
	name: 'Iron Boots',
	type: 2,
	element: 1,
	tiers: [0, 5],
	stats: {
		weight: 138,
		health: 472,
		phyDmg: [163, 213],
		push: 1,
		range: [1, 0],
		walk: 1,
		jump: 2
	},
	attachment: { x: 60, y: 13 }
}
export const RollingBeasts = {
	id: '8',
	name: 'Rolling Beasts',
	svg: true,
	type: 2,
	element: 1,
	attachment: { x: 111, y: 22 },
	tiers: [3, 5],
	stats: {
		weight: 134,
		health: 451,
		phyDmg: [160, 242],
		push: 1,
		range: [1, 0],
		walk: 3
	}
}
export const GraveDiggers = {
	id: '9',
	name: 'Grave Diggers',
	svg: true,
	type: 2,
	element: 1,
	attachment: { x: 57, y: 22 },
	tiers: [1, 5],
	stats: {
		weight: 123,
		health: 287,
		phyDmg: [223, 285],
		push: 2,
		range: [1, 0],
		walk: 1,
		jump: 2
	}
}
export const TheClaw = {
	id: '10',
	name: 'The Claw',
	svg: true,
	type: 2,
	element: 1,
	attachment: { x: 116, y: 24 },
	tiers: [3, 5],
	stats: {
		weight: 150,
		health: 860,
		phyDmg: [79, 111],
		range: [1, 0]
	}
}
export const BackBreaker = {
	id: '11',
	name: 'BackBreaker',
	type: 3,
	element: 1,
	attachment: { x: 34, y: 55 },
	tiers: [2, 5],
	stats: {
		weight: 44,
		phyDmg: [228, 408],
		heaColDmg: 8,
		eneRegDmg: 8,
		push: 1,
		range: [1, 0],
		eneCost: 31,
		heaCost: 31
	}
}
export const WarHammer = {
	id: '12',
	name: 'War Hammer',
	type: 3,
	element: 1,
	attachment: { x: 33, y: 63 },
	tiers: [2, 5],
	stats: {
		weight: 58,
		phyDmg: [254, 427],
		heaCapDmg: 24,
		eneCapDmg: 24,
		push: 3,
		range: [1, 0],
		eneCost: 31,
		heaCost: 31
	}
}
export const SeraphBlade = {
	id: '13',
	name: 'SeraphBlade',
	type: 3,
	element: 1,
	attachment: { x: 38, y: 71 },
	tiers: [3, 5],
	stats: {
		weight: 49,
		phyDmg: [234, 376],
		phyResDmg: 12,
		range: [1, 2],
		eneCost: 13,
		heaCost: 50
	}
}
export const Annihilation = {
	id: '14',
	name: 'Annihilation',
	type: 3,
	element: 1,
	attachment: { x: 42, y: 45 },
	tiers: [2, 5],
	stats: {
		weight: 65,
		phyDmg: [203, 341],
		phyResDmg: 15,
		range: [1, 2],
		uses: 3
	}
}
export const Mercy = {
	id: '15',
	name: 'Mercy',
	type: 3,
	element: 1,
	attachment: { x: 44, y: 26 },
	tiers: [3, 5],
	stats: {
		weight: 84,
		phyDmg: [197, 440],
		phyResDmg: 10,
		push: 1,
		range: [1, 2],
		uses: 3
	}
}
export const ArmorAnnihilator = {
	id: '16',
	name: 'Armor Annihilator',
	type: 3,
	element: 1,
	attachment: { x: 65, y: 42 },
	tiers: [3, 5],
	stats: {
		weight: 20,
		phyDmg: [39, 52],
		phyResDmg: 50,
		range: [2, 4],
		uses: 1
	}
}
export const AdvancedRepulser = {
	id: '17',
	name: 'Advanced Repulser',
	type: 3,
	element: 1,
	attachment: { x: 60, y: 57 },
	tiers: [3, 5],
	stats: {
		weight: 18,
		phyDmg: [72, 95],
		push: 4,
		range: [2, 4],
		heaCost: 62,
		uses: 2
	}
}
export const Purifier = {
	id: '18',
	name: 'Purifier',
	type: 3,
	element: 1,
	attachment: { x: 55, y: 41 },
	tiers: [3, 5],
	stats: {
		weight: 25,
		phyDmg: [184, 241],
		range: [2, 4],
		uses: 2
	}
}
export const NightFall = {
	id: '19',
	name: 'NightFall',
	type: 3,
	element: 1,
	attachment: { x: 52, y: 36 },
	tiers: [2, 5],
	stats: {
		weight: 49,
		phyDmg: [237, 355],
		phyResDmg: 11,
		range: [2, 4],
		uses: 3,
		eneCost: 31,
		heaCost: 31
	}
}
export const BloodWeep = {
	id: '20',
	name: 'BloodWeep',
	type: 3,
	element: 1,
	attachment: { x: 38, y: 38 },
	tiers: [3, 5],
	stats: {
		weight: 34,
		phyDmg: [147, 209],
		phyResDmg: 30,
		range: [2, 4],
		uses: 3,
		eneCost: 31,
		heaCost: 31
	}
}
export const TerrorCry = {
	id: '21',
	name: 'Terror Cry',
	type: 3,
	element: 1,
	attachment: { x: 36, y: 33 },
	tiers: [2, 5],
	stats: {
		weight: 46,
		phyDmg: [241, 358],
		push: 1,
		range: [2, 4],
		uses: 3,
		eneCost: 25,
		heaCost: 25
	}
}
export const Sweetie = {
	id: '22',
	name: 'Sweetie',
	type: 3,
	element: 1,
	attachment: { x: 49, y: 45 },
	tiers: [3, 5],
	stats: {
		weight: 42,
		phyDmg: [169, 256],
		phyResDmg: 10,
		range: [3, 6],
		uses: 3,
		heaCost: 31
	}
}
export const RockRecoiler = {
	id: '23',
	name: 'Rock Recoiler',
	type: 3,
	element: 1,
	tiers: [2, 5],
	stats: {
		weight: 65,
		phyDmg: [212, 423],
		phyResDmg: 10,
		push: 1,
		recoil: 1,
		range: [1, 2],
		uses: 3,
		eneCost: 25,
		heaCost: 38
	},
	attachment: { x: 60, y: 35 }
}
export const EjectionBlast = {
	id: '24',
	name: 'Ejection Blast',
	svg: true,
	type: 3,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 34,
		phyDmg: [228, 408],
		phyResDmg: 5,
		push: 1,
		retreat: 2,
		range: [3, 6],
		uses: 2,
		eneCost: 31,
		heaCost: 31
	},				
	attachment: { x: 41, y: 39 }
}
export const SacrificeCannon = {
	id: '25',
	name: 'Sacrifice Cannon',
	svg: true,
	type: 3,
	element: 1,
	tiers: [2, 5],
	stats: {
		weight: 24,
		phyDmg: [209, 520],
		phyResDmg: 12,
		range: [2, 4],
		push: 1,
		uses: 1,
		backfire: 123,
		eneCost: 31,
		heaCost: 31
	},
	attachment: { x: 47, y: 47 }
}
export const PerimeterProtector = {
	id: '26',
	name: 'Perimeter Protector',
	svg: true,
	type: 3,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 31,
		phyDmg: [152, 273],
		phyResDmg: 5,
		range: [1, 2],
		retreat: 6,
		uses: 2,
		heaCost: 38
	},
	attachment: { x: 53, y: 26 }
}
export const DarkEagle = {
	id: '27',
	name: 'Dark Eagle',
	svg: true,
	type: 3,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 60,
		phyDmg: [181, 456],
		phyResDmg: 10,
		range: [2, 4],
		push: 1,
		recoil: 1,
		uses: 3,
		eneCost: 25,
		heaCost: 38
	},
	attachment: { x: 64, y: 32 }
}
export const NightEagle = {
	id: '28',
	name: 'Night Eagle',
	type: 4,
	element: 1,
	tiers: [2, 5],
	stats: {
		weight: 46,
		phyDmg: [209, 336],
		pull: 1,
		range: [3, 6],
		uses: 3,
		eneCost: 25,
		heaCost: 25
	},
	attachment: { x: 42, y: 50 }
}
export const SpartanCarnage = {
	id: '29',
	name: 'Spartan Carnage',
	type: 4,
	element: 1,
	attachment: { x: 50, y: 44 },
	tiers: [3, 5],
	stats: {
		weight: 51,
		phyDmg: [226, 387],
		phyResDmg: 15,
		range: [3, 6],
		uses: 3,
		eneCost: 31,
		heaCost: 31
	}
}
export const RecklessBeam = {
	id: '30',
	name: 'Reckless Beam',
	type: 4,
	element: 1,
	attachment: { x: 48, y: 56 },
	tiers: [2, 5],
	stats: {
		weight: 35,
		phyDmg: [235, 355],
		range: [4, 8],
		eneCost: 25,
		heaCost: 25
	}
}
export const DesertFury = {
	id: '31',
	name: 'Desert Fury',
	type: 4,
	element: 1,
	attachment: { x: 37, y: 34 },
	tiers: [3, 5],
	stats: {
		weight: 29,
		phyDmg: [154, 224],
		phyResDmg: 23,
		range: [4, 8],
		uses: 2,
		eneCost: 16,
		heaCost: 16
	}
}
export const MightyCannon = {
	id: '32',
	name: 'Mighty Cannon',
	svg: true,
	type: 4,
	element: 1,
	attachment: { x: 56, y: 35 },
	tiers: [3, 5],
	stats: {
		weight: 55,
		phyDmg: [239, 408],
		pull: 1,
		range: [4, 8],
		eneCost: 38,
		heaCost: 38
	}
}
export const Falcon = {
	id: '33',
	name: 'Falcon',
	type: 4,
	element: 1,
	attachment: { x: 60, y: 52 },
	tiers: [3, 5],
	stats: {
		weight: 19,
		phyDmg: [596, 997],
		range: [8, 0],
		uses: 1,
		eneCost: 22,
		heaCost: 22
	}
}
export const FranticBrute = {
	id: '34',
	name: 'Frantic Brute',
	svg: true,
	type: 4,
	element: 1,
	tiers: [2, 5],
	stats: {
		weight: 50,
		phyDmg: [69, 632],
		range: [3, 6],
		uses: 2,
		eneCost: 10,
		heaCost: 50
	},
	attachment: { x: 44, y: 27 }
}
export const DistanceShredder = {
	id: '35',
	name: 'Distance Shredder',
	type: 4,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 42,
		phyDmg: [228, 408],
		phyResDmg: 5,
		push: 1,
		advance: 3,
		range: [4, 8],
		uses: 2,
		heaCost: 100
	},
	attachment: { x: 54, y: 38 }
}
export const Void = {
	id: '37',
	name: 'Void',
	svg: true,
	type: 5,
	element: 1,
	tiers: [2, 5],
	stats: {
		weight: 29,
		phyDmg: [143, 187],
		phyResDmg: 6,
		eneCost: 16,
		heaCost: 16
	}
}
export const HurlBat = {
	id: '38',
	name: 'HurlBat',
	svg: true,
	type: 5,
	element: 1,
	tiers: [2, 5],
	stats: {
		weight: 28,
		phyDmg: [135, 196],
		heaCapDmg: 6,
		eneCapDmg: 6,
		eneCost: 16,
		heaCost: 16
	}
}
export const Greedy = {
	id: '39',
	name: 'Greedy',
	svg: true,
	type: 5,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 20,
		phyDmg: [72, 117],
		phyResDmg: 10,
		eneCost: 16,
		heaCost: 16
	}
}
export const DustMaker = {
	id: '40',
	name: 'DustMaker',
	svg: true,
	type: 5,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 29,
		phyDmg: [120, 213],
		heaColDmg: 4,
		eneRegDmg: 4,
		eneCost: 16,
		heaCost: 16
	}
}
export const Backstabber = {
	id: '41',
	name: 'Backstabber',
	svg: true,
	type: 5,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 51,
		phyDmg: [163, 263],
		pull: 1,
		eneCost: 16,
		heaCost: 16
	}
}
export const Tonto = {
	id: '42',
	name: 'Tonto',
	type: 5,
	element: 1,
	tiers: [2, 5],
	stats: {
		weight: 40,
		phyDmg: [184, 336],
		phyResDmg: 9,
		range: [2, 4],
		eneCost: 25,
		heaCost: 25
	}
}
export const SolarTorch = {
	id: '43',
	name: 'Solar Torch',
	type: 5,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 40,
		phyDmg: [193, 348],
		phyResDmg: 9,
		range: [3, 6],
		eneCost: 25,
		heaCost: 25
	}
}
export const ChargeEngine = {
	id: '44',
	name: 'Charge Engine',
	type: 6,
	element: 1,
	tiers: [2, 5],
	stats: {
		weight: 20,
		phyDmg: [132, 174],
		uses: 1
	}
}
export const PlatinumGrapplingHook = {
	id: '45',
	name: 'Platinum Grappling Hook',
	type: 8,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 17,
		phyDmg: [143, 187],
		uses: 1
	}
}
export const PlatinumPlating = {
	id: '46',
	name: 'Platinum Plating',
	type: 9,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 40,
		health: 315
	}
}
export const IronPlating = {
	id: '47',
	name: 'Iron Plating',
	type: 9,
	element: 1,
	tiers: [0, 1],
	stats: {
		weight: 40,
		health: 145
	}
}
export const MightyProtector = {
	id: '48',
	name: 'Mighty Protector',
	type: 9,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 28,
		phyRes: 59
	}
}
export const PhysicalProtector = {
	id: '49',
	name: 'Physical Protector',
	type: 9,
	element: 1,
	tiers: [0, 1],
	stats: {
		weight: 28,
		phyRes: 24
	}
}
export const MaximumProtector = {
	id: '50',
	name: 'Maximum Protector',
	type: 9,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 51,
		phyRes: 39,
		expRes: 39,
		eleRes: 39
	}
}
export const SaviorResistance = {
	id: '51',
	name: 'Savior Resistance',
	type: 9,
	element: 1,
	tiers: [0, 5],
	stats: {
		weight: 51,
		phyRes: 16,
		expRes: 16,
		eleRes: 16
	}
}
export const Nightmare = {
	id: '52',
	name: 'Nightmare',
	type: 1,
	element: 2,
	tiers: [0, 5],
	stats: {
		weight: 315,
		health: 879,
		eneCap: 193,
		eneReg: 64,
		heaCap: 290,
		heaCol: 96,
		phyRes: 22,
		expRes: 16,
		eleRes: 22
	},
	attachment: {
		leg1: { x: 58, y: 189 },
		leg2: { x: 133, y: 189 },
		side1: { x: 64, y: 141 },
		side2: { x: 133, y: 141 },
		side3: { x: 60, y: 89 },
		side4: { x: 137, y: 89 },
		top1: { x: 59, y: 44 },
		top2: { x: 122, y: 44 }
	}
}
export const Brutality = {
	id: '53',
	name: 'Brutality',
	svg: true,
	type: 1,
	element: 2,
	tiers: [2, 5],
	stats: {
		weight: 341,
		health: 1033,
		eneCap: 217,
		eneReg: 64,
		heaCap: 290,
		heaCol: 88,
		phyRes: 22,
		expRes: 16,
		eleRes: 22
	},
	attachment: {
		leg1: { x: 108, y: 216 },
		leg2: { x: 182, y: 216 },
		side1: { x: 106, y: 176 },
		side2: { x: 203, y: 176 },
		side3: { x: 101, y: 128 },
		side4: { x: 210, y: 128 },
		top1: { x: 110, y: 48 },
		top2: { x: 184, y: 48 }
	}
}
export const Windigo = {
	id: '54',
	name: 'Windigo',
	svg: true,
	type: 1,
	element: 2,
	tiers: [2, 5],
	stats: {
		weight: 345,
		health: 982,
		eneCap: 217,
		eneReg: 72,
		heaCap: 301,
		heaCol: 112,
		phyRes: 22,
		expRes: 16,
		eleRes: 22
	},
	attachment: {
		leg1: { x: 76, y: 199 },
		leg2: { x: 167, y: 199 },
		side1: { x: 91, y: 156 },
		side2: { x: 219, y: 156 },
		side3: { x: 84, y: 112 },
		side4: { x: 221, y: 112 },
		top1: { x: 77, y: 64 },
		top2: { x: 189, y: 64 }
	}
}
export const Zarkares = {
	id: '55',
	name: 'Zarkares',
	svg: true,
	type: 1,
	element: 2,
	tiers: [2, 5],
	stats: {
		weight: 362,
		health: 1136,
		eneCap: 193,
		eneReg: 64,
		heaCap: 312,
		heaCol: 112,
		phyRes: 16,
		expRes: 24,
		eleRes: 16
	},
	attachment: {
		leg1: { x: 65, y: 182 },
		leg2: { x: 129, y: 182 },
		side1: { x: 75, y: 143 },
		side2: { x: 145, y: 143 },
		side3: { x: 71, y: 98 },
		side4: { x: 151, y: 98 },
		top1: { x: 66, y: 44 },
		top2: { x: 128, y: 44 }
	}
}
export const MoltenPlatinumVest = {
	id: '56',
	name: 'Molten Platinum Vest',
	svg: true,
	type: 1,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 346,
		health: 982,
		eneCap: 193,
		eneReg: 64,
		heaCap: 267,
		heaCol: 96,
		phyRes: 44,
		expRes: 16,
		eleRes: 22
	},
	attachment: {
		leg1: { x: 63, y: 189 },
		leg2: { x: 125, y: 189 },
		side1: { x: 60, y: 148 },
		side2: { x: 140, y: 148 },
		side3: { x: 54, y: 80 },
		side4: { x: 142, y: 80 },
		top1: { x: 53, y: 24 },
		top2: { x: 107, y: 24 }
	}
}
export const Sabretooth = {
	id: '57',
	name: 'Sabretooth',
	svg: true,
	type: 1,
	element: 2,
	tiers: [4, 5],
	stats: {
		weight: 362,
		health: 1136,
		eneCap: 193,
		eneReg: 64,
		heaCap: 312,
		heaCol: 112,
		phyRes: 16,
		expRes: 24,
		eleRes: 16
	},
	attachment: {
		leg1: { x: 102, y: 218 },
		leg2: { x: 164, y: 218 },
		side1: { x: 101, y: 164 },
		side2: { x: 176, y: 164 },
		side3: { x: 94, y: 117 },
		side4: { x: 182, y: 117 },
		top1: { x: 103, y: 42 },
		top2: { x: 178, y: 42 }
	}
}
export const FracturedHeatArmor = {
	id: '58',
	name: 'Fractured Heat Armor',
	svg: true,
	width: 210,
	height: 197,
	type: 1,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 370,
		health: 1664,
		eneCap: 193,
		eneReg: 64,
		heaCap: 267,
		heaCol: 96
	},
	attachment: {
		leg1: { x: 63, y: 189 },
		leg2: { x: 125, y: 189 },
		side1: { x: 60, y: 148 },
		side2: { x: 140, y: 148 },
		side3: { x: 54, y: 80 },
		side4: { x: 142, y: 80 },
		top1: { x: 53, y: 24 },
		top2: { x: 107, y: 24 }
	}
}
export const FlamingBatteryArmor = {
	id: '59',
	name: 'Flaming Battery Armor',
	width: 222,
	height: 226,
	type: 1,
	element: 2,
	tiers: [2, 5],
	stats: {
		weight: 346,
		health: 1136,
		eneCap: 313,
		eneReg: 24,
		heaCap: 401,
		heaCol: 24,
		phyRes: 14,
		expRes: 14,
		eleRes: 14
	},
	attachment: {
		leg1:  { x: 71,  y: 187 },
		leg2:  { x: 125, y: 187 },
		side1: { x: 57,  y: 146 },
		side2: { x: 145, y: 146 },
		side3: { x: 66,  y: 83 },
		side4: { x: 132, y: 83 },
		top1:  { x: 50,  y: 16 },
		top2:  { x: 97,  y: 16 }
	}
}
export const ScorchingFeet = {
	id: '60',
	name: 'Scorching Feet',
	svg: true,
	type: 2,
	element: 2,
	attachment: { x: 60, y: 13 },
	tiers: [0, 5],
	stats: {
		weight: 120,
		health: 413,
		expDmg: [143, 187],
		heaDmg: 36,
		push: 1,
		range: [1, 0],
		walk: 1,
		jump: 2
	}
}
export const DevouringPaws = {
	id: '61',
	name: 'Devouring Paws',
	svg: true,
	type: 2,
	element: 2,
	attachment: { x: 62, y: 22 },
	tiers: [2, 5],
	stats: {
		weight: 119,
		health: 394,
		expDmg: [140, 220],
		heaDmg: 44,
		push: 1,
		range: [1, 0],
		walk: 1,
		jump: 2
	}
}
export const DynamiteBoots = {
	id: '62',
	name: 'Dynamite Boots',
	svg: true,
	type: 2,
	element: 2,
	attachment: { x: 52, y: 19 },
	tiers: [2, 5],
	stats: {
		weight: 136,
		health: 413,
		expDmg: [133, 224],
		heaDmg: 29,
		push: 2,
		range: [1, 0],
		walk: 1,
		jump: 2
	}
}
export const TerrorBlade = {
	id: '63',
	name: 'TerrorBlade',
	type: 3,
	element: 2,
	attachment: { x: 34, y: 55 },
	tiers: [3, 5],
	stats: {
		weight: 52,
		expDmg: [244, 319],
		heaDmg: 106,
		heaCapDmg: 51,
		push: 1,
		range: [1, 0],
		eneCost: 13,
		heaCost: 50
	}
}
export const FlamingHammer = {
	id: '64',
	name: 'Flaming Hammer',
	type: 3,
	element: 2,
	attachment: { x: 33, y: 63 },
	tiers: [2, 5],
	stats: {
		weight: 60,
		expDmg: [229, 384],
		heaDmg: 86,
		heaColDmg: 20,
		push: 3,
		range: [1, 0],
		eneCost: 13,
		heaCost: 50
	}
}
export const HeronMark = {
	id: '65',
	name: 'HeronMark',
	type: 3,
	element: 2,
	attachment: { x: 38, y: 45 },
	tiers: [3, 5],
	stats: {
		weight: 43,
		expDmg: [193, 311],
		heaDmg: 78,
		expResDmg: 9,
		range: [1, 2],
		eneCost: 13,
		heaCost: 50
	}
}
export const ChaosBringer = {
	id: '66',
	name: 'Chaos Bringer',
	type: 3,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 49,
		expDmg: [224, 286],
		heaDmg: 114,
		range: [1, 2],
		uses: 3,
		eneCost: 16,
		heaCost: 31
	},
	attachment: { x: 43, y: 39 }
}
export const CrimsonRapture = {
	id: '67',
	name: 'Crimson Rapture',
	type: 3,
	element: 2,
	attachment: { x: 54, y: 40 },
	tiers: [3, 5],
	stats: {
		weight: 52,
		expDmg: [163, 213],
		heaDmg: 135,
		heaCapDmg: 48,
		range: [1, 2],
		uses: 3,
		eneCost: 31,
		heaCost: 93
	}
}
export const Reckoning = {
	id: '68',
	name: 'Reckoning',
	type: 3,
	element: 2,
	attachment: { x: 44, y: 26 },
	tiers: [3, 5],
	stats: {
		weight: 86,
		expDmg: [182, 406],
		heaDmg: 50,
		expResDmg: 10,
		push: 1,
		range: [1, 2],
		uses: 3,
		heaCost: 31
	}
}
export const BasaltDissolver = {
	id: '69',
	name: 'Basalt Dissolver',
	type: 3,
	element: 2,
	attachment: { x: 65, y: 42 },
	tiers: [2, 5],
	stats: {
		weight: 23,
		expDmg: [32, 65],
		heaDmg: 44,
		expResDmg: 45,
		range: [2, 4],
		uses: 1
	}
}
export const MagmaBlast = {
	id: '70',
	name: 'Magma Blast',
	svg: true,
	type: 3,
	element: 2,
	attachment: { x: 54, y: 39 },
	tiers: [3, 5],
	stats: {
		weight: 55,
		expDmg: [211, 403],
		heaDmg: 79,
		expResDmg: 13,
		heaCapDmg: 30,
		heaColDmg: 17,
		push: 1,
		range: [2, 4],
		uses: 1,
		heaCost: 31
	}
}
export const Sorrow = {
	id: '71',
	name: 'Sorrow',
	type: 3,
	element: 2,
	attachment: { x: 55, y: 41 },
	tiers: [3, 5],
	stats: {
		weight: 66,
		expDmg: [163, 213],
		heaDmg: 93,
		heaCapDmg: 12,
		range: [2, 4],
		heaCost: 31
	}
}
export const Abomination = {
	id: '72',
	name: 'Abomination',
	type: 3,
	element: 2,
	attachment: { x: 49, y: 37 },
	tiers: [3, 5],
	stats: {
		weight: 66,
		expDmg: [212, 307],
		heaDmg: 71,
		expResDmg: 12,
		push: 1,
		range: [2, 4],
		uses: 3,
		eneCost: 19,
		heaCost: 44
	}
}
export const HeatBomb = {
	id: '73',
	name: 'Heat Bomb',
	type: 3,
	element: 2,
	attachment: { x: 55, y: 35 },
	tiers: [2, 5],
	stats: {
		weight: 50,
		expDmg: [40, 59],
		heaDmg: 393,
		range: [2, 4],
		uses: 1,
		heaCost: 393
	}
}
export const CorruptLight = {
	id: '74',
	name: 'Corrupt Light',
	type: 3,
	element: 2,
	attachment: { x: 42, y: 40 },
	tiers: [1, 5],
	stats: {
		weight: 51,
		expDmg: [140, 236],
		heaDmg: 93,
		heaCapDmg: 24,
		range: [3, 6],
		eneCost: 16,
		heaCost: 47
	}
}
export const DawnBlaze = {
	id: '75',
	name: 'DawnBlaze',
	type: 3,
	element: 2,
	attachment: { x: 47, y: 32 },
	tiers: [2, 5],
	stats: {
		weight: 52,
		expDmg: [210, 272],
		heaDmg: 71,
		expResDmg: 9,
		range: [3, 6],
		eneCost: 16,
		heaCost: 47
	}
}
export const Flaminator = {
	id: '76',
	name: 'Flaminator',
	type: 3,
	element: 2,
	tiers: [2, 5],
	stats: {
		weight: 47,
		expDmg: [148, 228],
		heaDmg: 93,
		heaCapDmg: 24,
		range: [3, 6],
		eneCost: 110
	},
	attachment: { x: 58, y: 38 }
}
export const HybridHeatCannon = {
	id: '77',
	name: 'Hybrid Heat Cannon',
	type: 3,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 47,
		expDmg: [159, 269],
		heaDmg: 105,
		heaCapDmg: 33,
		range: [3, 6],
		eneCost: 104
	},
	attachment: { x: 63, y: 39 }
}
export const ExplosiveRetreat = {
	id: '78',
	name: 'Explosive Retreat',
	type: 3,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 35,
		expDmg: [164, 337],
		expResDmg: 5,
		push: 1,
		retreat: 2,
		range: [3, 6],
		uses: 2,
		eneCost: 19,
		heaCost: 44
	},
	attachment: { x: 51, y: 40 }
}
export const MagmaRecoiler = {
	id: '79',
	name: 'Magma Recoiler',
	type: 3,
	element: 2,
	tiers: [2, 5],
	stats: {
		weight: 64,
		expDmg: [173, 350],
		heaDmg: 50,
		expResDmg: 10,
		push: 1,
		recoil: 1,
		range: [1, 2],
		uses: 3,
		eneCost: 25,
		heaCost: 56
	},
	attachment: { x: 60, y: 35 }
}
export const ShadowWolf = {
	id: '80',
	name: 'Shadow Wolf',
	svg: true,
	type: 3,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 60,
		expDmg: [147, 376],
		heaDmg: 50,
		expResDmg: 10,
		range: [2, 4],
		push: 1,
		recoil: 1,
		uses: 3,
		eneCost: 25,
		heaCost: 56
	},
	attachment: { x: 64, y: 32 }
}
export const BrokenDevourer = {
	id: '81',
	name: 'Broken Devourer',
	svg: true,
	type: 3,
	element: 2,
	tiers: [2, 5],
	stats: {
		weight: 26,
		expDmg: [155, 390],
		heaDmg: 93,
		expResDmg: 12,
		range: [2, 4],
		push: 1,
		uses: 1,
		backfire: 123,
		eneCost: 13,
		heaCost: 81
	},
	attachment: { x: 47, y: 47 }
}
export const OvercookingOven = {
	id: '82',
	name: 'Overcooking Oven',
	svg: true,
	type: 3,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 43,
		expDmg: [144, 232],
		heaDmg: 177,
		heaCapDmg: 48,
		range: [1, 2],
		uses: 2,
		backfire: 152,
		eneCost: 31,
		heaCost: 19
	},
	attachment: { x: 74, y: 47 }
}
export const SupremeCannon = {
	id: '83',
	name: 'Supreme Cannon',
	type: 4,
	element: 2,
	attachment: { x: 50, y: 67 },
	tiers: [2, 5],
	stats: {
		weight: 66,
		expDmg: [205, 315],
		heaDmg: 71,
		expResDmg: 11,
		push: 1,
		range: [3, 6],
		uses: 3,
		eneCost: 19,
		heaCost: 44
	}
}
export const VandalRage = {
	id: '84',
	name: 'Vandal Rage',
	type: 4,
	element: 2,
	attachment: { x: 71, y: 57 },
	tiers: [2, 5],
	stats: {
		weight: 41,
		expDmg: [143, 187],
		heaDmg: 44,
		expResDmg: 20,
		heaColDmg: 46,
		push: 1,
		range: [4, 5],
		uses: 1,
		heaCost: 25
	}
}
export const Desolation = {
	id: '85',
	name: 'Desolation',
	type: 4,
	element: 2,
	attachment: { x: 39, y: 77 },
	tiers: [2, 5],
	stats: {
		weight: 66,
		expDmg: [210, 310],
		heaDmg: 48,
		expResDmg: 10,
		range: [4, 8],
		uses: 3,
		heaCost: 56
	}
}
export const IronFrenzy = {
	id: '86',
	name: 'Iron Frenzy',
	type: 4,
	element: 2,
	attachment: { x: 62, y: 81 },
	tiers: [3, 5],
	stats: {
		weight: 52,
		expDmg: [203, 265],
		heaDmg: 71,
		expResDmg: 5,
		range: [4, 8],
		eneCost: 16,
		heaCost: 47
	}
}
export const DesertSnake = {
	id: '87',
	name: 'Desert Snake',
	svg: true,
	type: 4,
	element: 2,
	attachment: { x: 56, y: 35 },
	tiers: [3, 5],
	stats: {
		weight: 63,
		expDmg: [192, 329],
		heaDmg: 71,
		heaColDmg: 7,
		pull: 1,
		range: [4, 8],
		eneCost: 25,
		heaCost: 75
	}
}
export const Savagery = {
	id: '88',
	name: 'Savagery',
	type: 4,
	element: 2,
	tiers: [2, 5],
	stats: {
		weight: 51,
		expDmg: [154, 232],
		heaDmg: 106,
		heaCapDmg: 30,
		range: [4, 8],
		eneCost: 16,
		heaCost: 47
	},
	attachment: { x: 48, y: 55 }
}
export const FlamingScope = {
	id: '89',
	name: 'Flaming Scope',
	type: 4,
	element: 2,
	attachment: { x: 60, y: 52 },
	tiers: [3, 5],
	stats: {
		weight: 21,
		expDmg: [568, 741],
		heaDmg: 212,
		expResDmg: 15,
		range: [8, 0],
		uses: 1,
		eneCost: 31,
		heaCost: 155
	}
}
export const BurningShower = {
	id: '90',
	name: 'Burning Shower',
	type: 4,
	element: 2,
	attachment: { x: 56, y: 80 },
	tiers: [3, 5],
	stats: {
		weight: 75,
		expDmg: [173, 345],
		heaDmg: 86,
		expResDmg: 12,
		heaColDmg: 10,
		pull: 2,
		range: [4, 8],
		uses: 3,
		heaCost: 81
	}
}
export const RedRain = {
	id: '91',
	name: 'Red Rain',
	type: 4,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 65,
		expDmg: [216, 341],
		heaDmg: 106,
		heaColDmg: 19,
		pull: 2,
		range: [2, 4],
		uses: 2,
		eneCost: 30,
		heaCost: 81
	},
	attachment: { x: 36, y: 79 }
}
export const FranticFlame = {
	id: '92',
	name: 'Frantic Flame',
	svg: true,
	type: 4,
	element: 2,
	tiers: [2, 5],
	stats: {
		weight: 50,
		expDmg: [76, 470],
		heaDmg: 78,
		expResDmg: 10,
		range: [3, 6],
		uses: 2,
		eneCost: 10,
		heaCost: 81
	},
	attachment: { x: 44, y: 27 }
}
export const SpaceInvader = {
	id: '93',
	name: 'Space Invader',
	svg: true,
	type: 4,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 41,
		expDmg: [203, 337],
		heaDmg: 36,
		expResDmg: 5,
		range: [4, 8],
		push: 1,
		advance: 3,
		uses: 2,
		heaCost: 100
	},
	attachment: { x: 54, y: 38 }
}
export const Clash = {
	id: '94',
	name: 'Clash',
	svg: true,
	type: 5,
	element: 2,
	tiers: [2, 5],
	stats: {
		weight: 43,
		expDmg: [103, 135],
		heaDmg: 36,
		expResDmg: 6,
		heaCost: 31
	}
}
export const Nemo = {
	id: '95',
	name: 'Nemo',
	svg: true,
	type: 5,
	element: 2,
	tiers: [2, 5],
	stats: {
		weight: 43,
		expDmg: [97, 141],
		heaDmg: 41,
		heaCapDmg: 20,
		heaCost: 31
	}
}
export const Swoop = {
	id: '96',
	name: 'Swoop',
	svg: true,
	type: 5,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 22,
		expDmg: [55, 90],
		heaDmg: 58,
		expResDmg: 5,
		eneCost: 31,
		heaCost: 31
	}
}
export const Murmur = {
	id: '97',
	name: 'Murmur',
	svg: true,
	type: 5,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 43,
		expDmg: [86, 153],
		heaDmg: 36,
		heaColDmg: 7,
		heaCost: 31
	}
}
export const FlameWave = {
	id: '98',
	name: 'FlameWave',
	svg: true,
	type: 5,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 51,
		expDmg: [84, 154],
		heaDmg: 45,
		push: 1,
		heaCost: 31
	}
}
export const HeatPoint = {
	id: '99',
	name: 'HeatPoint',
	svg: true,
	type: 5,
	element: 2,
	tiers: [2, 5],
	stats: {
		weight: 51,
		expDmg: [161, 211],
		heaDmg: 48,
		expResDmg: 6,
		uses: 3,
		heaCost: 50
	}
}
export const FireFly = {
	id: '100',
	name: 'Fire Fly',
	svg: true,
	type: 5,
	element: 2,
	tiers: [2, 5],
	stats: {
		weight: 50,
		expDmg: [134, 242],
		heaDmg: 48,
		expResDmg: 5,
		range: [2, 4],
		heaCost: 50
	}
}
export const FlameSpear = {
	id: '101',
	name: 'Flame Spear',
	svg: true,
	type: 5,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 50,
		expDmg: [142, 259],
		heaDmg: 54,
		expResDmg: 7,
		range: [3, 6],
		heaCost: 50
	}
}
export const FlamingGrapplingHook = {
	id: '102',
	name: 'Flaming Grappling Hook',
	type: 8,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 16,
		expDmg: [111, 145],
		heaDmg: 39,
		uses: 1,
		heaCost: 31
	}
}
export const HeatEngine = {
	id: '103',
	name: 'Heat Engine',
	type: 9,
	element: 2,
	tiers: [2, 5],
	stats: {
		weight: 25,
		heaCap: 89,
		heaCol: 42
	}
}
export const CoolingMassBooster = {
	id: '104',
	name: 'Cooling Mass Booster',
	type: 9,
	element: 2,
	tiers: [2, 5],
	stats: {
		weight: 15,
		heaCol: 63
	}
}
export const HeatStorageUnit = {
	id: '105',
	name: 'Heat Storage Unit',
	type: 9,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 22,
		heaCap: 134
	}
}
export const UltraHotProtector = {
	id: '106',
	name: 'UltraHot Protector',
	type: 9,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 28,
		expRes: 59
	}
}
export const HeatProtector = {
	id: '107',
	name: 'Heat Protector',
	type: 9,
	element: 2,
	tiers: [0, 5],
	stats: {
		weight: 28,
		expRes: 24
	}
}
export const Sith = {
	id: '108',
	name: 'Sith',
	type: 1,
	element: 3,
	tiers: [0, 5],
	stats: {
		weight: 312,
		health: 930,
		eneCap: 245,
		eneReg: 112,
		heaCap: 193,
		heaCol: 64,
		phyRes: 22,
		expRes: 22,
		eleRes: 16
	},
	attachment: {
		leg1: { x: 56, y: 189 },
		leg2: { x: 132, y: 189 },
		side1: { x: 62, y: 141 },
		side2: { x: 131, y: 141 },
		side3: { x: 58, y: 89 },
		side4: { x: 135, y: 89 },
		top1: { x: 57, y: 43 },
		top2: { x: 121, y: 43 }
	}
}
export const Naga = {
	id: '109',
	name: 'Naga',
	svg: true,
	type: 1,
	element: 3,
	tiers: [2, 5],
	stats: {
		weight: 335,
		health: 982,
		eneCap: 279,
		eneReg: 104,
		heaCap: 193,
		heaCol: 72,
		phyRes: 22,
		expRes: 22,
		eleRes: 16
	},
	attachment: {
		leg1: { x: 37, y: 172 },
		leg2: { x: 101, y: 172 },
		side1: { x: 61, y: 117 },
		side2: { x: 123, y: 117 },
		side3: { x: 62, y: 63 },
		side4: { x: 135, y: 63 },
		top1: { x: 59, y: 27 },
		top2: { x: 128, y: 27 }
	}
}
export const GrimReaper = {
	id: '110',
	name: 'GrimReaper',
	svg: true,
	type: 1,
	element: 3,
	tiers: [2, 5],
	stats: {
		weight: 329,
		health: 879,
		eneCap: 346,
		eneReg: 112,
		heaCap: 193,
		heaCol: 64,
		phyRes: 22,
		expRes: 22,
		eleRes: 16
	},
	attachment: {
		leg1: { x: 47, y: 188 },
		leg2: { x: 111, y: 188 },
		side1: { x: 64, y: 146 },
		side2: { x: 142, y: 146 },
		side3: { x: 61, y: 95 },
		side4: { x: 149, y: 95 },
		top1: { x: 58, y: 67 },
		top2: { x: 124, y: 67 }
	}
}
export const LightningPlatinumVest = {
	id: '111',
	name: 'Lightning Platinum Vest',
	svg: true,
	type: 1,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 346,
		health: 982,
		eneCap: 267,
		eneReg: 96,
		heaCap: 193,
		heaCol: 64,
		phyRes: 44,
		expRes: 22,
		eleRes: 16
	},
	attachment: {
		leg1: { x: 63, y: 189 },
		leg2: { x: 125, y: 189 },
		side1: { x: 60, y: 148 },
		side2: { x: 140, y: 148 },
		side3: { x: 54, y: 80 },
		side4: { x: 142, y: 80 },
		top1: { x: 53, y: 24 },
		top2: { x: 107, y: 24 }
	}
}
export const ChargedWalkers = {
	id: '112',
	name: 'Charged Walkers',
	type: 2,
	element: 3,
	attachment: { x: 60, y: 13 },
	tiers: [0, 5],
	stats: {
		weight: 122,
		health: 413,
		eleDmg: [143, 187],
		eneDmg: 48,
		push: 1,
		range: [1, 0],
		walk: 1,
		jump: 2
	}
}
export const DynamicStompers = {
	id: '113',
	name: 'Dynamic Stompers',
	svg: true,
	type: 2,
	element: 3,
	attachment: { x: 64, y: 27 },
	tiers: [2, 5],
	stats: {
		weight: 118,
		health: 372,
		eleDmg: [154, 217],
		eneDmg: 58,
		push: 1,
		range: [1, 0],
		walk: 1,
		jump: 2
	}
}
export const SparkedRunners = {
	id: '114',
	name: 'Sparked Runners',
	svg: true,
	type: 2,
	element: 3,
	attachment: { x: 115, y: 22 },
	tiers: [3, 5],
	stats: {
		weight: 114,
		health: 363,
		eleDmg: [135, 249],
		eneDmg: 38,
		push: 1,
		range: [1, 0],
		walk: 3
	}
}
export const LightningSupporters = {
	id: '115',
	name: 'Lightning Supporters',
	svg: true,
	type: 2,
	element: 3,
	attachment: { x: 78, y: 20 },
	tiers: [2, 5],
	stats: {
		weight: 124,
		health: 413,
		eleDmg: [127, 192],
		eneDmg: 67,
		push: 1,
		range: [1, 0],
		walk: 1,
		jump: 2
	}
}
export const RecoilStompers = {
	id: '116',
	name: 'Recoil Stompers',
	type: 2,
	element: 3,
	attachment: { x: 52, y: 19 },
	tiers: [2, 5],
	stats: {
		weight: 138,
		health: 413,
		eleDmg: [140, 216],
		eneDmg: 38,
		push: 2,
		range: [1, 0],
		walk: 1,
		jump: 2
	}
}
export const StormWeaver = {
	id: '117',
	name: 'StormWeaver',
	type: 3,
	element: 3,
	attachment: { x: 34, y: 55 },
	tiers: [3, 5],
	stats: {
		weight: 56,
		eleDmg: [244, 319],
		eneDmg: 114,
		eneCapDmg: 32,
		push: 1,
		range: [1, 0],
		eneCost: 50,
		heaCost: 13
	}
}
export const VikingHammer = {
	id: '118',
	name: 'Viking Hammer',
	type: 3,
	element: 3,
	attachment: { x: 33, y: 63 },
	tiers: [2, 5],
	stats: {
		weight: 63,
		eleDmg: [211, 354],
		eneDmg: 114,
		eneRegDmg: 17,
		push: 3,
		range: [1, 0],
		eneCost: 50,
		heaCost: 13
	}
}
export const BrightRoar = {
	id: '119',
	name: 'BrightRoar',
	type: 3,
	element: 3,
	attachment: { x: 38, y: 46 },
	tiers: [3, 5],
	stats: {
		weight: 45,
		eleDmg: [193, 311],
		eneDmg: 103,
		eleResDmg: 9,
		range: [1, 2],
		eneCost: 50,
		heaCost: 13
	}
}
export const BigDaddy = {
	id: '120',
	name: 'BigDaddy',
	type: 3,
	element: 3,
	attachment: { x: 52, y: 54 },
	tiers: [3, 5],
	stats: {
		weight: 53,
		eleDmg: [202, 265],
		eneDmg: 152,
		range: [1, 2],
		uses: 3,
		eneCost: 47,
		heaCost: 16
	}
}
export const AshCreator = {
	id: '121',
	name: 'Ash Creator',
	type: 3,
	element: 3,
	attachment: { x: 54, y: 40 },
	tiers: [3, 5],
	stats: {
		weight: 58,
		eleDmg: [163, 213],
		eneDmg: 180,
		eneCapDmg: 44,
		range: [1, 2],
		uses: 3,
		eneCost: 93,
		heaCost: 31
	}
}
export const BullDog = {
	id: '122',
	name: 'BullDog',
	type: 3,
	element: 3,
	attachment: { x: 44, y: 26 },
	tiers: [3, 5],
	stats: {
		weight: 73,
		eleDmg: [182, 406],
		eneDmg: 67,
		eleResDmg: 10,
		push: 1,
		range: [1, 2],
		uses: 3,
		eneCost: 31
	}
}
export const RustyEnergyArmor = {
	id: '123',
	name: 'Rusty Energy Armor',
	svg: true,
	type: 1,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 370,
		health: 1664,
		eneCap: 267,
		eneReg: 96,
		heaCap: 193,
		heaCol: 64
	},
	attachment: {
		leg1:  { x: 64,  y: 177 },
		leg2:  { x: 128, y: 177 },
		side1: { x: 54,  y: 137 },
		side2: { x: 147, y: 137 },
		side3: { x: 54,  y: 87 },
		side4: { x: 147, y: 87 },
		top1:  { x: 68,  y: 11 },
		top2:  { x: 122, y: 11 }
	}
}
export const BlizzardDissolver = {
	id: '124',
	name: 'Blizzard Dissolver',
	type: 3,
	element: 3,
	attachment: { x: 65, y: 42 },
	tiers: [3, 5],
	stats: {
		weight: 24,
		eleDmg: [34, 70],
		eneDmg: 63,
		eleResDmg: 50,
		range: [2, 4],
		uses: 1
	}
}
export const EMP = {
	id: '125',
	name: 'EMP',
	type: 3,
	element: 3,
	attachment: { x: 62, y: 41 },
	tiers: [2, 5],
	stats: {
		weight: 70,
		eleDmg: [37, 61],
		eneDmg: 334,
		range: [2, 4],
		uses: 1,
		eneCost: 393
	}
}
export const MortalBullet = {
	id: '126',
	name: 'Mortal Bullet',
	type: 3,
	element: 3,
	attachment: { x: 58, y: 40 },
	tiers: [3, 5],
	stats: {
		weight: 56,
		eleDmg: [168, 218],
		eneDmg: 133,
		eneCapDmg: 12,
		range: [2, 4],
		eneCost: 31
	}
}
export const LastWords = {
	id: '127',
	name: 'Last Words',
	type: 3,
	element: 3,
	attachment: { x: 42, y: 33 },
	tiers: [2, 5],
	stats: {
		weight: 63,
		eleDmg: [185, 285],
		eneDmg: 95,
		eneRegDmg: 13,
		push: 1,
		range: [2, 4],
		uses: 3,
		eneCost: 47,
		heaCost: 16
	}
}
export const BunkerShell = {
	id: '128',
	name: 'Bunker Shell',
	type: 3,
	element: 3,
	attachment: { x: 54, y: 39 },
	tiers: [3, 5],
	stats: {
		weight: 50,
		eleDmg: [243, 463],
		eneDmg: 123,
		eleResDmg: 13,
		eneCapDmg: 30,
		eneRegDmg: 17,
		push: 1,
		range: [2, 4],
		uses: 1,
		eneCost: 31
	}
}
export const MaliceBeam = {
	id: '129',
	name: 'Malice Beam',
	type: 3,
	element: 3,
	attachment: { x: 43, y: 41 },
	tiers: [1, 5],
	stats: {
		weight: 55,
		eleDmg: [140, 236],
		eneDmg: 123,
		eneCapDmg: 24,
		range: [3, 6],
		eneCost: 47,
		heaCost: 12
	}
}
export const UltraBright = {
	id: '130',
	name: 'UltraBright',
	type: 3,
	element: 3,
	attachment: { x: 47, y: 32 },
	tiers: [2, 5],
	stats: {
		weight: 56,
		eleDmg: [203, 265],
		eneDmg: 95,
		eleResDmg: 5,
		range: [3, 6],
		eneCost: 47,
		heaCost: 16
	}
}
export const HotFlash = {
	id: '131',
	name: 'Hot Flash',
	type: 3,
	element: 3,
	tiers: [2, 5],
	stats: {
		weight: 66,
		eleDmg: [148, 228],
		eneDmg: 142,
		eneCapDmg: 24,
		range: [3, 6],
		heaCost: 110
	},
	attachment: { x: 58, y: 38 }
}
export const HybridEnergyCannon = {
	id: '132',
	name: 'Hybrid Energy Cannon',
	type: 3,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 66,
		eleDmg: [159, 269],
		eneDmg: 139,
		eneCapDmg: 39,
		range: [3, 6],
		heaCost: 104
	},
	attachment: { x: 63, y: 39 }
}
export const EvacSpark = {
	id: '133',
	name: 'Evac Spark',
	svg: true,
	type: 3,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 37,
		eleDmg: [164, 337],
		eleResDmg: 5,
		push: 1,
		retreat: 2,
		range: [3, 6],
		uses: 2,
		eneCost: 44,
		heaCost: 19
	},
	attachment: { x: 51, y: 40 }
}
export const LightningRecoiler = {
	id: '134',
	name: 'Lightning Recoiler',
	width: 193,
	height: 76,
	type: 3,
	element: 3,
	tiers: [2, 5],
	stats: {
		weight: 69,
		eleDmg: [173, 350],
		eleResDmg: 10,
		push: 1,
		recoil: 1,
		range: [1, 2],
		uses: 3,
		eneCost: 56,
		heaCost: 25
	},
	attachment: { x: 60, y: 35 }
}
export const PiercingFox = {
	id: '135',
	name: 'Piercing Fox',
	svg: true,
	type: 3,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 64,
		eleDmg: [147, 376],
		eneDmg: 67,
		eleResDmg: 10,
		range: [2, 4],
		push: 1,
		recoil: 1,
		uses: 3,
		eneCost: 56,
		heaCost: 25
	},
	attachment: { x: 64, y: 32 }
}
export const UnstablePowerCell = {
	id: '136',
	name: 'Unstable Power Cell',
	svg: true,
	type: 3,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 42,
		eleDmg: [144, 232],
		eneDmg: 246,
		eneCapDmg: 48,
		range: [1, 2],
		uses: 2,
		backfire: 152,
		eneCost: 19,
		heaCost: 31
	},
	attachment: { x: 74, y: 47 }
}
export const GrimCobra = {
	id: '137',
	name: 'Grim Cobra',
	type: 4,
	element: 3,
	attachment: { x: 42, y: 50 },
	tiers: [2, 5],
	stats: {
		weight: 63,
		eleDmg: [181, 290],
		eneDmg: 95,
		eneRegDmg: 13,
		pull: 1,
		range: [3, 6],
		uses: 3,
		eneCost: 47,
		heaCost: 16
	}
}
export const Hysteria = {
	id: '138',
	name: 'Hysteria',
	type: 4,
	element: 3,
	tiers: [2, 5],
	stats: {
		weight: 55,
		eleDmg: [169, 252],
		eneDmg: 129,
		eneCapDmg: 24,
		range: [4, 8],
		eneCost: 47,
		heaCost: 16
	},
	attachment: { x: 48, y: 56 }
}
export const ValiantSniper = {
	id: '139',
	name: 'Valiant Sniper',
	type: 4,
	element: 3,
	attachment: { x: 37, y: 34 },
	tiers: [3, 5],
	stats: {
		weight: 51,
		eleDmg: [126, 183],
		eneDmg: 181,
		eleResDmg: 17,
		eneRegDmg: 13,
		range: [4, 8],
		uses: 2,
		eneCost: 31
	}
}
export const SpineFall = {
	id: '140',
	name: 'SpineFall',
	svg: true,
	type: 4,
	element: 3,
	attachment: { x: 56, y: 35 },
	tiers: [3, 5],
	stats: {
		weight: 67,
		eleDmg: [192, 329],
		eneDmg: 105,
		eneRegDmg: 13,
		pull: 1,
		range: [4, 8],
		eneCost: 75,
		heaCost: 25
	}
}
export const Delerium = {
	id: '141',
	name: 'Delerium',
	type: 4,
	element: 3,
	attachment: { x: 62, y: 81 },
	tiers: [3, 5],
	stats: {
		weight: 56,
		eleDmg: [214, 289],
		eneDmg: 95,
		eleResDmg: 12,
		range: [4, 8],
		eneCost: 47,
		heaCost: 16
	}
}
export const LightningScope = {
	id: '142',
	name: 'Lightning Scope',
	type: 4,
	element: 3,
	attachment: { x: 60, y: 52 },
	tiers: [3, 5],
	stats: {
		weight: 23,
		eleDmg: [568, 741],
		eneDmg: 283,
		eleResDmg: 15,
		range: [8, 0],
		uses: 1,
		eneCost: 155,
		heaCost: 31
	}
}
export const FranticLightning = {
	id: '143',
	name: 'Frantic Lightning',
	svg: true,
	type: 4,
	element: 3,
	tiers: [2, 5],
	stats: {
		weight: 50,
		eleDmg: [76, 451],
		eneDmg: 95,
		eleResDmg: 10,
		range: [3, 6],
		uses: 2,
		eneCost: 81,
		heaCost: 13
	},
	attachment: { x: 44, y: 27 }
}
export const PartyCrasher = {
	id: '144',
	name: 'Party Crasher',
	svg: true,
	type: 4,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 43,
		eleDmg: [203, 347],
		eneDmg: 48,
		eleResDmg: 5,
		push: 1,
		advance: 3,
		range: [4, 8],
		uses: 2,
		heaCost: 100
	},
	attachment: { x: 54, y: 38 }
}
export const Snack = {
	id: '145',
	name: 'Snack',
	svg: true,
	type: 5,
	element: 3,
	tiers: [2, 5],
	stats: {
		weight: 30,
		eleDmg: [103, 135],
		eneDmg: 48,
		eleResDmg: 6,
		eneCost: 31
	}
}
export const Torment = {
	id: '146',
	name: 'Torment',
	svg: true,
	type: 5,
	element: 3,
	tiers: [2, 5],
	stats: {
		weight: 29,
		eleDmg: [97, 141],
		eneDmg: 48,
		eneCapDmg: 12,
		eneCost: 31
	}
}
export const WindForge = {
	id: '147',
	name: 'WindForge',
	svg: true,
	type: 5,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 27,
		eleDmg: [55, 90],
		eneDmg: 76,
		eleResDmg: 5,
		eneCost: 31
	}
}
export const Anguish = {
	id: '148',
	name: 'Anguish',
	svg: true,
	type: 5,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 30,
		eleDmg: [86, 153],
		eneDmg: 48,
		eneRegDmg: 7,
		eneCost: 31
	}
}
export const Shockwave = {
	id: '149',
	name: 'Shockwave',
	svg: true,
	type: 5,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 51,
		eleDmg: [139, 183],
		eneDmg: 49,
		push: 1,
		eneCost: 31
	}
}
export const FaceShocker = {
	id: '150',
	name: 'Face Shocker',
	svg: true,
	type: 5,
	element: 3,
	tiers: [2, 5],
	stats: {
		weight: 41,
		eleDmg: [163, 213],
		eneDmg: 76,
		eleResDmg: 6,
		uses: 3,
		eneCost: 50
	}
}
export const Electrolyte = {
	id: '151',
	name: 'Electrolyte',
	type: 5,
	element: 3,
	tiers: [2, 5],
	stats: {
		weight: 47,
		eleDmg: [134, 244],
		eneDmg: 76,
		eleResDmg: 6,
		range: [2, 4],
		eneCost: 50
	}
}
export const RailGun = {
	id: '152',
	name: 'Rail Gun',
	type: 5,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 50,
		eleDmg: [151, 276],
		eneDmg: 86,
		eleResDmg: 7,
		range: [3, 6],
		eneCost: 50
	}
}
export const AdvancedTeleporter = {
	id: '153',
	name: 'Advanced Teleporter',
	type: 7,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 11,
		eleDmg: [103, 135],
		eneDmg: 48,
		uses: 1,
		eneCost: 31
	}
}
export const DoubleTeleporter = {
	id: '154',
	name: 'Double Teleporter',
	type: 7,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 26,
		uses: 2,
		eneCost: 20
	}
}
export const ShockingGrapplingHook = {
	id: '155',
	name: 'Shocking Grappling Hook',
	type: 8,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 11,
		eleDmg: [103, 135],
		eneDmg: 48,
		uses: 1,
		eneCost: 31
	}
}
export const EnergyEngine = {
	id: '156',
	name: 'Energy Engine',
	type: 9,
	element: 3,
	tiers: [2, 5],
	stats: {
		weight: 25,
		eneCap: 89,
		eneReg: 42
	}
}
export const EnergyMassBooster = {
	id: '157',
	name: 'Energy Mass Booster',
	type: 9,
	element: 3,
	tiers: [2, 5],
	stats: {
		weight: 15,
		eneReg: 63
	}
}
export const EnergyStorageUnit = {
	id: '158',
	name: 'Energy Storage Unit',
	type: 9,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 22,
		eneCap: 134
	}
}
export const SuperChargeProtector = {
	id: '159',
	name: 'SuperCharge Protector',
	type: 9,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 28,
		eleRes: 59
	}
}
export const EnergyProtector = {
	id: '160',
	name: 'Energy Protector',
	type: 9,
	element: 3,
	tiers: [0, 5],
	stats: {
		weight: 28,
		eleRes: 24
	}
}
export const HardenedPlatinumVest = {
	id: '161',
	name: 'Hardened Platinum Vest',
	type: 1,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 346,
		health: 908,
		eneCap: 193,
		eneReg: 64,
		heaCap: 289,
		heaCol: 96,
		phyRes: 16,
		expRes: 22,
		eleRes: 44
	},
	attachment: {
		leg1: { x: 63, y: 189 },
		leg2: { x: 125, y: 189 },
		side1: { x: 60, y: 148 },
		side2: { x: 140, y: 148 },
		side3: { x: 54, y: 80 },
		side4: { x: 142, y: 80 },
		top1: { x: 53, y: 24 },
		top2: { x: 107, y: 24 }
	}
}
export const UnreliableGuardian = {
	id: '162',
	name: 'Unreliable Guardian',
	type: 5,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 48,
		eleDmg: [139, 252],
		eneDmg: 91,
		eleResDmg: 5,
		backfire: 98,
		eneCost: 50
	}
}
export const BackstabbinGuardian = {
	id: '163',
	name: 'Backstabbin Guardian',
	type: 5,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 48,
		expDmg: [134, 244],
		heaDmg: 58,
		expResDmg: 6,
		backfire: 101,
		heaCost: 62
	}
}
export const SelfishGuardian = {
	id: '164',
	name: 'Selfish Guardian',
	type: 5,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 48,
		phyDmg: [215, 379],
		phyResDmg: 5,
		backfire: 130,
		eneCost: 16,
		heaCost: 16
	}
}
export const SelfishProtector = {
	id: '165',
	name: 'Selfish Protector',
	type: 5,
	element: 1,
	tiers: [2, 5],
	stats: {
		weight: 42,
		phyDmg: [201, 359],
		phyResDmg: 5,
		backfire: 108,
		eneCost: 16,
		heaCost: 16
	}
}
export const BackstabbingProtector = {
	id: '166',
	name: 'Backstabbing Protector',
	type: 5,
	element: 2,
	tiers: [2, 5],
	stats: {
		weight: 43,
		expDmg: [126, 226],
		heaDmg: 50,
		expResDmg: 5,
		backfire: 87,
		heaCost: 50
	}
}
export const UnreliableProtector = {
	id: '167',
	name: 'Unreliable Protector',
	type: 5,
	element: 3,
	tiers: [2, 5],
	stats: {
		weight: 42,
		eleDmg: [134, 237],
		eneDmg: 76,
		eleResDmg: 5,
		backfire: 87,
		eneCost: 50
	}
}
export const LazyFalcon = {
	id: '168',
	name: 'Lazy Falcon',
	type: 4,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 30,
		phyDmg: [611, 980],
		phyResDmg: 10,
		range: [8, 0],
		backfire: 490
	},
	attachment: { x: 40, y: 50 }
}
export const HalfBurntScope = {
	id: '169',
	name: 'Half Burnt Scope',
	type: 4,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 30,
		expDmg: [503, 807],
		heaDmg: 212,
		expResDmg: 15,
		range: [8, 0],
		backfire: 468,
		heaCost: 100
	},
	attachment: { x: 40, y: 50 }
}
export const RustyHeatBlaster = {
	id: '170',
	name: 'Rusty Heat Blaster',
	type: 3,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 43,
		expDmg: [209, 336],
		heaDmg: 106,
		expResDmg: 7,
		range: [3, 6],
		uses: 3,
		backfire: 173,
		heaCost: 143
	},
	attachment: { x: 58, y: 33 }
}
export const MalfunctioningBlaster = {
	id: '171',
	name: 'Malfunctioning Blaster',
	type: 3,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 28,
		phyDmg: [244, 391],
		phyResDmg: 13,
		range: [3, 6],
		backfire: 159,
		heaCost: 162
	},
	attachment: { x: 58, y: 33 }
}
export const LastResortVulcan = {
	id: '172',
	name: 'Last Resort Vulcan',
	type: 3,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 52,
		phyDmg: [216, 478],
		phyResDmg: 20,
		range: [4, 8],
		uses: 2,
		backfire: 180,
		heaCost: 31
	},
	attachment: { x: 59, y: 35 }
}
export const Disintegration = {
	id: '173',
	name: 'Disintegration',
	type: 3,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 47,
		phyDmg: [202, 362],
		phyResDmg: 15,
		range: [1, 2],
		uses: 3,
		backfire: 100
	},
	attachment: { x: 57, y: 51 }
}
export const DistanceController = {
	id: '174',
	name: 'Distance Controller',
	type: 3,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 34,
		expDmg: [135, 241],
		heaDmg: 44,
		expResDmg: 5,
		range: [1, 2],
		advance: 6,
		uses: 2,
		heaCost: 38
	},
	attachment: { x: 53, y: 26 }
}
export const DistanceGenerator = {
	id: '175',
	name: 'Distance Generator',
	type: 3,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 35,
		eleDmg: [135, 241],
		eneDmg: 63,
		eleResDmg: 5,
		range: [1, 2],
		advance: 6,
		uses: 2,
		heaCost: 38
	},
	attachment: { x: 53, y: 26 }
}
export const CockpitPiercer = {
	id: '36',
	name: 'Cockpit Piercer',
	svg: true,
	type: 4,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 27,
		phyDmg: [540, 866],
		phyResDmg: 10,
		range: [7],
		push: 1,
		uses: 1,
		eneCost: 22,
		heaCost: 22
	},
	attachment: { x: 71, y: 41 }
}
export const CockpitBurner = {
	id: '176',
	name: 'Cockpit Burner',
	type: 4,
	element: 2,
	tiers: [3, 5],
	stats: {
		weight: 27,
		expDmg: [394, 654],
		heaDmg: 177,
		expResDmg: 12,
		range: [7, 0],
		push: 7,
		uses: 1,
		eneCost: 31,
		heaCost: 155
	},
	attachment: { x: 71, y: 41 }
}
export const CockpitElectrocuter = {
	id: '177',
	name: 'Cockpit Electrocuter',
	type: 4,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 27,
		eleDmg: [414, 666],
		eneDmg: 218,
		eleResDmg: 10,
		range: [7, 0],
		push: 1,
		uses: 1,
		eneCost: 124,
		heaCost: 31
	},
	attachment: { x: 71, y: 41 }
}
export const ScrappedEnergyBlaster = {
	id: '178',
	name: 'Scrapped Energy Blaster',
	type: 3,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 42,
		eleDmg: [209, 336],
		eneDmg: 142,
		eleResDmg: 7,
		range: [3, 6],
		uses: 3,
		backfire: 173,
		eneCost: 143
	},
	attachment: { x: 58, y: 33 }
}
export const ElectrocutedScope = {
	id: '179',
	name: 'Electrocuted Scope',
	type: 4,
	element: 3,
	tiers: [3, 5],
	stats: {
		weight: 30,
		eleDmg: [503, 807],
		eneDmg: 283,
		eleResDmg: 15,
		range: [8, 0],
		backfire: 389,
		eneCost: 62
	},
	attachment: { x: 40, y: 50 }
}
export const UnrepairedLaserCannon = {
	id: '180',
	name: 'Unrepaired Laser Cannon',
	type: 3,
	element: 1,
	tiers: [2, 5],
	stats: {
		weight: 27,
		phyDmg: [216, 347],
		range: [2, 4],
		retreat: 1,
		backfire: 72,
		eneCost: 31,
		heaCost: 31
	},
	attachment: { x: 47, y: 30 }
}
export const EnergyBatteryArmor = {
	id: '181',
	name: 'Energy Battery Armor',
	width: 222,
	height: 226,
	type: 1,
	element: 3,
	tiers: [2, 5],
	stats: {
		weight: 346,
		health: 1136,
		eneCap: 433,
		eneReg: 24,
		heaCap: 290,
		heaCol: 24,
		phyRes: 14,
		expRes: 14,
		eleRes: 14
	},
	attachment: {
		leg1:  { x: 71,  y: 187 },
		leg2:  { x: 125, y: 187 },
		side1: { x: 57,  y: 146 },
		side2: { x: 145, y: 146 },
		side3: { x: 66,  y: 83 },
		side4: { x: 132, y: 83 },
		top1:  { x: 50,  y: 16 },
		top2:  { x: 97,  y: 16 }
	}
}
export const DrunkLightning = {
	id: '182',
	name: 'Drunk Lightning',
	type: 3,
	element: 3,
	tiers: [2, 5],
	stats: {
		weight: 27,
		eleDmg: [155, 390],
		eneDmg: 123,
		eleResDmg: 12,
		range: [2, 4],
		push: 1,
		uses: 1,
		backfire: 123,
		eneCost: 81,
		heaCost: 62
	},
	divine: {
		eleDmg: [159, 400],
		eneDmg: 127
	},
	attachment: { x: 47, y: 47 }
}
export const SuperbChargeEngine = {
	id: '183',
	name: 'Superb Charge Engine',
	type: 6,
	element: 1,
	tiers: [3, 5],
	stats: {
		weight: 23,
		phyDmg: [264, 345],
		uses: 1
	}
}

// last id: 183