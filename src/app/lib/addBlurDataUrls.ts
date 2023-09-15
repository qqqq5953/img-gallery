import { getPlaiceholder } from 'plaiceholder'
import type { Photo, ImageResult } from '@/models/Image'

async function getBase64(imageUrl: string) {
  try {
    const res = await fetch(imageUrl)
    if (!res.ok)
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`)
    const arrayBuffer = await res.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    const { base64 } = await getPlaiceholder(buffer)

    // console.log(base64)
    return base64
  } catch (err) {
    if (err instanceof Error) console.log(err.stack)
  }
}

export default async function addBlurDataUrls(
  images: ImageResult
): Promise<Photo[]> {
  const promise = images.photos.map((photo) => {
    return getBase64(photo.src.large)
  })

  const base64Urls = await Promise.all(promise)

  const base64Image: Photo[] = images.photos.map((photo, i) => {
    photo.blurredDataUrl = base64Urls[i]
    return photo
  })

  return base64Image
}
