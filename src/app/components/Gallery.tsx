import fetchImages from '@/app/lib/fetchImages'
import addBlurDataUrls from '@/app/lib/addBlurDataUrls'
import type { ImageResult } from '@/models/Image'
import ImageContainer from './ImageContainer'

export default async function Gallery() {
  const url = 'https://api.pexels.com/v1/curated'
  const images: ImageResult | undefined = await fetchImages(url)

  if (!images) {
    return <h2>Images not found</h2>
  }

  const photoWithBlur = await addBlurDataUrls(images)

  return (
    <>
      <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
        {photoWithBlur.map((photo, index) => {
          return <ImageContainer key={photo.id} photo={photo} index={index} />
        })}
      </section>
    </>
  )
}
