import fetchImages from '@/app/lib/fetchImages'
import addBlurDataUrls from '@/app/lib/addBlurDataUrls'
import type { ImageResult } from '@/models/Image'
import ImageContainer from './ImageContainer'

type Props = {
  topic?: string | undefined
}

export default async function Gallery({ topic }: Props) {
  const url = topic ? `https://api.pexels.com/v1/search?query=${topic}` : 'https://api.pexels.com/v1/curated'
  const images: ImageResult | undefined = await fetchImages(url)

  if (!images) return <h2>Images not found</h2>

  const photoWithBlur = await addBlurDataUrls(images)

  return (
    <>
      <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
        {photoWithBlur.map((photo, index) => {
          return <ImageContainer key={photo.id} photo={photo} index={index} />
        })}
      </section>
    </>
  )
}
