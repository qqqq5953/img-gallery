import { ImageSchemeWithPhoto } from '@/models/Image'
import type { ImageResult } from '@/models/Image'
import env from '@/app/lib/env'

export default async function fetchImages(
  url: string
): Promise<ImageResult | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY
      }
    })

    if (!res.ok) throw new Error('Fetch images error')

    const imageResult: ImageResult = await res.json()

    if (imageResult.total_results === 0) return undefined

    const parseData = ImageSchemeWithPhoto.parse(imageResult)

    return parseData
  } catch (error) {
    if (error instanceof Error) console.log(error.stack)
  }
}
