import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:12
* @route '/photospheres'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/photospheres',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:12
* @route '/photospheres'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:12
* @route '/photospheres'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:12
* @route '/photospheres'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:12
* @route '/photospheres'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:12
* @route '/photospheres'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:12
* @route '/photospheres'
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
* @see app/Http/Controllers/PhotosphereController.php:28
* @route '/photospheres'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/photospheres',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:28
* @route '/photospheres'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:28
* @route '/photospheres'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:28
* @route '/photospheres'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:28
* @route '/photospheres'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:36
* @route '/photospheres/{photosphere}'
*/
export const show = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/photospheres/{photosphere}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:36
* @route '/photospheres/{photosphere}'
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
* @see app/Http/Controllers/PhotosphereController.php:36
* @route '/photospheres/{photosphere}'
*/
show.get = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:36
* @route '/photospheres/{photosphere}'
*/
show.head = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:36
* @route '/photospheres/{photosphere}'
*/
const showForm = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:36
* @route '/photospheres/{photosphere}'
*/
showForm.get = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:36
* @route '/photospheres/{photosphere}'
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
* @see app/Http/Controllers/PhotosphereController.php:52
* @route '/photospheres/{photosphere}'
*/
export const update = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/photospheres/{photosphere}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:52
* @route '/photospheres/{photosphere}'
*/
update.url = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{photosphere}', parsedArgs.photosphere.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:52
* @route '/photospheres/{photosphere}'
*/
update.put = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:52
* @route '/photospheres/{photosphere}'
*/
update.patch = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:52
* @route '/photospheres/{photosphere}'
*/
const updateForm = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/PhotosphereController.php:52
* @route '/photospheres/{photosphere}'
*/
updateForm.put = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/PhotosphereController.php:52
* @route '/photospheres/{photosphere}'
*/
updateForm.patch = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/PhotosphereController.php:60
* @route '/photospheres/{photosphere}'
*/
export const destroy = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/photospheres/{photosphere}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PhotosphereController::destroy
* @see app/Http/Controllers/PhotosphereController.php:60
* @route '/photospheres/{photosphere}'
*/
destroy.url = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroy.definition.url
            .replace('{photosphere}', parsedArgs.photosphere.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::destroy
* @see app/Http/Controllers/PhotosphereController.php:60
* @route '/photospheres/{photosphere}'
*/
destroy.delete = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PhotosphereController::destroy
* @see app/Http/Controllers/PhotosphereController.php:60
* @route '/photospheres/{photosphere}'
*/
const destroyForm = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/PhotosphereController.php:60
* @route '/photospheres/{photosphere}'
*/
destroyForm.delete = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const photospheres = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default photospheres