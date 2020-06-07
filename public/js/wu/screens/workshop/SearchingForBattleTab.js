'use strict'


// Outer

import { SingletonElement } from '../../bases/SingletonElement.js'
import { BasicButton } from '../../mobiles/BasicButton.js'
import { div } from '../../utils/GeneralUtils.js'


// Export

export const SearchingForBattleTab = class extends SingletonElement
{
	constructor ()
	{
		super()
		
		this.classList.add('tab')
	}

	init ()
	{
		const elm_loadingAnim = div('loading-animation')
		const ctn_searching = div('ctn-searching', { innerText: 'Searching for battle...' }, [elm_loadingAnim])

		this.btn_cancel = new BasicButton({
			text: 'Cancel',
			className: 'btn-cancel',
		})

		this.appendChildren(ctn_searching, this.btn_cancel)

		this._init()
	}
}
