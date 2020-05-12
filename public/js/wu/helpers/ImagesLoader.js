'use strict'


// Packages

import { MISSING_TEXTURE } from '../consts.js'
import { getImgBlob } from '../utils/GeneralUtils.js'


// Function

export const imagesLoader = (images, step, oneach) => new Promise(resolve =>
{
	const result = []

	let loading = 0
	let i = 0

	const roll = () =>
	{
		loading++

		const j = i

		const [src, mime] = images[j]

		getImgBlob(src, mime)
		.then(blob => result[j] = blob)
		.catch(() => result[j] = MISSING_TEXTURE)
		.then(() =>
		{
			loading--
			oneach(result[j], j)
			if (images[i + 1])
			{
				while (loading < step && images[++i]) roll()
			}
			else
			{
				resolve(result)
			}
		})
	}

	roll()
})
