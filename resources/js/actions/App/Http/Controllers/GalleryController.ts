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
* @route '/admin/gallery'
*/
const index0ba2453b5db1828b00ed7dab28bfb223 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0ba2453b5db1828b00ed7dab28bfb223.url(options),
    method: 'get',
})

index0ba2453b5db1828b00ed7dab28bfb223.definition = {
    methods: ["get","head"],
    url: '/admin/gallery',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/admin/gallery'
*/
index0ba2453b5db1828b00ed7dab28bfb223.url = (options?: RouteQueryOptions) => {
    return index0ba2453b5db1828b00ed7dab28bfb223.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/admin/gallery'
*/
index0ba2453b5db1828b00ed7dab28bfb223.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0ba2453b5db1828b00ed7dab28bfb223.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/admin/gallery'
*/
index0ba2453b5db1828b00ed7dab28bfb223.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index0ba2453b5db1828b00ed7dab28bfb223.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/admin/gallery'
*/
const index0ba2453b5db1828b00ed7dab28bfb223Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index0ba2453b5db1828b00ed7dab28bfb223.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/admin/gallery'
*/
index0ba2453b5db1828b00ed7dab28bfb223Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index0ba2453b5db1828b00ed7dab28bfb223.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::index
* @see app/Http/Controllers/GalleryController.php:19
* @route '/admin/gallery'
*/
index0ba2453b5db1828b00ed7dab28bfb223Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index0ba2453b5db1828b00ed7dab28bfb223.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index0ba2453b5db1828b00ed7dab28bfb223.form = index0ba2453b5db1828b00ed7dab28bfb223Form

export const index = {
    '/gallery': indexc463a1f00bb7b652c89003948f522a19,
    '/admin/gallery': index0ba2453b5db1828b00ed7dab28bfb223,
}

/**
* @see \App\Http\Controllers\GalleryController::store
* @see app/Http/Controllers/GalleryController.php:44
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
* @see app/Http/Controllers/GalleryController.php:44
* @route '/gallery'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::store
* @see app/Http/Controllers/GalleryController.php:44
* @route '/gallery'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GalleryController::store
* @see app/Http/Controllers/GalleryController.php:44
* @route '/gallery'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\GalleryController::store
* @see app/Http/Controllers/GalleryController.php:44
* @route '/gallery'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:74
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
* @see app/Http/Controllers/GalleryController.php:74
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
* @see app/Http/Controllers/GalleryController.php:74
* @route '/gallery/{gallery}'
*/
show3586bb447a0ac3279147fedafe82425f.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show3586bb447a0ac3279147fedafe82425f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:74
* @route '/gallery/{gallery}'
*/
show3586bb447a0ac3279147fedafe82425f.head = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show3586bb447a0ac3279147fedafe82425f.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:74
* @route '/gallery/{gallery}'
*/
const show3586bb447a0ac3279147fedafe82425fForm = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3586bb447a0ac3279147fedafe82425f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:74
* @route '/gallery/{gallery}'
*/
show3586bb447a0ac3279147fedafe82425fForm.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3586bb447a0ac3279147fedafe82425f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:74
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
* @see app/Http/Controllers/GalleryController.php:74
* @route '/admin/gallery/{gallery}'
*/
const show551bd38aeba70af4b9824406b531b7a4 = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show551bd38aeba70af4b9824406b531b7a4.url(args, options),
    method: 'get',
})

