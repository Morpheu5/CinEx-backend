import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/photosphere'
*/
const indexd156b3921901de451eaad60a089068a0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexd156b3921901de451eaad60a089068a0.url(options),
    method: 'get',
})

indexd156b3921901de451eaad60a089068a0.definition = {
    methods: ["get","head"],
    url: '/photosphere',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/photosphere'
*/
indexd156b3921901de451eaad60a089068a0.url = (options?: RouteQueryOptions) => {
    return indexd156b3921901de451eaad60a089068a0.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/photosphere'
*/
indexd156b3921901de451eaad60a089068a0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexd156b3921901de451eaad60a089068a0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/photosphere'
*/
indexd156b3921901de451eaad60a089068a0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexd156b3921901de451eaad60a089068a0.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/photosphere'
*/
const indexd156b3921901de451eaad60a089068a0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexd156b3921901de451eaad60a089068a0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/photosphere'
*/
indexd156b3921901de451eaad60a089068a0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexd156b3921901de451eaad60a089068a0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/photosphere'
*/
indexd156b3921901de451eaad60a089068a0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexd156b3921901de451eaad60a089068a0.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexd156b3921901de451eaad60a089068a0.form = indexd156b3921901de451eaad60a089068a0Form
/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/dashboard/photosphere'
*/
const indexc66291f90a40544d8c0b5ad37f903f02 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc66291f90a40544d8c0b5ad37f903f02.url(options),
    method: 'get',
})

indexc66291f90a40544d8c0b5ad37f903f02.definition = {
    methods: ["get","head"],
    url: '/dashboard/photosphere',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/dashboard/photosphere'
*/
indexc66291f90a40544d8c0b5ad37f903f02.url = (options?: RouteQueryOptions) => {
    return indexc66291f90a40544d8c0b5ad37f903f02.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/dashboard/photosphere'
*/
indexc66291f90a40544d8c0b5ad37f903f02.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexc66291f90a40544d8c0b5ad37f903f02.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/dashboard/photosphere'
*/
indexc66291f90a40544d8c0b5ad37f903f02.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexc66291f90a40544d8c0b5ad37f903f02.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/dashboard/photosphere'
*/
const indexc66291f90a40544d8c0b5ad37f903f02Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc66291f90a40544d8c0b5ad37f903f02.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/dashboard/photosphere'
*/
indexc66291f90a40544d8c0b5ad37f903f02Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc66291f90a40544d8c0b5ad37f903f02.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/dashboard/photosphere'
*/
indexc66291f90a40544d8c0b5ad37f903f02Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexc66291f90a40544d8c0b5ad37f903f02.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexc66291f90a40544d8c0b5ad37f903f02.form = indexc66291f90a40544d8c0b5ad37f903f02Form

export const index = {
    '/photosphere': indexd156b3921901de451eaad60a089068a0,
    '/dashboard/photosphere': indexc66291f90a40544d8c0b5ad37f903f02,
}

/**
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:54
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
* @see app/Http/Controllers/PhotosphereController.php:54
* @route '/photosphere'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:54
* @route '/photosphere'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:54
* @route '/photosphere'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:54
* @route '/photosphere'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/photosphere/{photosphere}'
*/
const show3d909a467c6240b6ff88568bdb1a5f0f = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show3d909a467c6240b6ff88568bdb1a5f0f.url(args, options),
    method: 'get',
})

show3d909a467c6240b6ff88568bdb1a5f0f.definition = {
    methods: ["get","head"],
    url: '/photosphere/{photosphere}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/photosphere/{photosphere}'
*/
show3d909a467c6240b6ff88568bdb1a5f0f.url = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show3d909a467c6240b6ff88568bdb1a5f0f.definition.url
            .replace('{photosphere}', parsedArgs.photosphere.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/photosphere/{photosphere}'
*/
show3d909a467c6240b6ff88568bdb1a5f0f.get = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show3d909a467c6240b6ff88568bdb1a5f0f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/photosphere/{photosphere}'
*/
show3d909a467c6240b6ff88568bdb1a5f0f.head = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show3d909a467c6240b6ff88568bdb1a5f0f.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/photosphere/{photosphere}'
*/
const show3d909a467c6240b6ff88568bdb1a5f0fForm = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3d909a467c6240b6ff88568bdb1a5f0f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/photosphere/{photosphere}'
*/
show3d909a467c6240b6ff88568bdb1a5f0fForm.get = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3d909a467c6240b6ff88568bdb1a5f0f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/photosphere/{photosphere}'
*/
show3d909a467c6240b6ff88568bdb1a5f0fForm.head = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show3d909a467c6240b6ff88568bdb1a5f0f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show3d909a467c6240b6ff88568bdb1a5f0f.form = show3d909a467c6240b6ff88568bdb1a5f0fForm
/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/dashboard/photosphere/{photosphere}'
*/
const showce4d4d3fb0dcfd36e348a7d08e7852a5 = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showce4d4d3fb0dcfd36e348a7d08e7852a5.url(args, options),
    method: 'get',
})

