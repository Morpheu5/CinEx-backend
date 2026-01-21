<script setup lang="ts">
import AppLayout from '@/layouts/AppLayout.vue'
import { type BreadcrumbItem } from '@/types'
import { Head, router } from '@inertiajs/vue3'
import { useForm } from 'vee-validate'
import { Button } from '@/components/ui/button'
import { toTypedSchema } from '@vee-validate/zod'
import { toast } from 'vue-sonner'
import { route } from 'ziggy-js'
import TheatreForm from './_Form.vue'
import { theatreSchema, type TheatreSchema } from '@/pages/admin/theatre/_schema'

const props = defineProps<{
    theatre: App.Data.TheatreData,
}>();

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: route('admin'),
    },
    {
        title: 'Theatres',
        href: route('admin.theatre.index'),
    },
    {
        title: props.theatre.name,
        href: route('admin.theatre.show', props.theatre.id),
    },
];

const { handleSubmit } = useForm<TheatreSchema>({
    validationSchema: toTypedSchema(theatreSchema),
    initialValues: props.theatre,
});

const submit = handleSubmit((values) => {
    router.put(route('api.v1.theatre.update', props.theatre.id), values, {
        preserveScroll: true,
        onError: (errors) => {
            toast.error(JSON.stringify(errors));
        },
        onSuccess: () => {
            toast.success('Theatre edited!');
        },
    });
});

const onDelete = () => {
    if (confirm('This action cannot be undone. Are you sure you want to proceed?')) {
        router.delete(route('api.v1.theatre.destroy', props.theatre.id), {
            preserveScroll: true,
            onSuccess: () => {},
        });
    }
};
</script>

<template>
    <Head title="Admin" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="p-4">
            <div class="py-3">
                <h1 class="mr-3 inline py-3 text-xl">
                    Editing theatre: <strong>{{ theatre.name }}</strong> (id: {{ theatre.id }})
                </h1>
            </div>
            <form @submit.prevent="submit">
                <TheatreForm>
                    <template #actions>
                        <Button type="submit" variant="default">Save</Button>
                        <div class="spacer w-full"></div>
                        <!--<Button type="button" @click="onDelete" variant="destructive">Delete</Button>-->
                    </template>
                </TheatreForm>
            </form>
        </div>
    </AppLayout>
</template>
