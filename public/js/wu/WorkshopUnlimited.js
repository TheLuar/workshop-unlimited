'use strict'


// Packages

import { SingletonElement } from './bases/SingletonElement.js'
import { SocketManager } from './managers/SocketManager.js'
import { ItemsManager } from './managers/ItemsManager.js'
import { StatsManager } from './managers/StatsManager.js'

import LoadingManager  from './screens/loading/LoadingManager.js'
import SettingsManager from './screens/settings/SettingsManager.js'
import WorkshopManager from './screens/workshop/WorkshopManager.js'
import BattleManager   from './screens/battle/BattleManager.js'

import { ToolTip } from './mobiles/ToolTip.js'
import { GeneralSettings } from './helpers/GeneralSettings.js'


// Class

export const WorkshopUnlimited = class extends SingletonElement
{
	lastScreen = ''
	currentScreen = ''
	socketM = null
	itemsM = null
	statsM = null
	workshopM = null
	loadingM = null
	settingsM = null
	battleM = null
	screens = null
	toolTip = null
	generalSettings = null

	constructor ()
	{
		super()
	}

	init (conf = {})
	{
		const {
			container = document.body,
			items = {},
			stats = {},
		} = conf
		

		container.appendChild(this)


		this.socketM = SocketManager.gi()
		this.itemsM = ItemsManager.gi()
		this.statsM = StatsManager.gi()
		this.loadingM = LoadingManager.gi()
		this.workshopM = WorkshopManager.gi()
		this.settingsM = SettingsManager.gi()
		this.battleM = BattleManager.gi()
		this.toolTip = ToolTip.gi()
		this.generalSettings = GeneralSettings.gi()


		this.generalSettings.init()
		this.socketM.init()
		this.itemsM.init(items)
		this.statsM.init(stats)
		this.loadingM.init()
		this.settingsM.init()
		// this.workshopM.init() workshop is initialized after images are loaded
		this.battleM.init()
		// this.toolTip.init(this) init after images loaded


		this.screenManagers = {
			loading: this.loadingM,
			workshop: this.workshopM,
			settings: this.settingsM,
			battle: this.battleM,
		}


		// Listeners

		this.settingsM.on('goto', key => this.goToScreen(key))
		this.workshopM.on('goto', key => this.goToScreen(key))


		this.goToScreen('loading')
		this.appendChildren(this.loadingM.screen, this.settingsM.screen, this.battleM.screen, this.toolTip)
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
		this.toolTip.init(this)
		this.appendChildren(this.workshopM.screen)
		
		this.loadingM.setText('Welcome to Workshop Unlimited')

		setTimeout(() => this.goToScreen('workshop'), 2000)
	}

	goToScreen (name)
	{
		if (name === '_')
		{
			if (!this.lastScreen) throw new Error('Asked to go back, but no previous screen recorded')
		
			return this.goToScreen(this.lastScreen)
		}

		if (!this.screenManagers[name]) throw new Error('No screen with name ' + name)

		this.lastScreen = this.currentScreen
		this.currentScreen = name

		for (const k in this.screenManagers)
		{
			if (!this.screenManagers[k].initialized) continue
			if (!this.screenManagers[k].screen.visible) continue

			this.screenManagers[k].screen.hide()
		}

		this.screenManagers[name].screen.show()
	}
}
