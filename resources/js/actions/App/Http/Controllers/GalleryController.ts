import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/gallery'
*/
const indexc463a1f00bb7b652c89003948f522a19 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc463a1f00bb7b652c89003948f522a19.url(options),
    method: 'get',
})

indexc463a1f00bb7b652c89003948f522a19.definition = {
    methods: ["get","head"],
    url: '/gallery',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/gallery'
*/
indexc463a1f00bb7b652c89003948f522a19.url = (options?: RouteQueryOptions) => {
    return indexc463a1f00bb7b652c89003948f522a19.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/gallery'
*/
indexc463a1f00bb7b652c89003948f522a19.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc463a1f00bb7b652c89003948f522a19.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/gallery'
*/
indexc463a1f00bb7b652c89003948f522a19.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexc463a1f00bb7b652c89003948f522a19.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/gallery'
*/
const indexc463a1f00bb7b652c89003948f522a19Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc463a1f00bb7b652c89003948f522a19.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/gallery'
*/
indexc463a1f00bb7b652c89003948f522a19Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc463a1f00bb7b652c89003948f522a19.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/gallery'
*/
indexc463a1f00bb7b652c89003948f522a19Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc463a1f00bb7b652c89003948f522a19.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexc463a1f00bb7b652c89003948f522a19.form = indexc463a1f00bb7b652c89003948f522a19Form
/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/dashboard/gallery'
*/
const index1e1a85cc2536811aeb2b4f71d3e56ed8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1e1a85cc2536811aeb2b4f71d3e56ed8.url(options),
    method: 'get',
})

index1e1a85cc2536811aeb2b4f71d3e56ed8.definition = {
    methods: ["get","head"],
    url: '/dashboard/gallery',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/dashboard/gallery'
*/
index1e1a85cc2536811aeb2b4f71d3e56ed8.url = (options?: RouteQueryOptions) => {
    return index1e1a85cc2536811aeb2b4f71d3e56ed8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/dashboard/gallery'
*/
index1e1a85cc2536811aeb2b4f71d3e56ed8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1e1a85cc2536811aeb2b4f71d3e56ed8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/dashboard/gallery'
*/
index1e1a85cc2536811aeb2b4f71d3e56ed8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index1e1a85cc2536811aeb2b4f71d3e56ed8.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/dashboard/gallery'
*/
const index1e1a85cc2536811aeb2b4f71d3e56ed8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index1e1a85cc2536811aeb2b4f71d3e56ed8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/dashboard/gallery'
*/
index1e1a85cc2536811aeb2b4f71d3e56ed8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index1e1a85cc2536811aeb2b4f71d3e56ed8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/dashboard/gallery'
*/
index1e1a85cc2536811aeb2b4f71d3e56ed8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index1e1a85cc2536811aeb2b4f71d3e56ed8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index1e1a85cc2536811aeb2b4f71d3e56ed8.form = index1e1a85cc2536811aeb2b4f71d3e56ed8Form

export const index = {
    '/gallery': indexc463a1f00bb7b652c89003948f522a19,
    '/dashboard/gallery': index1e1a85cc2536811aeb2b4f71d3e56ed8,
}

/**
* @see \App\Http\Controllers\GalleryController::store
* @see app/Http/Controllers/GalleryController.php:45
* @route '/gallery'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/gallery',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\GalleryController::store
* @see app/Http/Controllers/GalleryController.php:45
* @route '/gallery'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::store
* @see app/Http/Controllers/GalleryController.php:45
* @route '/gallery'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GalleryController::store
* @see app/Http/Controllers/GalleryController.php:45
* @route '/gallery'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GalleryController::store
* @see app/Http/Controllers/GalleryController.php:45
* @route '/gallery'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:75
* @route '/gallery/{gallery}'
*/
const show3586bb447a0ac3279147fedafe82425f = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show3586bb447a0ac3279147fedafe82425f.url(args, options),
    method: 'get',
})

show3586bb447a0ac3279147fedafe82425f.definition = {
    methods: ["get","head"],
    url: '/gallery/{gallery}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:75
* @route '/gallery/{gallery}'
*/
show3586bb447a0ac3279147fedafe82425f.url = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show3586bb447a0ac3279147fedafe82425f.definition.url
            .replace('{gallery}', parsedArgs.gallery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:75
* @route '/gallery/{gallery}'
*/
show3586bb447a0ac3279147fedafe82425f.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show3586bb447a0ac3279147fedafe82425f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:75
* @route '/gallery/{gallery}'
*/
show3586bb447a0ac3279147fedafe82425f.head = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show3586bb447a0ac3279147fedafe82425f.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:75
* @route '/gallery/{gallery}'
*/
const show3586bb447a0ac3279147fedafe82425fForm = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3586bb447a0ac3279147fedafe82425f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:75
* @route '/gallery/{gallery}'
*/
show3586bb447a0ac3279147fedafe82425fForm.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3586bb447a0ac3279147fedafe82425f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:75
* @route '/gallery/{gallery}'
*/
show3586bb447a0ac3279147fedafe82425fForm.head = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3586bb447a0ac3279147fedafe82425f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show3586bb447a0ac3279147fedafe82425f.form = show3586bb447a0ac3279147fedafe82425fForm
/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:75
* @route '/dashboard/gallery/{gallery}'
*/
const show57e5663ca9c571a34511d058595402ce = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show57e5663ca9c571a34511d058595402ce.url(args, options),
    method: 'get',
})

