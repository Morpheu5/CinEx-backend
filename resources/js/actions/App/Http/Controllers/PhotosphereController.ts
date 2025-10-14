import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/api/v1/photosphere'
*/
const index95be6bfcfce49d496de6752d648b7ee3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index95be6bfcfce49d496de6752d648b7ee3.url(options),
    method: 'get',
})

index95be6bfcfce49d496de6752d648b7ee3.definition = {
    methods: ["get","head"],
    url: '/api/v1/photosphere',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/api/v1/photosphere'
*/
index95be6bfcfce49d496de6752d648b7ee3.url = (options?: RouteQueryOptions) => {
    return index95be6bfcfce49d496de6752d648b7ee3.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/api/v1/photosphere'
*/
index95be6bfcfce49d496de6752d648b7ee3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index95be6bfcfce49d496de6752d648b7ee3.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/api/v1/photosphere'
*/
index95be6bfcfce49d496de6752d648b7ee3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index95be6bfcfce49d496de6752d648b7ee3.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/api/v1/photosphere'
*/
const index95be6bfcfce49d496de6752d648b7ee3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index95be6bfcfce49d496de6752d648b7ee3.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/api/v1/photosphere'
*/
index95be6bfcfce49d496de6752d648b7ee3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index95be6bfcfce49d496de6752d648b7ee3.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/api/v1/photosphere'
*/
index95be6bfcfce49d496de6752d648b7ee3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index95be6bfcfce49d496de6752d648b7ee3.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index95be6bfcfce49d496de6752d648b7ee3.form = index95be6bfcfce49d496de6752d648b7ee3Form
/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/admin/photosphere'
*/
const index71bf689b56548835349c0ca73c6d82c2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index71bf689b56548835349c0ca73c6d82c2.url(options),
    method: 'get',
})

index71bf689b56548835349c0ca73c6d82c2.definition = {
    methods: ["get","head"],
    url: '/admin/photosphere',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/admin/photosphere'
*/
index71bf689b56548835349c0ca73c6d82c2.url = (options?: RouteQueryOptions) => {
    return index71bf689b56548835349c0ca73c6d82c2.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/admin/photosphere'
*/
index71bf689b56548835349c0ca73c6d82c2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index71bf689b56548835349c0ca73c6d82c2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/admin/photosphere'
*/
index71bf689b56548835349c0ca73c6d82c2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index71bf689b56548835349c0ca73c6d82c2.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/admin/photosphere'
*/
const index71bf689b56548835349c0ca73c6d82c2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index71bf689b56548835349c0ca73c6d82c2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/admin/photosphere'
*/
index71bf689b56548835349c0ca73c6d82c2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index71bf689b56548835349c0ca73c6d82c2.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::index
* @see app/Http/Controllers/PhotosphereController.php:21
* @route '/admin/photosphere'
*/
index71bf689b56548835349c0ca73c6d82c2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index71bf689b56548835349c0ca73c6d82c2.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index71bf689b56548835349c0ca73c6d82c2.form = index71bf689b56548835349c0ca73c6d82c2Form

export const index = {
    '/api/v1/photosphere': index95be6bfcfce49d496de6752d648b7ee3,
    '/admin/photosphere': index71bf689b56548835349c0ca73c6d82c2,
}

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:101
* @route '/api/v1/photosphere/{photosphere}'
*/
const showeac298e4354eb40a3cd744fa5af0df3a = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showeac298e4354eb40a3cd744fa5af0df3a.url(args, options),
    method: 'get',
})

