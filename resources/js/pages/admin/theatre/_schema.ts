import * as z from 'zod';

const numRequiredLat = z.preprocess(
    (v) => (v === '' || v === null ? undefined : v),
    z.coerce.number().min(-90).max(90),
)

const numRequiredLon = z.preprocess(
    (v) => (v === '' || v === null ? undefined : v),
    z.coerce.number().min(-180).max(180),
)

export const theatreSchema = z.object({
    name: z.string().nonempty(),
    city: z.string().nonempty(),
    country: z.string().nonempty(),
    latitude: numRequiredLat,
    longitude: numRequiredLon,
})

export type TheatreSchema = z.infer<typeof theatreSchema>