show551bd38aeba70af4b9824406b531b7a4.definition = {
    methods: ["get","head"],
    url: '/admin/gallery/{gallery}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:74
* @route '/admin/gallery/{gallery}'
*/
show551bd38aeba70af4b9824406b531b7a4.url = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show551bd38aeba70af4b9824406b531b7a4.definition.url
            .replace('{gallery}', parsedArgs.gallery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:74
* @route '/admin/gallery/{gallery}'
*/
show551bd38aeba70af4b9824406b531b7a4.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show551bd38aeba70af4b9824406b531b7a4.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:74
* @route '/admin/gallery/{gallery}'
*/
show551bd38aeba70af4b9824406b531b7a4.head = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show551bd38aeba70af4b9824406b531b7a4.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:74
* @route '/admin/gallery/{gallery}'
*/
const show551bd38aeba70af4b9824406b531b7a4Form = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show551bd38aeba70af4b9824406b531b7a4.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:74
* @route '/admin/gallery/{gallery}'
*/
show551bd38aeba70af4b9824406b531b7a4Form.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show551bd38aeba70af4b9824406b531b7a4.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::show
* @see app/Http/Controllers/GalleryController.php:74
* @route '/admin/gallery/{gallery}'
*/
show551bd38aeba70af4b9824406b531b7a4Form.head = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show551bd38aeba70af4b9824406b531b7a4.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show551bd38aeba70af4b9824406b531b7a4.form = show551bd38aeba70af4b9824406b531b7a4Form

export const show = {
    '/gallery/{gallery}': show3586bb447a0ac3279147fedafe82425f,
    '/admin/gallery/{gallery}': show551bd38aeba70af4b9824406b531b7a4,
}

/**
* @see \App\Http\Controllers\GalleryController::update
* @see app/Http/Controllers/GalleryController.php:97
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
* @see app/Http/Controllers/GalleryController.php:97
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
* @see app/Http/Controllers/GalleryController.php:97
* @route '/gallery/{gallery}'
*/
update.put = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\GalleryController::update
* @see app/Http/Controllers/GalleryController.php:97
* @route '/gallery/{gallery}'
*/
update.patch = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\GalleryController::update
* @see app/Http/Controllers/GalleryController.php:97
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
* @see app/Http/Controllers/GalleryController.php:97
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
* @see app/Http/Controllers/GalleryController.php:97
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
* @see app/Http/Controllers/GalleryController.php:126
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
* @see app/Http/Controllers/GalleryController.php:126
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
* @see app/Http/Controllers/GalleryController.php:126
* @route '/gallery/{gallery}'
*/
destroy.delete = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\GalleryController::destroy
* @see app/Http/Controllers/GalleryController.php:126
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
* @see app/Http/Controllers/GalleryController.php:126
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
* @see app/Http/Controllers/GalleryController.php:34
* @route '/admin/gallery/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/gallery/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GalleryController::create
* @see app/Http/Controllers/GalleryController.php:34
* @route '/admin/gallery/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\GalleryController::create
* @see app/Http/Controllers/GalleryController.php:34
* @route '/admin/gallery/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::create
* @see app/Http/Controllers/GalleryController.php:34
* @route '/admin/gallery/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GalleryController::create
* @see app/Http/Controllers/GalleryController.php:34
* @route '/admin/gallery/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::create
* @see app/Http/Controllers/GalleryController.php:34
* @route '/admin/gallery/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::create
* @see app/Http/Controllers/GalleryController.php:34
* @route '/admin/gallery/create'
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
* @see app/Http/Controllers/GalleryController.php:84
* @route '/admin/gallery/{gallery}/edit'
*/
export const edit = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/gallery/{gallery}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\GalleryController::edit
* @see app/Http/Controllers/GalleryController.php:84
* @route '/admin/gallery/{gallery}/edit'
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
* @see app/Http/Controllers/GalleryController.php:84
* @route '/admin/gallery/{gallery}/edit'
*/
edit.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::edit
* @see app/Http/Controllers/GalleryController.php:84
* @route '/admin/gallery/{gallery}/edit'
*/
edit.head = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\GalleryController::edit
* @see app/Http/Controllers/GalleryController.php:84
* @route '/admin/gallery/{gallery}/edit'
*/
const editForm = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::edit
* @see app/Http/Controllers/GalleryController.php:84
* @route '/admin/gallery/{gallery}/edit'
*/
editForm.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\GalleryController::edit
* @see app/Http/Controllers/GalleryController.php:84
* @route '/admin/gallery/{gallery}/edit'
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