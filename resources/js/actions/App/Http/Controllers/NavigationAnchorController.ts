import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/navigation-anchor'
*/
const index13a11ba6f65586da5446d212548a6986 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index13a11ba6f65586da5446d212548a6986.url(options),
    method: 'get',
})

index13a11ba6f65586da5446d212548a6986.definition = {
    methods: ["get","head"],
    url: '/navigation-anchor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/navigation-anchor'
*/
index13a11ba6f65586da5446d212548a6986.url = (options?: RouteQueryOptions) => {
    return index13a11ba6f65586da5446d212548a6986.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/navigation-anchor'
*/
index13a11ba6f65586da5446d212548a6986.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index13a11ba6f65586da5446d212548a6986.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/navigation-anchor'
*/
index13a11ba6f65586da5446d212548a6986.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index13a11ba6f65586da5446d212548a6986.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/navigation-anchor'
*/
const index13a11ba6f65586da5446d212548a6986Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index13a11ba6f65586da5446d212548a6986.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/navigation-anchor'
*/
index13a11ba6f65586da5446d212548a6986Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index13a11ba6f65586da5446d212548a6986.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/navigation-anchor'
*/
index13a11ba6f65586da5446d212548a6986Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index13a11ba6f65586da5446d212548a6986.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index13a11ba6f65586da5446d212548a6986.form = index13a11ba6f65586da5446d212548a6986Form
/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/admin/navigation-anchor'
*/
const indexb6b9e7bc38a15fecdfd8125f357e4eb5 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb6b9e7bc38a15fecdfd8125f357e4eb5.url(options),
    method: 'get',
})

