import { z } from 'zod';

export const navigationAnchorSchema = z
    .object({
        photosphere_id: z.coerce.number().int().positive(),
        target_photosphere_id: z.coerce.number().int().positive(),
        name: z.string().min(1).max(191),
        longitude: z.coerce.number().gte(-180).lte(180),
        latitude: z.coerce.number().gte(-90).lte(90),
    })
    .superRefine((data, ctx) => {
        if (data.target_photosphere_id === data.photosphere_id) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['target_photosphere_id'], // point the error at the target field
                message: 'Target must be different from source',
            });
        }
    });

export type NavigationAnchorInput = z.infer<typeof navigationAnchorSchema>;
