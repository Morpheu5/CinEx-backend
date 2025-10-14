import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/theatre'
*/
const indexd49b1e3f156890cdf23952a40a0e5011 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexd49b1e3f156890cdf23952a40a0e5011.url(options),
    method: 'get',
})

indexd49b1e3f156890cdf23952a40a0e5011.definition = {
    methods: ["get","head"],
    url: '/theatre',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/theatre'
*/
indexd49b1e3f156890cdf23952a40a0e5011.url = (options?: RouteQueryOptions) => {
    return indexd49b1e3f156890cdf23952a40a0e5011.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/theatre'
*/
indexd49b1e3f156890cdf23952a40a0e5011.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexd49b1e3f156890cdf23952a40a0e5011.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/theatre'
*/
indexd49b1e3f156890cdf23952a40a0e5011.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexd49b1e3f156890cdf23952a40a0e5011.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/theatre'
*/
const indexd49b1e3f156890cdf23952a40a0e5011Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexd49b1e3f156890cdf23952a40a0e5011.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/theatre'
*/
indexd49b1e3f156890cdf23952a40a0e5011Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexd49b1e3f156890cdf23952a40a0e5011.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/theatre'
*/
indexd49b1e3f156890cdf23952a40a0e5011Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexd49b1e3f156890cdf23952a40a0e5011.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexd49b1e3f156890cdf23952a40a0e5011.form = indexd49b1e3f156890cdf23952a40a0e5011Form
/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/admin/theatre'
*/
const index0485f020ece3b90f1661020906df84a6 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0485f020ece3b90f1661020906df84a6.url(options),
    method: 'get',
})

index0485f020ece3b90f1661020906df84a6.definition = {
    methods: ["get","head"],
    url: '/admin/theatre',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/admin/theatre'
*/
index0485f020ece3b90f1661020906df84a6.url = (options?: RouteQueryOptions) => {
    return index0485f020ece3b90f1661020906df84a6.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/admin/theatre'
*/
index0485f020ece3b90f1661020906df84a6.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index0485f020ece3b90f1661020906df84a6.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/admin/theatre'
*/
index0485f020ece3b90f1661020906df84a6.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index0485f020ece3b90f1661020906df84a6.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/admin/theatre'
*/
const index0485f020ece3b90f1661020906df84a6Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index0485f020ece3b90f1661020906df84a6.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/admin/theatre'
*/
index0485f020ece3b90f1661020906df84a6Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index0485f020ece3b90f1661020906df84a6.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/admin/theatre'
*/
index0485f020ece3b90f1661020906df84a6Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index0485f020ece3b90f1661020906df84a6.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index0485f020ece3b90f1661020906df84a6.form = index0485f020ece3b90f1661020906df84a6Form

export const index = {
    '/theatre': indexd49b1e3f156890cdf23952a40a0e5011,
    '/admin/theatre': index0485f020ece3b90f1661020906df84a6,
}

/**
* @see \App\Http\Controllers\TheatreController::store
* @see app/Http/Controllers/TheatreController.php:38
* @route '/theatre'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/theatre',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\TheatreController::store
* @see app/Http/Controllers/TheatreController.php:38
* @route '/theatre'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TheatreController::store
* @see app/Http/Controllers/TheatreController.php:38
* @route '/theatre'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TheatreController::store
* @see app/Http/Controllers/TheatreController.php:38
* @route '/theatre'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\TheatreController::store
* @see app/Http/Controllers/TheatreController.php:38
* @route '/theatre'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/theatre/{theatre}'
*/
const show9081357f22a2487c296a5e8e924cb931 = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show9081357f22a2487c296a5e8e924cb931.url(args, options),
    method: 'get',
})

show9081357f22a2487c296a5e8e924cb931.definition = {
    methods: ["get","head"],
    url: '/theatre/{theatre}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/theatre/{theatre}'
*/
show9081357f22a2487c296a5e8e924cb931.url = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show9081357f22a2487c296a5e8e924cb931.definition.url
            .replace('{theatre}', parsedArgs.theatre.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/theatre/{theatre}'
*/
show9081357f22a2487c296a5e8e924cb931.get = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show9081357f22a2487c296a5e8e924cb931.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/theatre/{theatre}'
*/
show9081357f22a2487c296a5e8e924cb931.head = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show9081357f22a2487c296a5e8e924cb931.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/theatre/{theatre}'
*/
const show9081357f22a2487c296a5e8e924cb931Form = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show9081357f22a2487c296a5e8e924cb931.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/theatre/{theatre}'
*/
show9081357f22a2487c296a5e8e924cb931Form.get = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show9081357f22a2487c296a5e8e924cb931.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/theatre/{theatre}'
*/
show9081357f22a2487c296a5e8e924cb931Form.head = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show9081357f22a2487c296a5e8e924cb931.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show9081357f22a2487c296a5e8e924cb931.form = show9081357f22a2487c296a5e8e924cb931Form
/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/admin/theatre/{theatre}'
*/
const showf49ce93e67bb6fe568e4de5136e46467 = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf49ce93e67bb6fe568e4de5136e46467.url(args, options),
    method: 'get',
})

