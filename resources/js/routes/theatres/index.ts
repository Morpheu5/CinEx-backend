import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:12
* @route '/theatres'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/theatres',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:12
* @route '/theatres'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:12
* @route '/theatres'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:12
* @route '/theatres'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:12
* @route '/theatres'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:12
* @route '/theatres'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:12
* @route '/theatres'
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
* @see \App\Http\Controllers\TheatreController::store
* @see app/Http/Controllers/TheatreController.php:28
* @route '/theatres'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/theatres',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TheatreController::store
* @see app/Http/Controllers/TheatreController.php:28
* @route '/theatres'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TheatreController::store
* @see app/Http/Controllers/TheatreController.php:28
* @route '/theatres'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TheatreController::store
* @see app/Http/Controllers/TheatreController.php:28
* @route '/theatres'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TheatreController::store
* @see app/Http/Controllers/TheatreController.php:28
* @route '/theatres'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:36
* @route '/theatres/{theatre}'
*/
export const show = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/theatres/{theatre}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:36
* @route '/theatres/{theatre}'
*/
show.url = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { theatre: args }
    }

    if (Array.isArray(args)) {
        args = {
            theatre: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        theatre: args.theatre,
    }

    return show.definition.url
            .replace('{theatre}', parsedArgs.theatre.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:36
* @route '/theatres/{theatre}'
*/
show.get = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:36
* @route '/theatres/{theatre}'
*/
show.head = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:36
* @route '/theatres/{theatre}'
*/
const showForm = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:36
* @route '/theatres/{theatre}'
*/
showForm.get = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:36
* @route '/theatres/{theatre}'
*/
showForm.head = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\TheatreController::update
* @see app/Http/Controllers/TheatreController.php:52
* @route '/theatres/{theatre}'
*/
export const update = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/theatres/{theatre}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\TheatreController::update
* @see app/Http/Controllers/TheatreController.php:52
* @route '/theatres/{theatre}'
*/
update.url = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { theatre: args }
    }

    if (Array.isArray(args)) {
        args = {
            theatre: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        theatre: args.theatre,
    }

    return update.definition.url
            .replace('{theatre}', parsedArgs.theatre.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TheatreController::update
* @see app/Http/Controllers/TheatreController.php:52
* @route '/theatres/{theatre}'
*/
update.put = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\TheatreController::update
* @see app/Http/Controllers/TheatreController.php:52
* @route '/theatres/{theatre}'
*/
update.patch = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\TheatreController::update
* @see app/Http/Controllers/TheatreController.php:52
* @route '/theatres/{theatre}'
*/
const updateForm = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TheatreController::update
* @see app/Http/Controllers/TheatreController.php:52
* @route '/theatres/{theatre}'
*/
updateForm.put = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TheatreController::update
* @see app/Http/Controllers/TheatreController.php:52
* @route '/theatres/{theatre}'
*/
updateForm.patch = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\TheatreController::destroy
* @see app/Http/Controllers/TheatreController.php:60
* @route '/theatres/{theatre}'
*/
export const destroy = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/theatres/{theatre}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TheatreController::destroy
* @see app/Http/Controllers/TheatreController.php:60
* @route '/theatres/{theatre}'
*/
destroy.url = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { theatre: args }
    }

    if (Array.isArray(args)) {
        args = {
            theatre: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        theatre: args.theatre,
    }

    return destroy.definition.url
            .replace('{theatre}', parsedArgs.theatre.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TheatreController::destroy
* @see app/Http/Controllers/TheatreController.php:60
* @route '/theatres/{theatre}'
*/
destroy.delete = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\TheatreController::destroy
* @see app/Http/Controllers/TheatreController.php:60
* @route '/theatres/{theatre}'
*/
const destroyForm = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TheatreController::destroy
* @see app/Http/Controllers/TheatreController.php:60
* @route '/theatres/{theatre}'
*/
destroyForm.delete = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const theatres = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default theatres