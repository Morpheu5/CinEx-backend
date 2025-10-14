import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/api/v1/navigation-anchor'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/v1/navigation-anchor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/api/v1/navigation-anchor'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/api/v1/navigation-anchor'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/api/v1/navigation-anchor'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/api/v1/navigation-anchor'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/api/v1/navigation-anchor'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/api/v1/navigation-anchor'
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
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
export const show = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/v1/navigation-anchor/{navigation_anchor}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
show.url = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { navigation_anchor: args }
    }

    if (Array.isArray(args)) {
        args = {
            navigation_anchor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        navigation_anchor: args.navigation_anchor,
    }

    return show.definition.url
            .replace('{navigation_anchor}', parsedArgs.navigation_anchor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
show.get = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
show.head = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
const showForm = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
showForm.get = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
showForm.head = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/api/v1/navigation-anchor'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/navigation-anchor',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/api/v1/navigation-anchor'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/api/v1/navigation-anchor'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/api/v1/navigation-anchor'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/api/v1/navigation-anchor'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:62
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
export const update = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/navigation-anchor/{navigation_anchor}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:62
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
update.url = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { navigation_anchor: args }
    }

    if (Array.isArray(args)) {
        args = {
            navigation_anchor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        navigation_anchor: args.navigation_anchor,
    }

    return update.definition.url
            .replace('{navigation_anchor}', parsedArgs.navigation_anchor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:62
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
update.put = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:62
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
update.patch = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:62
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
const updateForm = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:62
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
updateForm.put = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:62
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
updateForm.patch = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\NavigationAnchorController::destroy
* @see app/Http/Controllers/NavigationAnchorController.php:68
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
export const destroy = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/navigation-anchor/{navigation_anchor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::destroy
* @see app/Http/Controllers/NavigationAnchorController.php:68
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
destroy.url = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { navigation_anchor: args }
    }

    if (Array.isArray(args)) {
        args = {
            navigation_anchor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        navigation_anchor: args.navigation_anchor,
    }

    return destroy.definition.url
            .replace('{navigation_anchor}', parsedArgs.navigation_anchor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::destroy
* @see app/Http/Controllers/NavigationAnchorController.php:68
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
destroy.delete = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::destroy
* @see app/Http/Controllers/NavigationAnchorController.php:68
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
const destroyForm = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::destroy
* @see app/Http/Controllers/NavigationAnchorController.php:68
* @route '/api/v1/navigation-anchor/{navigation_anchor}'
*/
destroyForm.delete = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const navigationAnchor = {
    index: Object.assign(index, index),
    show: Object.assign(show, show),
    store: Object.assign(store, store),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default navigationAnchor