show57e5663ca9c571a34511d058595402ce.definition = {
    methods: ["get","head"],
    url: '/dashboard/gallery/{gallery}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:75
* @route '/dashboard/gallery/{gallery}'
*/
show57e5663ca9c571a34511d058595402ce.url = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show57e5663ca9c571a34511d058595402ce.definition.url
            .replace('{gallery}', parsedArgs.gallery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:75
* @route '/dashboard/gallery/{gallery}'
*/
show57e5663ca9c571a34511d058595402ce.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show57e5663ca9c571a34511d058595402ce.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:75
* @route '/dashboard/gallery/{gallery}'
*/
show57e5663ca9c571a34511d058595402ce.head = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show57e5663ca9c571a34511d058595402ce.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:75
* @route '/dashboard/gallery/{gallery}'
*/
const show57e5663ca9c571a34511d058595402ceForm = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show57e5663ca9c571a34511d058595402ce.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:75
* @route '/dashboard/gallery/{gallery}'
*/
show57e5663ca9c571a34511d058595402ceForm.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show57e5663ca9c571a34511d058595402ce.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:75
* @route '/dashboard/gallery/{gallery}'
*/
show57e5663ca9c571a34511d058595402ceForm.head = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show57e5663ca9c571a34511d058595402ce.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show57e5663ca9c571a34511d058595402ce.form = show57e5663ca9c571a34511d058595402ceForm

export const show = {
    '/gallery/{gallery}': show3586bb447a0ac3279147fedafe82425f,
    '/dashboard/gallery/{gallery}': show57e5663ca9c571a34511d058595402ce,
}

/**
* @see \App\Http\Controllers\GalleryController::update
* @see app/Http/Controllers/GalleryController.php:103
* @route '/gallery/{gallery}'
*/
export const update = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/gallery/{gallery}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\GalleryController::update
* @see app/Http/Controllers/GalleryController.php:103
* @route '/gallery/{gallery}'
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
* @see app/Http/Controllers/GalleryController.php:103
* @route '/gallery/{gallery}'
*/
update.put = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\GalleryController::update
* @see app/Http/Controllers/GalleryController.php:103
* @route '/gallery/{gallery}'
*/
update.patch = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\GalleryController::update
* @see app/Http/Controllers/GalleryController.php:103
* @route '/gallery/{gallery}'
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
* @see app/Http/Controllers/GalleryController.php:103
* @route '/gallery/{gallery}'
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
* @see app/Http/Controllers/GalleryController.php:103
* @route '/gallery/{gallery}'
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
* @see app/Http/Controllers/GalleryController.php:132
* @route '/gallery/{gallery}'
*/
export const destroy = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/gallery/{gallery}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\GalleryController::destroy
* @see app/Http/Controllers/GalleryController.php:132
* @route '/gallery/{gallery}'
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
* @see app/Http/Controllers/GalleryController.php:132
* @route '/gallery/{gallery}'
*/
destroy.delete = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\GalleryController::destroy
* @see app/Http/Controllers/GalleryController.php:132
* @route '/gallery/{gallery}'
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
* @see app/Http/Controllers/GalleryController.php:132
* @route '/gallery/{gallery}'
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

/**
* @see \App\Http\Controllers\GalleryController::create
* @see app/Http/Controllers/GalleryController.php:35
* @route '/dashboard/gallery/new'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/gallery/new',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GalleryController::create
* @see app/Http/Controllers/GalleryController.php:35
* @route '/dashboard/gallery/new'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::create
* @see app/Http/Controllers/GalleryController.php:35
* @route '/dashboard/gallery/new'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::create
* @see app/Http/Controllers/GalleryController.php:35
* @route '/dashboard/gallery/new'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GalleryController::create
* @see app/Http/Controllers/GalleryController.php:35
* @route '/dashboard/gallery/new'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::create
* @see app/Http/Controllers/GalleryController.php:35
* @route '/dashboard/gallery/new'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::create
* @see app/Http/Controllers/GalleryController.php:35
* @route '/dashboard/gallery/new'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \App\Http\Controllers\GalleryController::edit
* @see app/Http/Controllers/GalleryController.php:85
* @route '/dashboard/gallery/{gallery}/edit'
*/
export const edit = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/gallery/{gallery}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GalleryController::edit
* @see app/Http/Controllers/GalleryController.php:85
* @route '/dashboard/gallery/{gallery}/edit'
*/
edit.url = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{gallery}', parsedArgs.gallery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::edit
* @see app/Http/Controllers/GalleryController.php:85
* @route '/dashboard/gallery/{gallery}/edit'
*/
edit.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::edit
* @see app/Http/Controllers/GalleryController.php:85
* @route '/dashboard/gallery/{gallery}/edit'
*/
edit.head = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GalleryController::edit
* @see app/Http/Controllers/GalleryController.php:85
* @route '/dashboard/gallery/{gallery}/edit'
*/
const editForm = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::edit
* @see app/Http/Controllers/GalleryController.php:85
* @route '/dashboard/gallery/{gallery}/edit'
*/
editForm.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::edit
* @see app/Http/Controllers/GalleryController.php:85
* @route '/dashboard/gallery/{gallery}/edit'
*/
editForm.head = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const GalleryController = { index, store, show, update, destroy, create, edit }

export default GalleryController