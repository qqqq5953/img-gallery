import { z } from 'zod'

const BasicImageScheme = z.object({
  total_results: z.number(),
  page: z.number(),
  per_page: z.number(),
  next_page: z.string().optional(),
  prev_page: z.string().optional()
})

const PhotoScheme = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  src: z.object({
    large: z.string()
  }),
  alt: z.string(),
  blurredDataUrl: z.string().optional()
})

export const ImageSchemeWithPhoto = BasicImageScheme.extend({
  photos: z.array(PhotoScheme)
})

export type Photo = z.infer<typeof PhotoScheme>
export type ImageResult = z.infer<typeof ImageSchemeWithPhoto>
