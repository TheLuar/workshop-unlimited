'use strict'


// Packages

import { SingletonElement } from './bases/SingletonElement.js'
import { ItemsManager } from './managers/ItemsManager.js'
import { StatsManager } from './managers/StatsManager.js'
import { LoadingManager } from './managers/LoadingManager.js'
import { SettingsManager } from './managers/SettingsManager.js'
import { WorkshopManager } from './managers/WorkshopManager.js'
import { ToolTip } from './mobiles/ToolTip.js'


// Class

export const WorkshopUnlimited = class extends SingletonElement
{
	constructor ()
	{
		super()

		this.lastScreen = ''
		this.currentScreen = ''
		this.settingsM = null
		this.itemsM = null
		this.statsM = null
		this.workshopM = null
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

		this.itemsM = ItemsManager.gi()
		this.statsM = StatsManager.gi()
		this.loadingM = LoadingManager.gi()
		this.workshopM = WorkshopManager.gi()
		this.settingsM = SettingsManager.gi()
		this.toolTip = ToolTip.gi()

		this.itemsM.init(items)
		this.statsM.init(stats)
		this.loadingM.init()
		this.settingsM.init()
		// this.workshopM.init() workshop is initialized after images are loaded
		this.toolTip.init(this)

		this.screenManagers = {
			loading: this.loadingM,
			workshop: this.workshopM,
			settings: this.settingsM,
		}


		// Listeners

		this.settingsM.on('toggle-arena-buffs', state =>
		{
			window.arenaBuffs = state
			this.workshopM.updateSummary()
		})
		this.settingsM.on('goto', key => this.goToScreen(key))

		this.workshopM.on('goto', key => this.goToScreen(key))


		this.goToScreen('loading')
		this.appendChildren(this.loadingM.screen, this.settingsM.screen, this.toolTip)
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
