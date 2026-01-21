import * as z from 'zod'

const numOptionalLat = z.preprocess(
    (v) => (v === '' || v === null ? undefined : v),
    z.coerce.number().min(-90).max(90).optional(),
)

const numOptionalLon = z.preprocess(
    (v) => (v === '' || v === null ? undefined : v),
    z.coerce.number().min(-180).max(180).optional(),
)

export const galleryBaseSchema = z.object({
    name: z.string().min(1).max(255),
    latitude: numOptionalLat,
    longitude: numOptionalLon,
})

export type GalleryBaseSchema = z.infer<typeof galleryBaseSchema>

export const galleryCreateSchema = galleryBaseSchema.extend({
    photosphere_id: z.coerce
        .number({ invalid_type_error: 'Please select a photosphere' })
        .int()
        .positive(),
})

export type GalleryCreateSchema = z.infer<typeof galleryCreateSchema>