showce4d4d3fb0dcfd36e348a7d08e7852a5.definition = {
    methods: ["get","head"],
    url: '/dashboard/photosphere/{photosphere}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/dashboard/photosphere/{photosphere}'
*/
showce4d4d3fb0dcfd36e348a7d08e7852a5.url = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showce4d4d3fb0dcfd36e348a7d08e7852a5.definition.url
            .replace('{photosphere}', parsedArgs.photosphere.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/dashboard/photosphere/{photosphere}'
*/
showce4d4d3fb0dcfd36e348a7d08e7852a5.get = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showce4d4d3fb0dcfd36e348a7d08e7852a5.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/dashboard/photosphere/{photosphere}'
*/
showce4d4d3fb0dcfd36e348a7d08e7852a5.head = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showce4d4d3fb0dcfd36e348a7d08e7852a5.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/dashboard/photosphere/{photosphere}'
*/
const showce4d4d3fb0dcfd36e348a7d08e7852a5Form = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showce4d4d3fb0dcfd36e348a7d08e7852a5.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/dashboard/photosphere/{photosphere}'
*/
showce4d4d3fb0dcfd36e348a7d08e7852a5Form.get = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showce4d4d3fb0dcfd36e348a7d08e7852a5.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/dashboard/photosphere/{photosphere}'
*/
showce4d4d3fb0dcfd36e348a7d08e7852a5Form.head = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showce4d4d3fb0dcfd36e348a7d08e7852a5.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showce4d4d3fb0dcfd36e348a7d08e7852a5.form = showce4d4d3fb0dcfd36e348a7d08e7852a5Form

export const show = {
    '/photosphere/{photosphere}': show3d909a467c6240b6ff88568bdb1a5f0f,
    '/dashboard/photosphere/{photosphere}': showce4d4d3fb0dcfd36e348a7d08e7852a5,
}

/**
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:146
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
* @see app/Http/Controllers/PhotosphereController.php:146
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
* @see app/Http/Controllers/PhotosphereController.php:146
* @route '/photosphere/{photosphere}'
*/
update.put = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:146
* @route '/photosphere/{photosphere}'
*/
update.patch = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:146
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
* @see app/Http/Controllers/PhotosphereController.php:146
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
* @see app/Http/Controllers/PhotosphereController.php:146
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
* @see app/Http/Controllers/PhotosphereController.php:244
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
* @see app/Http/Controllers/PhotosphereController.php:244
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
* @see app/Http/Controllers/PhotosphereController.php:244
* @route '/photosphere/{photosphere}'
*/
destroy.delete = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PhotosphereController::destroy
* @see app/Http/Controllers/PhotosphereController.php:244
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
* @see app/Http/Controllers/PhotosphereController.php:244
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

/**
* @see \App\Http\Controllers\PhotosphereController::create
* @see app/Http/Controllers/PhotosphereController.php:39
* @route '/dashboard/photosphere/new'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/photosphere/new',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotosphereController::create
* @see app/Http/Controllers/PhotosphereController.php:39
* @route '/dashboard/photosphere/new'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::create
* @see app/Http/Controllers/PhotosphereController.php:39
* @route '/dashboard/photosphere/new'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::create
* @see app/Http/Controllers/PhotosphereController.php:39
* @route '/dashboard/photosphere/new'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotosphereController::create
* @see app/Http/Controllers/PhotosphereController.php:39
* @route '/dashboard/photosphere/new'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::create
* @see app/Http/Controllers/PhotosphereController.php:39
* @route '/dashboard/photosphere/new'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::create
* @see app/Http/Controllers/PhotosphereController.php:39
* @route '/dashboard/photosphere/new'
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
* @see \App\Http\Controllers\PhotosphereController::edit
* @see app/Http/Controllers/PhotosphereController.php:121
* @route '/dashboard/photosphere/{photosphere}/edit'
*/
export const edit = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/photosphere/{photosphere}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotosphereController::edit
* @see app/Http/Controllers/PhotosphereController.php:121
* @route '/dashboard/photosphere/{photosphere}/edit'
*/
edit.url = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{photosphere}', parsedArgs.photosphere.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::edit
* @see app/Http/Controllers/PhotosphereController.php:121
* @route '/dashboard/photosphere/{photosphere}/edit'
*/
edit.get = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::edit
* @see app/Http/Controllers/PhotosphereController.php:121
* @route '/dashboard/photosphere/{photosphere}/edit'
*/
edit.head = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotosphereController::edit
* @see app/Http/Controllers/PhotosphereController.php:121
* @route '/dashboard/photosphere/{photosphere}/edit'
*/
const editForm = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::edit
* @see app/Http/Controllers/PhotosphereController.php:121
* @route '/dashboard/photosphere/{photosphere}/edit'
*/
editForm.get = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::edit
* @see app/Http/Controllers/PhotosphereController.php:121
* @route '/dashboard/photosphere/{photosphere}/edit'
*/
editForm.head = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const PhotosphereController = { index, store, show, update, destroy, create, edit }

export default PhotosphereController