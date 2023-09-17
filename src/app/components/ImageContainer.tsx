import type { Photo } from '@/models/Image'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  photo: Photo
  index: number
}

export default function ImageContainer({ photo, index }: Props) {
  const widthHeightRatio = photo.height / photo.width
  const galleryHeight = Math.ceil(250 * widthHeightRatio)
  const DISTANCE_BETWEEN_ROWS = 10
  const adjustion = 1
  const photoSpans = Math.ceil(galleryHeight / DISTANCE_BETWEEN_ROWS) + adjustion

  return (
    <div className="w-[250px] justify-self-center" style={{ gridRow: `span ${photoSpans}` }}>
      <Link href={photo.url} target="_blank" className='grid place-items-center'>
        <div className='overflow-hidden rounded-xl group'>
          <Image
            src={photo.src.large}
            alt={photo.alt}
            // fill={true}
            width={photo.width}
            height={photo.height}
            className="group-hover:opacity-80"
            sizes="250px"
            // sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
            priority={index === 0}
            placeholder="blur"
            blurDataURL={photo.blurredDataUrl}
          ></Image>
        </div>
      </Link>
    </div>
  )
}
