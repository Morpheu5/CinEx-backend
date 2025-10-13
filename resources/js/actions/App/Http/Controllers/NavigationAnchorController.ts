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
* @route '/dashboard/navigation-anchor'
*/
const index775c603cdfb70e345e9a8ed06ea85409 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index775c603cdfb70e345e9a8ed06ea85409.url(options),
    method: 'get',
})

index775c603cdfb70e345e9a8ed06ea85409.definition = {
    methods: ["get","head"],
    url: '/dashboard/navigation-anchor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/dashboard/navigation-anchor'
*/
index775c603cdfb70e345e9a8ed06ea85409.url = (options?: RouteQueryOptions) => {
    return index775c603cdfb70e345e9a8ed06ea85409.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/dashboard/navigation-anchor'
*/
index775c603cdfb70e345e9a8ed06ea85409.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index775c603cdfb70e345e9a8ed06ea85409.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/dashboard/navigation-anchor'
*/
index775c603cdfb70e345e9a8ed06ea85409.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index775c603cdfb70e345e9a8ed06ea85409.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/dashboard/navigation-anchor'
*/
const index775c603cdfb70e345e9a8ed06ea85409Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index775c603cdfb70e345e9a8ed06ea85409.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/dashboard/navigation-anchor'
*/
index775c603cdfb70e345e9a8ed06ea85409Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index775c603cdfb70e345e9a8ed06ea85409.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/dashboard/navigation-anchor'
*/
index775c603cdfb70e345e9a8ed06ea85409Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index775c603cdfb70e345e9a8ed06ea85409.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index775c603cdfb70e345e9a8ed06ea85409.form = index775c603cdfb70e345e9a8ed06ea85409Form

export const index = {
    '/navigation-anchor': index13a11ba6f65586da5446d212548a6986,
    '/dashboard/navigation-anchor': index775c603cdfb70e345e9a8ed06ea85409,
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/navigation-anchor'
*/
const store13a11ba6f65586da5446d212548a6986 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store13a11ba6f65586da5446d212548a6986.url(options),
    method: 'post',
})

store13a11ba6f65586da5446d212548a6986.definition = {
    methods: ["post"],
    url: '/navigation-anchor',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/navigation-anchor'
*/
store13a11ba6f65586da5446d212548a6986.url = (options?: RouteQueryOptions) => {
    return store13a11ba6f65586da5446d212548a6986.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/navigation-anchor'
*/
store13a11ba6f65586da5446d212548a6986.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store13a11ba6f65586da5446d212548a6986.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/navigation-anchor'
*/
const store13a11ba6f65586da5446d212548a6986Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store13a11ba6f65586da5446d212548a6986.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/navigation-anchor'
*/
store13a11ba6f65586da5446d212548a6986Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store13a11ba6f65586da5446d212548a6986.url(options),
    method: 'post',
})

store13a11ba6f65586da5446d212548a6986.form = store13a11ba6f65586da5446d212548a6986Form
/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/dashboard/navigation-anchor'
*/
const store775c603cdfb70e345e9a8ed06ea85409 = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store775c603cdfb70e345e9a8ed06ea85409.url(options),
    method: 'post',
})

store775c603cdfb70e345e9a8ed06ea85409.definition = {
    methods: ["post"],
    url: '/dashboard/navigation-anchor',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/dashboard/navigation-anchor'
*/
store775c603cdfb70e345e9a8ed06ea85409.url = (options?: RouteQueryOptions) => {
    return store775c603cdfb70e345e9a8ed06ea85409.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/dashboard/navigation-anchor'
*/
store775c603cdfb70e345e9a8ed06ea85409.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store775c603cdfb70e345e9a8ed06ea85409.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/dashboard/navigation-anchor'
*/
const store775c603cdfb70e345e9a8ed06ea85409Form = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store775c603cdfb70e345e9a8ed06ea85409.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::store
* @see app/Http/Controllers/NavigationAnchorController.php:38
* @route '/dashboard/navigation-anchor'
*/
store775c603cdfb70e345e9a8ed06ea85409Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store775c603cdfb70e345e9a8ed06ea85409.url(options),
    method: 'post',
})

store775c603cdfb70e345e9a8ed06ea85409.form = store775c603cdfb70e345e9a8ed06ea85409Form

export const store = {
    '/navigation-anchor': store13a11ba6f65586da5446d212548a6986,
    '/dashboard/navigation-anchor': store775c603cdfb70e345e9a8ed06ea85409,
}

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
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
const showfb20884e545f3b957e9bd17d3c3aaf84 = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showfb20884e545f3b957e9bd17d3c3aaf84.url(args, options),
    method: 'get',
})

