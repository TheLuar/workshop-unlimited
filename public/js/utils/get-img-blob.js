'use strict';

export const getImgBlob = (src, mimeType) =>
{
    const cnv = document.createElement('canvas')
    const ctx = cnv.getContext('2d')
    const img = document.createElement('img')

    return new Promise((resolve, reject) =>
    {
        img.onload = e =>
        {
            cnv.width  = e.target.naturalWidth
            cnv.height = e.target.naturalHeight
            ctx.drawImage(e.target, 0, 0)
            cnv.toBlob(blob => resolve(URL.createObjectURL(blob)), mimeType)
        }

        img.onerror = e => reject(e)

        img.src = src
    })
}
