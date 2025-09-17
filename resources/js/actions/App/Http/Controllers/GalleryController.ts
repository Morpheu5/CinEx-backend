import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:12
* @route '/galleries'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/galleries',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:12
* @route '/galleries'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:12
* @route '/galleries'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:12
* @route '/galleries'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:12
* @route '/galleries'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:12
* @route '/galleries'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:12
* @route '/galleries'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \App\Http\Controllers\GalleryController::store
* @see app/Http/Controllers/GalleryController.php:28
* @route '/galleries'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/galleries',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GalleryController::store
* @see app/Http/Controllers/GalleryController.php:28
* @route '/galleries'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::store
* @see app/Http/Controllers/GalleryController.php:28
* @route '/galleries'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GalleryController::store
* @see app/Http/Controllers/GalleryController.php:28
* @route '/galleries'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GalleryController::store
* @see app/Http/Controllers/GalleryController.php:28
* @route '/galleries'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:36
* @route '/galleries/{gallery}'
*/
export const show = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/galleries/{gallery}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:36
* @route '/galleries/{gallery}'
*/
show.url = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { gallery: args }
    }

    if (Array.isArray(args)) {
        args = {
            gallery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        gallery: args.gallery,
    }

    return show.definition.url
            .replace('{gallery}', parsedArgs.gallery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:36
* @route '/galleries/{gallery}'
*/
show.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:36
* @route '/galleries/{gallery}'
*/
show.head = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:36
* @route '/galleries/{gallery}'
*/
const showForm = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:36
* @route '/galleries/{gallery}'
*/
showForm.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:36
* @route '/galleries/{gallery}'
*/
showForm.head = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\GalleryController::update
* @see app/Http/Controllers/GalleryController.php:52
* @route '/galleries/{gallery}'
*/
export const update = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/galleries/{gallery}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\GalleryController::update
* @see app/Http/Controllers/GalleryController.php:52
* @route '/galleries/{gallery}'
*/
update.url = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { gallery: args }
    }

    if (Array.isArray(args)) {
        args = {
            gallery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        gallery: args.gallery,
    }

    return update.definition.url
            .replace('{gallery}', parsedArgs.gallery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::update
* @see app/Http/Controllers/GalleryController.php:52
* @route '/galleries/{gallery}'
*/
update.put = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\GalleryController::update
* @see app/Http/Controllers/GalleryController.php:52
* @route '/galleries/{gallery}'
*/
update.patch = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\GalleryController::update
* @see app/Http/Controllers/GalleryController.php:52
* @route '/galleries/{gallery}'
*/
const updateForm = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GalleryController::update
* @see app/Http/Controllers/GalleryController.php:52
* @route '/galleries/{gallery}'
*/
updateForm.put = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GalleryController::update
* @see app/Http/Controllers/GalleryController.php:52
* @route '/galleries/{gallery}'
*/
updateForm.patch = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\GalleryController::destroy
* @see app/Http/Controllers/GalleryController.php:60
* @route '/galleries/{gallery}'
*/
export const destroy = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/galleries/{gallery}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\GalleryController::destroy
* @see app/Http/Controllers/GalleryController.php:60
* @route '/galleries/{gallery}'
*/
destroy.url = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { gallery: args }
    }

    if (Array.isArray(args)) {
        args = {
            gallery: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        gallery: args.gallery,
    }

    return destroy.definition.url
            .replace('{gallery}', parsedArgs.gallery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::destroy
* @see app/Http/Controllers/GalleryController.php:60
* @route '/galleries/{gallery}'
*/
destroy.delete = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\GalleryController::destroy
* @see app/Http/Controllers/GalleryController.php:60
* @route '/galleries/{gallery}'
*/
const destroyForm = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GalleryController::destroy
* @see app/Http/Controllers/GalleryController.php:60
* @route '/galleries/{gallery}'
*/
destroyForm.delete = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const GalleryController = { index, store, show, update, destroy }

export default GalleryController