showfb20884e545f3b957e9bd17d3c3aaf84.definition = {
    methods: ["get","head"],
    url: '/dashboard/navigation-anchor/{navigation_anchor}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
showfb20884e545f3b957e9bd17d3c3aaf84.url = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showfb20884e545f3b957e9bd17d3c3aaf84.definition.url
            .replace('{navigation_anchor}', parsedArgs.navigation_anchor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
showfb20884e545f3b957e9bd17d3c3aaf84.get = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showfb20884e545f3b957e9bd17d3c3aaf84.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
showfb20884e545f3b957e9bd17d3c3aaf84.head = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showfb20884e545f3b957e9bd17d3c3aaf84.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
const showfb20884e545f3b957e9bd17d3c3aaf84Form = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showfb20884e545f3b957e9bd17d3c3aaf84.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
showfb20884e545f3b957e9bd17d3c3aaf84Form.get = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showfb20884e545f3b957e9bd17d3c3aaf84.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
showfb20884e545f3b957e9bd17d3c3aaf84Form.head = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showfb20884e545f3b957e9bd17d3c3aaf84.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showfb20884e545f3b957e9bd17d3c3aaf84.form = showfb20884e545f3b957e9bd17d3c3aaf84Form

export const show = {
    '/navigation-anchor/{navigation_anchor}': showed062e8c780fbf3218367a0ffa021fa0,
    '/dashboard/navigation-anchor/{navigation_anchor}': showfb20884e545f3b957e9bd17d3c3aaf84,
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:63
* @route '/navigation-anchor/{navigation_anchor}'
*/
const updateed062e8c780fbf3218367a0ffa021fa0 = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateed062e8c780fbf3218367a0ffa021fa0.url(args, options),
    method: 'put',
})

updateed062e8c780fbf3218367a0ffa021fa0.definition = {
    methods: ["put","patch"],
    url: '/navigation-anchor/{navigation_anchor}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:63
* @route '/navigation-anchor/{navigation_anchor}'
*/
updateed062e8c780fbf3218367a0ffa021fa0.url = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updateed062e8c780fbf3218367a0ffa021fa0.definition.url
            .replace('{navigation_anchor}', parsedArgs.navigation_anchor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:63
* @route '/navigation-anchor/{navigation_anchor}'
*/
updateed062e8c780fbf3218367a0ffa021fa0.put = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updateed062e8c780fbf3218367a0ffa021fa0.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:63
* @route '/navigation-anchor/{navigation_anchor}'
*/
updateed062e8c780fbf3218367a0ffa021fa0.patch = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updateed062e8c780fbf3218367a0ffa021fa0.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:63
* @route '/navigation-anchor/{navigation_anchor}'
*/
const updateed062e8c780fbf3218367a0ffa021fa0Form = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateed062e8c780fbf3218367a0ffa021fa0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:63
* @route '/navigation-anchor/{navigation_anchor}'
*/
updateed062e8c780fbf3218367a0ffa021fa0Form.put = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateed062e8c780fbf3218367a0ffa021fa0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:63
* @route '/navigation-anchor/{navigation_anchor}'
*/
updateed062e8c780fbf3218367a0ffa021fa0Form.patch = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updateed062e8c780fbf3218367a0ffa021fa0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updateed062e8c780fbf3218367a0ffa021fa0.form = updateed062e8c780fbf3218367a0ffa021fa0Form
/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:63
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
const updatefb20884e545f3b957e9bd17d3c3aaf84 = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatefb20884e545f3b957e9bd17d3c3aaf84.url(args, options),
    method: 'put',
})

updatefb20884e545f3b957e9bd17d3c3aaf84.definition = {
    methods: ["put","patch"],
    url: '/dashboard/navigation-anchor/{navigation_anchor}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:63
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
updatefb20884e545f3b957e9bd17d3c3aaf84.url = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return updatefb20884e545f3b957e9bd17d3c3aaf84.definition.url
            .replace('{navigation_anchor}', parsedArgs.navigation_anchor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:63
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
updatefb20884e545f3b957e9bd17d3c3aaf84.put = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: updatefb20884e545f3b957e9bd17d3c3aaf84.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:63
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
updatefb20884e545f3b957e9bd17d3c3aaf84.patch = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: updatefb20884e545f3b957e9bd17d3c3aaf84.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:63
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
const updatefb20884e545f3b957e9bd17d3c3aaf84Form = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatefb20884e545f3b957e9bd17d3c3aaf84.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:63
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
updatefb20884e545f3b957e9bd17d3c3aaf84Form.put = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatefb20884e545f3b957e9bd17d3c3aaf84.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::update
* @see app/Http/Controllers/NavigationAnchorController.php:63
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
updatefb20884e545f3b957e9bd17d3c3aaf84Form.patch = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: updatefb20884e545f3b957e9bd17d3c3aaf84.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

updatefb20884e545f3b957e9bd17d3c3aaf84.form = updatefb20884e545f3b957e9bd17d3c3aaf84Form

export const update = {
    '/navigation-anchor/{navigation_anchor}': updateed062e8c780fbf3218367a0ffa021fa0,
    '/dashboard/navigation-anchor/{navigation_anchor}': updatefb20884e545f3b957e9bd17d3c3aaf84,
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::destroy
* @see app/Http/Controllers/NavigationAnchorController.php:69
* @route '/navigation-anchor/{navigation_anchor}'
*/
const destroyed062e8c780fbf3218367a0ffa021fa0 = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyed062e8c780fbf3218367a0ffa021fa0.url(args, options),
    method: 'delete',
})

destroyed062e8c780fbf3218367a0ffa021fa0.definition = {
    methods: ["delete"],
    url: '/navigation-anchor/{navigation_anchor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::destroy
* @see app/Http/Controllers/NavigationAnchorController.php:69
* @route '/navigation-anchor/{navigation_anchor}'
*/
destroyed062e8c780fbf3218367a0ffa021fa0.url = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroyed062e8c780fbf3218367a0ffa021fa0.definition.url
            .replace('{navigation_anchor}', parsedArgs.navigation_anchor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::destroy
* @see app/Http/Controllers/NavigationAnchorController.php:69
* @route '/navigation-anchor/{navigation_anchor}'
*/
destroyed062e8c780fbf3218367a0ffa021fa0.delete = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyed062e8c780fbf3218367a0ffa021fa0.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::destroy
* @see app/Http/Controllers/NavigationAnchorController.php:69
* @route '/navigation-anchor/{navigation_anchor}'
*/
const destroyed062e8c780fbf3218367a0ffa021fa0Form = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyed062e8c780fbf3218367a0ffa021fa0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::destroy
* @see app/Http/Controllers/NavigationAnchorController.php:69
* @route '/navigation-anchor/{navigation_anchor}'
*/
destroyed062e8c780fbf3218367a0ffa021fa0Form.delete = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyed062e8c780fbf3218367a0ffa021fa0.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyed062e8c780fbf3218367a0ffa021fa0.form = destroyed062e8c780fbf3218367a0ffa021fa0Form
/**
* @see \App\Http\Controllers\NavigationAnchorController::destroy
* @see app/Http/Controllers/NavigationAnchorController.php:69
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
const destroyfb20884e545f3b957e9bd17d3c3aaf84 = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyfb20884e545f3b957e9bd17d3c3aaf84.url(args, options),
    method: 'delete',
})

destroyfb20884e545f3b957e9bd17d3c3aaf84.definition = {
    methods: ["delete"],
    url: '/dashboard/navigation-anchor/{navigation_anchor}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::destroy
* @see app/Http/Controllers/NavigationAnchorController.php:69
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
destroyfb20884e545f3b957e9bd17d3c3aaf84.url = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return destroyfb20884e545f3b957e9bd17d3c3aaf84.definition.url
            .replace('{navigation_anchor}', parsedArgs.navigation_anchor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::destroy
* @see app/Http/Controllers/NavigationAnchorController.php:69
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
destroyfb20884e545f3b957e9bd17d3c3aaf84.delete = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroyfb20884e545f3b957e9bd17d3c3aaf84.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::destroy
* @see app/Http/Controllers/NavigationAnchorController.php:69
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
const destroyfb20884e545f3b957e9bd17d3c3aaf84Form = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyfb20884e545f3b957e9bd17d3c3aaf84.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::destroy
* @see app/Http/Controllers/NavigationAnchorController.php:69
* @route '/dashboard/navigation-anchor/{navigation_anchor}'
*/
destroyfb20884e545f3b957e9bd17d3c3aaf84Form.delete = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroyfb20884e545f3b957e9bd17d3c3aaf84.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroyfb20884e545f3b957e9bd17d3c3aaf84.form = destroyfb20884e545f3b957e9bd17d3c3aaf84Form

export const destroy = {
    '/navigation-anchor/{navigation_anchor}': destroyed062e8c780fbf3218367a0ffa021fa0,
    '/dashboard/navigation-anchor/{navigation_anchor}': destroyfb20884e545f3b957e9bd17d3c3aaf84,
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/dashboard/navigation-anchor/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/navigation-anchor/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/dashboard/navigation-anchor/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/dashboard/navigation-anchor/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/dashboard/navigation-anchor/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/dashboard/navigation-anchor/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/dashboard/navigation-anchor/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/dashboard/navigation-anchor/create'
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
* @route '/dashboard/navigation-anchor/{navigation_anchor}/edit'
*/
export const edit = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/navigation-anchor/{navigation_anchor}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/dashboard/navigation-anchor/{navigation_anchor}/edit'
*/
edit.url = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{navigation_anchor}', parsedArgs.navigation_anchor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/dashboard/navigation-anchor/{navigation_anchor}/edit'
*/
edit.get = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/dashboard/navigation-anchor/{navigation_anchor}/edit'
*/
edit.head = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/dashboard/navigation-anchor/{navigation_anchor}/edit'
*/
const editForm = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/dashboard/navigation-anchor/{navigation_anchor}/edit'
*/
editForm.get = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/dashboard/navigation-anchor/{navigation_anchor}/edit'
*/
editForm.head = (args: { navigation_anchor: string | number } | [navigation_anchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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