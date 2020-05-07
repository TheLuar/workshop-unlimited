'use strict'


// Dependences

import { WUPopup } from './mobiles/wu-popup.js'

import { WUScreenManager } from './screens/wu-screen-manager.js'

import { WUItemsManager } from './managers/wu-items-manager.js'

import { WUBattleManager } from './managers/wu-battle-manager.js'


// General

const app = document.getElementById('app')

const randomTexts = {
	notorso: [
		'Missing something?',
		'No mech-less battles allowed!',
		'Ready to battle! Just needs a torso first.',
		'Almost ready! Just needs everything.',
		'Where\'s your head at?',
		'Is it still in the garage?',
		'You need a mech, I think...',
		'No machine, no battle!',
		'<i>"I have a mech, therefore I battle"</i>',
	],
	nolegs: [
		'A claw mech would beat you in a battle, and in a race!',
		'Do not miss the legs day!',
		'That is probably not how we build battle machines!',
		'At least you wont stand on floor pads.',
		'This torso requires walking legs!',
	],
	noweapons: [
		'You sure don\'t wanna get there without weapons.',
		'Were are your arms?',
		'No pacifism in the mech arena!',
		'Let\' try something more violent!',
		'That looks threatening, imagine with weapons.',
		'Guns!',
		'Be destructive.',
		'I\'m sure we have some free weight to equip weapons.'
	],
	tooheavy: [
		'Wouldn\'t be fair to let you go there.',
		'That is a lot of metal!',
		'Too heavy!'
	]
}

let setup = []

let weight = 0


// Functions

const fakeClick = element => element.dispatchEvent(new Event('click'))

const getRandomText = type => randomTexts[type][Math.floor(Math.random() * randomTexts[type].length)]

const init = () =>
{
	const screenM = WUScreenManager.getInstance(app)
	const itemsM = WUItemsManager.getInstance()
	const battleM = WUBattleManager.getInstance()

	const dialog = WUPopup.getInstance()
	const scrLoading = screenM.getScreen('loading')
	const scrWorkshop = screenM.getScreen('workshop')


	// Events

	scrWorkshop.events.searchBattle = () =>
	{
		return
		
		// if (!setup[0])
		// {
		//     fakeClick(scrWorkshop.slots[0].element)
		//     return
		// }
		// if (!setup[1])
		// {
		//     fakeClick(scrWorkshop.slots[1].element)
		//     return
		// }
		// if (!(setup[2] || setup[3] || setup[4] || setup[5] || setup[6] || setup[7]))
		// {
		//     fakeClick(scrWorkshop.slots[2].element)
		//     return
		// }
		// if (weight > 1014)
		// {
		//     dialog.ok(getRandomText('tooheavy'), 'Over Weight')
		//     return
		// }

		const pos = [[5, 6], [4, 7], [3, 8], [2, 9]][Math.floor(Math.random() * 4)]

		const player = {
			position: pos[0],
			id: '1',
			name: 'You',
			items: [
				itemsM.getByName('Interceptor'),
				itemsM.getByName('Iron Boots'),
				itemsM.getByName('Annihilation'),
				itemsM.getByName('Mercy'),
				itemsM.getByName('EMP'),
				null,
				null,
				itemsM.getByName('Night Eagle'),
			],
		}

		const enemie = {
			position: pos[1],
			id: '2',
			name: 'Certainly not you',
			items: [
				itemsM.getByName('Zarkares'),
				itemsM.getByName('Lightning Supporters'),
				itemsM.getByName('Annihilation'),
			],
		}

		battleM.startBattle(player, enemie)
		screenM.goToScreen('battle')
	}

	scrWorkshop.events.updateSetup = set =>
	{
		setup = set
		weight = setup.map(a => a ? a.stats.weight : 0).reduce((x, y) => x + y)
	}

	battleM.events.useItem = data =>
	{
		console.log(data)
	}

	battleM.events.finish = winner =>
	{
		console.log(winner.name, 'won')
		screenM.goToScreen('workshop')
	}

	// End of Events


	// Loading

	scrLoading.setText('Loading assets...')
	screenM.goToScreen('loading')
	
	itemsM.load()

	const updateLoad = setInterval(() =>
	{
		if (itemsM.ready)
		{
			clearInterval(updateLoad)

			scrLoading.setProgress(100)
			scrLoading.setText('Welcome to Workshop Unlimited')

			setTimeout(() => screenM.goToScreen('workshop'), 2000)
		}
		else
		{
			scrLoading.setProgress((itemsM.getLoadingProgress() * 100).toFixed(1))
		}
	}, 100)

	// End of Loading
}



// Start

if (hasFullES6Support)
{
	init()
}
else
{
	const text = 'Oops! Your current browser does not support EcmaScript6. Without EcmaScript6, workshopScreen Unlimited will not work! Please update your browser, or use a better one.'

	app.innerHTML = '<div id="es6-warning">' + text + '</div>'
}
