'use strict'


// Packages

import { SettingsManager } from './managers/SettingsManager.js'
import { SingletonElement } from './bases/SingletonElement.js'
import { ItemsManager } from './managers/ItemsManager.js'
import { StatsManager } from './managers/StatsManager.js'
import { LoadingManager } from './managers/LoadingManager.js'
import { WorkshopManager } from './managers/WorkshopManager.js'
import { ToolTip } from './mobiles/ToolTip.js'


// Class

export const WorkshopUnlimited = class extends SingletonElement
{
	constructor ()
	{
		super()

		this.settingsM = null
		this.itemsM = null
		this.statsM = null
		this.loadingM = null
		this.screens = null
		this.toolTip = null
	}

	init (conf = {})
	{
		const {
			container = document.body,
			items = {},
			stats = {},
		} = conf
		
		container.appendChild(this)

		this.settingsM = SettingsManager.gi()
		this.itemsM = ItemsManager.gi()
		this.statsM = StatsManager.gi()
		this.loadingM = LoadingManager.gi()
		this.workshopM = WorkshopManager.gi()
		this.toolTip = ToolTip.gi()

		this.settingsM.init()
		this.itemsM.init(items)
		this.statsM.init(stats)
		this.loadingM.init()
		// this.workshopM.init() workshop is initialized after images are loaded
		this.toolTip.init(this)

		this.screenManagers = {
			loading: this.loadingM,
			workshop: this.workshopM,
		}
		
		this.goToScreen('loading')
		this.appendChildren(this.loadingM.screen, this.toolTip)
		this.show()

		this._init()
	}

	async load (paths = {})
	{
		const {
			items = '',
			stats = '',
		} = paths

		const loadItemImgs = async () =>
		{
			return new Promise(resolve =>
			{
				this.itemsM.load(items)
				const loading = setInterval(() =>
				{
					const progress = this.itemsM.getLoadingProgress()
					this.loadingM.setProgress((progress * 100).toFixed(1))
					if (progress < 1) return
					clearInterval(loading)
					resolve()
				}, 100)
			})
		}

		const loadStatImgs = async () =>
		{
			return new Promise(resolve =>
			{
				this.statsM.load(stats)
				const loading = setInterval(() =>
				{
					const progress = this.statsM.getLoadingProgress()
					this.loadingM.setProgress((progress * 100).toFixed(1))
					if (progress < 1) return
					clearInterval(loading)
					resolve()
				}, 100)
			})
		}

		this.loadingM.setText('(1/2) Fetching item images...')
		await loadItemImgs()

		this.loadingM.setProgress(0)
		this.loadingM.setText('(2/2) Fetching stat images...')
		await loadStatImgs()
		
		this.loadingM.setText('Initializing...')

		this.workshopM.init()
		this.appendChildren(this.workshopM.screen)
		
		this.loadingM.setText('Welcome to Workshop Unlimited')

		setTimeout(() => this.goToScreen('workshop'), 2000)
	}

	goToScreen (name)
	{
		if (!this.screenManagers[name]) throw new Error('No screen with name ' + name)
		for (const k in this.screenManagers)
		{
			if (!this.screenManagers[k].initialized) continue
			this.screenManagers[k].screen.hide()
		}
		this.screenManagers[name].screen.show()
	}
}

// // Dependences

// import { WUPopup } from './mobiles/wu-popup.js'
// import { WUScreenManager } from './screens/wu-screen-manager.js'
// import { WUItemsManager } from './managers/wu-items-manager.js'
// import { WUStatsManager } from './managers/wu-stats-manager.js'
// import { WUBattleManager } from './managers/wu-battle-manager.js'


// // General

// const app = document.getElementById('app')

// const randomTexts = {
// 	notorso: [
// 		'Missing something?',
// 		'No mech-less battles allowed!',
// 		'Ready to battle! Just needs a torso first.',
// 		'Almost ready! Just needs everything.',
// 		'Where\'s your head at?',
// 		'Is it still in the garage?',
// 		'You need a mech, I think...',
// 		'No machine, no battle!',
// 		'<i>"I have a mech, therefore I battle"</i>',
// 	],
// 	nolegs: [
// 		'A claw mech would beat you in a battle, and in a race!',
// 		'Do not miss the legs day!',
// 		'That is probably not how we build battle machines!',
// 		'At least you wont stand on floor pads.',
// 		'This torso requires walking legs!',
// 	],
// 	noweapons: [
// 		'You sure don\'t wanna get there without weapons.',
// 		'Were are your arms?',
// 		'No pacifism in the mech arena!',
// 		'Let\' try something more violent!',
// 		'That looks threatening, imagine with weapons.',
// 		'Guns!',
// 		'Be destructive.',
// 		'I\'m sure we have some free weight to equip weapons.'
// 	],
// 	tooheavy: [
// 		'Wouldn\'t be fair to let you go there.',
// 		'That is a lot of metal!',
// 		'Too heavy!'
// 	]
// }