showf49ce93e67bb6fe568e4de5136e46467.definition = {
    methods: ["get","head"],
    url: '/admin/theatre/{theatre}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/admin/theatre/{theatre}'
*/
showf49ce93e67bb6fe568e4de5136e46467.url = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showf49ce93e67bb6fe568e4de5136e46467.definition.url
            .replace('{theatre}', parsedArgs.theatre.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/admin/theatre/{theatre}'
*/
showf49ce93e67bb6fe568e4de5136e46467.get = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showf49ce93e67bb6fe568e4de5136e46467.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/admin/theatre/{theatre}'
*/
showf49ce93e67bb6fe568e4de5136e46467.head = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showf49ce93e67bb6fe568e4de5136e46467.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/admin/theatre/{theatre}'
*/
const showf49ce93e67bb6fe568e4de5136e46467Form = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showf49ce93e67bb6fe568e4de5136e46467.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/admin/theatre/{theatre}'
*/
showf49ce93e67bb6fe568e4de5136e46467Form.get = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showf49ce93e67bb6fe568e4de5136e46467.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/admin/theatre/{theatre}'
*/
showf49ce93e67bb6fe568e4de5136e46467Form.head = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showf49ce93e67bb6fe568e4de5136e46467.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showf49ce93e67bb6fe568e4de5136e46467.form = showf49ce93e67bb6fe568e4de5136e46467Form

export const show = {
    '/theatre/{theatre}': show9081357f22a2487c296a5e8e924cb931,
    '/admin/theatre/{theatre}': showf49ce93e67bb6fe568e4de5136e46467,
}

/**
* @see \App\Http\Controllers\TheatreController::update
* @see app/Http/Controllers/TheatreController.php:82
* @route '/theatre/{theatre}'
*/
export const update = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/theatre/{theatre}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\TheatreController::update
* @see app/Http/Controllers/TheatreController.php:82
* @route '/theatre/{theatre}'
*/
update.url = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { theatre: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { theatre: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            theatre: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        theatre: typeof args.theatre === 'object'
        ? args.theatre.id
        : args.theatre,
    }

    return update.definition.url
            .replace('{theatre}', parsedArgs.theatre.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TheatreController::update
* @see app/Http/Controllers/TheatreController.php:82
* @route '/theatre/{theatre}'
*/
update.put = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\TheatreController::update
* @see app/Http/Controllers/TheatreController.php:82
* @route '/theatre/{theatre}'
*/
update.patch = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\TheatreController::update
* @see app/Http/Controllers/TheatreController.php:82
* @route '/theatre/{theatre}'
*/
const updateForm = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/TheatreController.php:82
* @route '/theatre/{theatre}'
*/
updateForm.put = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/TheatreController.php:82
* @route '/theatre/{theatre}'
*/
updateForm.patch = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/TheatreController.php:101
* @route '/theatre/{theatre}'
*/
export const destroy = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/theatre/{theatre}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\TheatreController::destroy
* @see app/Http/Controllers/TheatreController.php:101
* @route '/theatre/{theatre}'
*/
destroy.url = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { theatre: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { theatre: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            theatre: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        theatre: typeof args.theatre === 'object'
        ? args.theatre.id
        : args.theatre,
    }

    return destroy.definition.url
            .replace('{theatre}', parsedArgs.theatre.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TheatreController::destroy
* @see app/Http/Controllers/TheatreController.php:101
* @route '/theatre/{theatre}'
*/
destroy.delete = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\TheatreController::destroy
* @see app/Http/Controllers/TheatreController.php:101
* @route '/theatre/{theatre}'
*/
const destroyForm = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see app/Http/Controllers/TheatreController.php:101
* @route '/theatre/{theatre}'
*/
destroyForm.delete = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\TheatreController::create
* @see app/Http/Controllers/TheatreController.php:31
* @route '/admin/theatre/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/theatre/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TheatreController::create
* @see app/Http/Controllers/TheatreController.php:31
* @route '/admin/theatre/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TheatreController::create
* @see app/Http/Controllers/TheatreController.php:31
* @route '/admin/theatre/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::create
* @see app/Http/Controllers/TheatreController.php:31
* @route '/admin/theatre/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TheatreController::create
* @see app/Http/Controllers/TheatreController.php:31
* @route '/admin/theatre/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::create
* @see app/Http/Controllers/TheatreController.php:31
* @route '/admin/theatre/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::create
* @see app/Http/Controllers/TheatreController.php:31
* @route '/admin/theatre/create'
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
* @see \App\Http\Controllers\TheatreController::edit
* @see app/Http/Controllers/TheatreController.php:71
* @route '/admin/theatre/{theatre}/edit'
*/
export const edit = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/theatre/{theatre}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TheatreController::edit
* @see app/Http/Controllers/TheatreController.php:71
* @route '/admin/theatre/{theatre}/edit'
*/
edit.url = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{theatre}', parsedArgs.theatre.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TheatreController::edit
* @see app/Http/Controllers/TheatreController.php:71
* @route '/admin/theatre/{theatre}/edit'
*/
edit.get = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::edit
* @see app/Http/Controllers/TheatreController.php:71
* @route '/admin/theatre/{theatre}/edit'
*/
edit.head = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TheatreController::edit
* @see app/Http/Controllers/TheatreController.php:71
* @route '/admin/theatre/{theatre}/edit'
*/
const editForm = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::edit
* @see app/Http/Controllers/TheatreController.php:71
* @route '/admin/theatre/{theatre}/edit'
*/
editForm.get = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::edit
* @see app/Http/Controllers/TheatreController.php:71
* @route '/admin/theatre/{theatre}/edit'
*/
editForm.head = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const TheatreController = { index, store, show, update, destroy, create, edit }

export default TheatreController