showeac298e4354eb40a3cd744fa5af0df3a.definition = {
    methods: ["get","head"],
    url: '/api/v1/photosphere/{photosphere}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:101
* @route '/api/v1/photosphere/{photosphere}'
*/
showeac298e4354eb40a3cd744fa5af0df3a.url = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return showeac298e4354eb40a3cd744fa5af0df3a.definition.url
            .replace('{photosphere}', parsedArgs.photosphere.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:101
* @route '/api/v1/photosphere/{photosphere}'
*/
showeac298e4354eb40a3cd744fa5af0df3a.get = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showeac298e4354eb40a3cd744fa5af0df3a.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:101
* @route '/api/v1/photosphere/{photosphere}'
*/
showeac298e4354eb40a3cd744fa5af0df3a.head = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showeac298e4354eb40a3cd744fa5af0df3a.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:101
* @route '/api/v1/photosphere/{photosphere}'
*/
const showeac298e4354eb40a3cd744fa5af0df3aForm = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showeac298e4354eb40a3cd744fa5af0df3a.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:101
* @route '/api/v1/photosphere/{photosphere}'
*/
showeac298e4354eb40a3cd744fa5af0df3aForm.get = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showeac298e4354eb40a3cd744fa5af0df3a.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:101
* @route '/api/v1/photosphere/{photosphere}'
*/
showeac298e4354eb40a3cd744fa5af0df3aForm.head = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showeac298e4354eb40a3cd744fa5af0df3a.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showeac298e4354eb40a3cd744fa5af0df3a.form = showeac298e4354eb40a3cd744fa5af0df3aForm
/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:101
* @route '/admin/photosphere/{photosphere}'
*/
const show8f252b1a39d0d67145a9faeab7b71513 = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show8f252b1a39d0d67145a9faeab7b71513.url(args, options),
    method: 'get',
})

show8f252b1a39d0d67145a9faeab7b71513.definition = {
    methods: ["get","head"],
    url: '/admin/photosphere/{photosphere}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:101
* @route '/admin/photosphere/{photosphere}'
*/
show8f252b1a39d0d67145a9faeab7b71513.url = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show8f252b1a39d0d67145a9faeab7b71513.definition.url
            .replace('{photosphere}', parsedArgs.photosphere.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:101
* @route '/admin/photosphere/{photosphere}'
*/
show8f252b1a39d0d67145a9faeab7b71513.get = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show8f252b1a39d0d67145a9faeab7b71513.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:101
* @route '/admin/photosphere/{photosphere}'
*/
show8f252b1a39d0d67145a9faeab7b71513.head = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show8f252b1a39d0d67145a9faeab7b71513.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:101
* @route '/admin/photosphere/{photosphere}'
*/
const show8f252b1a39d0d67145a9faeab7b71513Form = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show8f252b1a39d0d67145a9faeab7b71513.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:101
* @route '/admin/photosphere/{photosphere}'
*/
show8f252b1a39d0d67145a9faeab7b71513Form.get = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show8f252b1a39d0d67145a9faeab7b71513.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::show
* @see app/Http/Controllers/PhotosphereController.php:101
* @route '/admin/photosphere/{photosphere}'
*/
show8f252b1a39d0d67145a9faeab7b71513Form.head = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show8f252b1a39d0d67145a9faeab7b71513.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show8f252b1a39d0d67145a9faeab7b71513.form = show8f252b1a39d0d67145a9faeab7b71513Form

export const show = {
    '/api/v1/photosphere/{photosphere}': showeac298e4354eb40a3cd744fa5af0df3a,
    '/admin/photosphere/{photosphere}': show8f252b1a39d0d67145a9faeab7b71513,
}

/**
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:51
* @route '/api/v1/photosphere'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/v1/photosphere',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:51
* @route '/api/v1/photosphere'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:51
* @route '/api/v1/photosphere'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:51
* @route '/api/v1/photosphere'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotosphereController::store
* @see app/Http/Controllers/PhotosphereController.php:51
* @route '/api/v1/photosphere'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:134
* @route '/api/v1/photosphere/{photosphere}'
*/
export const update = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/v1/photosphere/{photosphere}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:134
* @route '/api/v1/photosphere/{photosphere}'
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
* @route '/api/v1/photosphere/{photosphere}'
*/
update.put = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:134
* @route '/api/v1/photosphere/{photosphere}'
*/
update.patch = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PhotosphereController::update
* @see app/Http/Controllers/PhotosphereController.php:134
* @route '/api/v1/photosphere/{photosphere}'
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
* @route '/api/v1/photosphere/{photosphere}'
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
* @route '/api/v1/photosphere/{photosphere}'
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
* @see app/Http/Controllers/PhotosphereController.php:232
* @route '/api/v1/photosphere/{photosphere}'
*/
export const destroy = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/v1/photosphere/{photosphere}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PhotosphereController::destroy
* @see app/Http/Controllers/PhotosphereController.php:232
* @route '/api/v1/photosphere/{photosphere}'
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
* @see app/Http/Controllers/PhotosphereController.php:232
* @route '/api/v1/photosphere/{photosphere}'
*/
destroy.delete = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PhotosphereController::destroy
* @see app/Http/Controllers/PhotosphereController.php:232
* @route '/api/v1/photosphere/{photosphere}'
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
* @see app/Http/Controllers/PhotosphereController.php:232
* @route '/api/v1/photosphere/{photosphere}'
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
* @see \App\Http\Controllers\PhotosphereController::image
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/photosphere/{photosphere}/image'
*/
export const image = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: image.url(args, options),
    method: 'get',
})