// let setup = []

// let weight = 0


// // Functions

// const fakeClick = element => element.dispatchEvent(new Event('click'))

// const getRandomText = type => randomTexts[type][Math.floor(Math.random() * randomTexts[type].length)]

// const init = () =>
// {
// 	const screenM = WUScreenManager.getInstance(app)
// 	const statsM = WUStatsManager.getInstance()
// 	const itemsM = WUItemsManager.getInstance()
// 	const battleM = WUBattleManager.getInstance()

// 	const dialog = WUPopup.getInstance()
// 	const scrLoading = screenM.getScreen('loading')
// 	const scrWorkshop = screenM.getScreen('workshop')


// 	// Events

// 	scrWorkshop.events.searchBattle = () =>
// 	{
// 		// if (!setup[0])
// 		// {
// 		//     fakeClick(scrWorkshop.slots[0].element)
// 		//     return
// 		// }
// 		// if (!setup[1])
// 		// {
// 		//     fakeClick(scrWorkshop.slots[1].element)
// 		//     return
// 		// }
// 		// if (!(setup[2] || setup[3] || setup[4] || setup[5] || setup[6] || setup[7]))
// 		// {
// 		//     fakeClick(scrWorkshop.slots[2].element)
// 		//     return
// 		// }
// 		// if (weight > 1014)
// 		// {
// 		//     dialog.ok(getRandomText('tooheavy'), 'Over Weight')
// 		//     return
// 		// }

// 		const pos = [[5, 6], [4, 7], [3, 8], [2, 9]][Math.floor(Math.random() * 4)]

// 		const player = {
// 			position: pos[0],
// 			id: '1',
// 			name: 'You',
// 			items: [
// 				itemsM.getByName('Interceptor'),
// 				itemsM.getByName('Iron Boots'),
// 				itemsM.getByName('Annihilation'),
// 				itemsM.getByName('Mercy'),
// 				itemsM.getByName('EMP'),
// 				null,
// 				null,
// 				itemsM.getByName('Night Eagle'),
// 			],
// 		}

// 		const enemie = {
// 			position: pos[1],
// 			id: '2',
// 			name: 'Certainly not you',
// 			items: [
// 				itemsM.getByName('Zarkares'),
// 				itemsM.getByName('Lightning Supporters'),
// 				itemsM.getByName('Annihilation'),
// 			],
// 		}

// 		battleM.startBattle(player, enemie)
// 		screenM.goToScreen('battle')
// 	}

// 	scrWorkshop.events.updateSetup = set =>
// 	{
// 		setup = set
// 		weight = setup.map(a => a ? a.stats.weight : 0).reduce((x, y) => x + y)
// 	}

// 	battleM.events.useItem = data =>
// 	{
// 		console.log(data)
// 	}

// 	battleM.events.finish = winner =>
// 	{
// 		console.log(winner.name, 'won')
// 		screenM.goToScreen('workshop')
// 	}

// 	// End of Events


// 	// Loading

// 	scrLoading.setText('Loading assets...')
// 	screenM.goToScreen('loading')
	
// 	itemsM.load()
// 	statsM.load()

// 	const updateLoad = setInterval(() =>
// 	{
// 		if (itemsM.ready && statsM.ready)
// 		{
// 			clearInterval(updateLoad)

// 			scrLoading.setProgress(100)
// 			scrLoading.setText('Welcome to Workshop Unlimited')
// 			scrWorkshop.init()

// 			setTimeout(() => screenM.goToScreen('workshop'), 2000)
// 		}
// 		else
// 		{
// 			const progress = itemsM.getLoadingProgress() + statsM.getLoadingProgress()
// 			scrLoading.setProgress((progress * 50).toFixed(1))
// 		}
// 	}, 100)

// 	// End of Loading
// }



// // Start

// if (hasFullES6Support)
// {
// 	init()
// }
// else
// {
// 	const text = 'Oops! Your current browser does not support EcmaScript6. Without EcmaScript6, workshopScreen Unlimited will not work! Please update your browser, or use a better one.'

// 	app.innerHTML = '<div id="es6-warning">' + text + '</div>'
// }