indexb6b9e7bc38a15fecdfd8125f357e4eb5.definition = {
    methods: ["get","head"],
    url: '/admin/navigation-anchor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/admin/navigation-anchor'
*/
indexb6b9e7bc38a15fecdfd8125f357e4eb5.url = (options?: RouteQueryOptions) => {
    return indexb6b9e7bc38a15fecdfd8125f357e4eb5.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/admin/navigation-anchor'
*/
indexb6b9e7bc38a15fecdfd8125f357e4eb5.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexb6b9e7bc38a15fecdfd8125f357e4eb5.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/admin/navigation-anchor'
*/
indexb6b9e7bc38a15fecdfd8125f357e4eb5.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexb6b9e7bc38a15fecdfd8125f357e4eb5.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/admin/navigation-anchor'
*/
const indexb6b9e7bc38a15fecdfd8125f357e4eb5Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexb6b9e7bc38a15fecdfd8125f357e4eb5.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/admin/navigation-anchor'
*/
indexb6b9e7bc38a15fecdfd8125f357e4eb5Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexb6b9e7bc38a15fecdfd8125f357e4eb5.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/admin/navigation-anchor'
*/
indexb6b9e7bc38a15fecdfd8125f357e4eb5Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexb6b9e7bc38a15fecdfd8125f357e4eb5.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexb6b9e7bc38a15fecdfd8125f357e4eb5.form = indexb6b9e7bc38a15fecdfd8125f357e4eb5Form

export const index = {
    '/navigation-anchor': index13a11ba6f65586da5446d212548a6986,
    '/admin/navigation-anchor': indexb6b9e7bc38a15fecdfd8125f357e4eb5,
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/navigation-anchor'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/navigation-anchor',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/navigation-anchor'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/navigation-anchor'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/navigation-anchor'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/navigation-anchor'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/navigation-anchor/{navigation_anchor}'
*/
const showed062e8c780fbf3218367a0ffa021fa0 = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showed062e8c780fbf3218367a0ffa021fa0.url(args, options),
    method: 'get',
})

showed062e8c780fbf3218367a0ffa021fa0.definition = {
    methods: ["get","head"],
    url: '/navigation-anchor/{navigation_anchor}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/navigation-anchor/{navigation_anchor}'
*/
showed062e8c780fbf3218367a0ffa021fa0.url = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showed062e8c780fbf3218367a0ffa021fa0.definition.url
            .replace('{navigation_anchor}', parsedArgs.navigation_anchor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/navigation-anchor/{navigation_anchor}'
*/
showed062e8c780fbf3218367a0ffa021fa0.get = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showed062e8c780fbf3218367a0ffa021fa0.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/navigation-anchor/{navigation_anchor}'
*/
showed062e8c780fbf3218367a0ffa021fa0.head = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showed062e8c780fbf3218367a0ffa021fa0.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/navigation-anchor/{navigation_anchor}'
*/
const showed062e8c780fbf3218367a0ffa021fa0Form = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showed062e8c780fbf3218367a0ffa021fa0.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/navigation-anchor/{navigation_anchor}'
*/
showed062e8c780fbf3218367a0ffa021fa0Form.get = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showed062e8c780fbf3218367a0ffa021fa0.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/navigation-anchor/{navigation_anchor}'
*/
showed062e8c780fbf3218367a0ffa021fa0Form.head = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showed062e8c780fbf3218367a0ffa021fa0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showed062e8c780fbf3218367a0ffa021fa0.form = showed062e8c780fbf3218367a0ffa021fa0Form
/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/admin/navigation-anchor/{gallery}'
*/
const show7e5bb466676a646a823d1032d57e6168 = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show7e5bb466676a646a823d1032d57e6168.url(args, options),
    method: 'get',
})

show7e5bb466676a646a823d1032d57e6168.definition = {
    methods: ["get","head"],
    url: '/admin/navigation-anchor/{gallery}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/admin/navigation-anchor/{gallery}'
*/
show7e5bb466676a646a823d1032d57e6168.url = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show7e5bb466676a646a823d1032d57e6168.definition.url
            .replace('{gallery}', parsedArgs.gallery.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/admin/navigation-anchor/{gallery}'
*/
show7e5bb466676a646a823d1032d57e6168.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show7e5bb466676a646a823d1032d57e6168.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/admin/navigation-anchor/{gallery}'
*/
show7e5bb466676a646a823d1032d57e6168.head = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show7e5bb466676a646a823d1032d57e6168.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/admin/navigation-anchor/{gallery}'
*/
const show7e5bb466676a646a823d1032d57e6168Form = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show7e5bb466676a646a823d1032d57e6168.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/admin/navigation-anchor/{gallery}'
*/
show7e5bb466676a646a823d1032d57e6168Form.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show7e5bb466676a646a823d1032d57e6168.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/admin/navigation-anchor/{gallery}'
*/
show7e5bb466676a646a823d1032d57e6168Form.head = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show7e5bb466676a646a823d1032d57e6168.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show7e5bb466676a646a823d1032d57e6168.form = show7e5bb466676a646a823d1032d57e6168Form

export const show = {
    '/navigation-anchor/{navigation_anchor}': showed062e8c780fbf3218367a0ffa021fa0,
    '/admin/navigation-anchor/{gallery}': show7e5bb466676a646a823d1032d57e6168,
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:62
* @route '/navigation-anchor/{navigation_anchor}'
*/
export const update = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/navigation-anchor/{navigation_anchor}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:62
* @route '/navigation-anchor/{navigation_anchor}'
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
* @route '/navigation-anchor/{navigation_anchor}'
*/
update.put = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:62
* @route '/navigation-anchor/{navigation_anchor}'
*/
update.patch = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:62
* @route '/navigation-anchor/{navigation_anchor}'
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
* @route '/navigation-anchor/{navigation_anchor}'
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
* @route '/navigation-anchor/{navigation_anchor}'
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
* @route '/navigation-anchor/{navigation_anchor}'
*/
export const destroy = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/navigation-anchor/{navigation_anchor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::destroy
* @see app/Http/Controllers/NavigationAnchorController.php:68
* @route '/navigation-anchor/{navigation_anchor}'
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
* @route '/navigation-anchor/{navigation_anchor}'
*/
destroy.delete = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::destroy
* @see app/Http/Controllers/NavigationAnchorController.php:68
* @route '/navigation-anchor/{navigation_anchor}'
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
* @route '/navigation-anchor/{navigation_anchor}'
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

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/admin/navigation-anchor/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/navigation-anchor/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/admin/navigation-anchor/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/admin/navigation-anchor/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/admin/navigation-anchor/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/admin/navigation-anchor/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/admin/navigation-anchor/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/admin/navigation-anchor/create'
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
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/admin/navigation-anchor/{gallery}/edit'
*/
export const edit = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/navigation-anchor/{gallery}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/admin/navigation-anchor/{gallery}/edit'
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
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/admin/navigation-anchor/{gallery}/edit'
*/
edit.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/admin/navigation-anchor/{gallery}/edit'
*/
edit.head = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/admin/navigation-anchor/{gallery}/edit'
*/
const editForm = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/admin/navigation-anchor/{gallery}/edit'
*/
editForm.get = (args: { gallery: string | number } | [gallery: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/admin/navigation-anchor/{gallery}/edit'
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

const NavigationAnchorController = { index, store, show, update, destroy, create, edit }

export default NavigationAnchorController