image.definition = {
    methods: ["get","head"],
    url: '/photosphere/{photosphere}/image',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotosphereController::image
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/photosphere/{photosphere}/image'
*/
image.url = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return image.definition.url
            .replace('{photosphere}', parsedArgs.photosphere.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::image
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/photosphere/{photosphere}/image'
*/
image.get = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: image.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::image
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/photosphere/{photosphere}/image'
*/
image.head = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: image.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotosphereController::image
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/photosphere/{photosphere}/image'
*/
const imageForm = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: image.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::image
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/photosphere/{photosphere}/image'
*/
imageForm.get = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: image.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::image
* @see app/Http/Controllers/PhotosphereController.php:113
* @route '/photosphere/{photosphere}/image'
*/
imageForm.head = (args: { photosphere: string | number } | [photosphere: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: image.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

image.form = imageForm

/**
* @see \App\Http\Controllers\PhotosphereController::create
* @see app/Http/Controllers/PhotosphereController.php:36
* @route '/admin/photosphere/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/photosphere/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotosphereController::create
* @see app/Http/Controllers/PhotosphereController.php:36
* @route '/admin/photosphere/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotosphereController::create
* @see app/Http/Controllers/PhotosphereController.php:36
* @route '/admin/photosphere/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::create
* @see app/Http/Controllers/PhotosphereController.php:36
* @route '/admin/photosphere/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotosphereController::create
* @see app/Http/Controllers/PhotosphereController.php:36
* @route '/admin/photosphere/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::create
* @see app/Http/Controllers/PhotosphereController.php:36
* @route '/admin/photosphere/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::create
* @see app/Http/Controllers/PhotosphereController.php:36
* @route '/admin/photosphere/create'
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
* @route '/admin/photosphere/{photosphere}/edit'
*/
export const edit = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/photosphere/{photosphere}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotosphereController::edit
* @see app/Http/Controllers/PhotosphereController.php:121
* @route '/admin/photosphere/{photosphere}/edit'
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
* @route '/admin/photosphere/{photosphere}/edit'
*/
edit.get = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::edit
* @see app/Http/Controllers/PhotosphereController.php:121
* @route '/admin/photosphere/{photosphere}/edit'
*/
edit.head = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotosphereController::edit
* @see app/Http/Controllers/PhotosphereController.php:121
* @route '/admin/photosphere/{photosphere}/edit'
*/
const editForm = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::edit
* @see app/Http/Controllers/PhotosphereController.php:121
* @route '/admin/photosphere/{photosphere}/edit'
*/
editForm.get = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotosphereController::edit
* @see app/Http/Controllers/PhotosphereController.php:121
* @route '/admin/photosphere/{photosphere}/edit'
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

const PhotosphereController = { index, show, store, update, destroy, image, create, edit }

export default PhotosphereController