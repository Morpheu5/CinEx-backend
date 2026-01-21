<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { type BreadcrumbItem } from '@/types'
import { Head, router } from '@inertiajs/vue3'
import { useForm } from 'vee-validate'
import { Button } from '@/components/ui/button'
import { route } from 'ziggy-js'
import { toTypedSchema } from '@vee-validate/zod'
import TheatreForm from './_Form.vue'
import { theatreSchema, type TheatreSchema } from '@/pages/admin/theatre/_schema'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: route('admin'),
    },
    {
        title: 'Theatres',
        href: route('admin.theatre.index'),
    },
];

const { handleSubmit } = useForm<TheatreSchema>({
    validationSchema: toTypedSchema(theatreSchema),
});

const onSubmit = handleSubmit((values) => {
    router.post(route('api.v1.theatre.store'), values, {
        preserveScroll: true,
        onError: (errors) => {
            console.log(errors)
        },
        onSuccess: () => {
            console.log("Awesome!", { values })
        }
    })
})
</script>

<template>
    <Head title="Admin" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div class="py-3">
                <h1 class="text-xl py-3 inline mr-3">New theatre</h1>
            </div>
            <form @submit="onSubmit">
                <TheatreForm>
                    <template #actions>
                        <Button type="submit" variant="default">Save</Button>
                    </template>
                </TheatreForm>
            </form>
        </div>
    </AppLayout>
</template>
