import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:19
* @route '/photosphere'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/photosphere',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:19
* @route '/photosphere'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:19
* @route '/photosphere'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:19
* @route '/photosphere'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:19
* @route '/photosphere'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:19
* @route '/photosphere'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:19
* @route '/photosphere'
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
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:51
* @route '/photosphere'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/photosphere',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:51
* @route '/photosphere'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:51
* @route '/photosphere'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:51
* @route '/photosphere'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:51
* @route '/photosphere'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:102
* @route '/photosphere/{photosphere}'
*/
export const show = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/photosphere/{photosphere}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:102
* @route '/photosphere/{photosphere}'
*/
show.url = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { photosphere: args }
    }

    if (Array.isArray(args)) {
        args = {
            photosphere: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        photosphere: args.photosphere,
    }

    return show.definition.url
            .replace('{photosphere}', parsedArgs.photosphere.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:102
* @route '/photosphere/{photosphere}'
*/
show.get = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:102
* @route '/photosphere/{photosphere}'
*/
show.head = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:102
* @route '/photosphere/{photosphere}'
*/
const showForm = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:102
* @route '/photosphere/{photosphere}'
*/
showForm.get = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:102
* @route '/photosphere/{photosphere}'
*/
showForm.head = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:134
* @route '/photosphere/{photosphere}'
*/
export const update = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/photosphere/{photosphere}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:134
* @route '/photosphere/{photosphere}'
*/
update.url = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { photosphere: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { photosphere: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            photosphere: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        photosphere: typeof args.photosphere === 'object'
        ? args.photosphere.id
        : args.photosphere,
    }

    return update.definition.url
            .replace('{photosphere}', parsedArgs.photosphere.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:134
* @route '/photosphere/{photosphere}'
*/
update.put = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:134
* @route '/photosphere/{photosphere}'
*/
update.patch = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:134
* @route '/photosphere/{photosphere}'
*/
const updateForm = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:134
* @route '/photosphere/{photosphere}'
*/
updateForm.put = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:134
* @route '/photosphere/{photosphere}'
*/
updateForm.patch = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\PhotosphereController::destroy
* @see app/Http/Controllers/PhotosphereController.php:224
* @route '/photosphere/{photosphere}'
*/
export const destroy = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/photosphere/{photosphere}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PhotosphereController::destroy
* @see app/Http/Controllers/PhotosphereController.php:224
* @route '/photosphere/{photosphere}'
*/
destroy.url = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { photosphere: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { photosphere: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            photosphere: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        photosphere: typeof args.photosphere === 'object'
        ? args.photosphere.id
        : args.photosphere,
    }

    return destroy.definition.url
            .replace('{photosphere}', parsedArgs.photosphere.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::destroy
* @see app/Http/Controllers/PhotosphereController.php:224
* @route '/photosphere/{photosphere}'
*/
destroy.delete = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PhotosphereController::destroy
* @see app/Http/Controllers/PhotosphereController.php:224
* @route '/photosphere/{photosphere}'
*/
const destroyForm = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotosphereController::destroy
* @see app/Http/Controllers/PhotosphereController.php:224
* @route '/photosphere/{photosphere}'
*/
destroyForm.delete = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const photosphere = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default photosphere