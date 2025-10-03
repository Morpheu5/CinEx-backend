import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:36
* @route '/photo/{photo}'
*/
export const update = (args: { photo: number | { id: number } } | [photo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/photo/{photo}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:36
* @route '/photo/{photo}'
*/
update.url = (args: { photo: number | { id: number } } | [photo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { photo: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { photo: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            photo: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        photo: typeof args.photo === 'object'
        ? args.photo.id
        : args.photo,
    }

    return update.definition.url
            .replace('{photo}', parsedArgs.photo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:36
* @route '/photo/{photo}'
*/
update.put = (args: { photo: number | { id: number } } | [photo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:36
* @route '/photo/{photo}'
*/
update.patch = (args: { photo: number | { id: number } } | [photo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:36
* @route '/photo/{photo}'
*/
const updateForm = (args: { photo: number | { id: number } } | [photo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:36
* @route '/photo/{photo}'
*/
updateForm.put = (args: { photo: number | { id: number } } | [photo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotoController::update
* @see app/Http/Controllers/PhotoController.php:36
* @route '/photo/{photo}'
*/
updateForm.patch = (args: { photo: number | { id: number } } | [photo: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\PhotoController::destroy
* @see app/Http/Controllers/PhotoController.php:44
* @route '/photo/{photo}'
*/
export const destroy = (args: { photo: string | number } | [photo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/photo/{photo}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\PhotoController::destroy
* @see app/Http/Controllers/PhotoController.php:44
* @route '/photo/{photo}'
*/
destroy.url = (args: { photo: string | number } | [photo: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { photo: args }
    }

    if (Array.isArray(args)) {
        args = {
            photo: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        photo: args.photo,
    }

    return destroy.definition.url
            .replace('{photo}', parsedArgs.photo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::destroy
* @see app/Http/Controllers/PhotoController.php:44
* @route '/photo/{photo}'
*/
destroy.delete = (args: { photo: string | number } | [photo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\PhotoController::destroy
* @see app/Http/Controllers/PhotoController.php:44
* @route '/photo/{photo}'
*/
const destroyForm = (args: { photo: string | number } | [photo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\PhotoController::destroy
* @see app/Http/Controllers/PhotoController.php:44
* @route '/photo/{photo}'
*/
destroyForm.delete = (args: { photo: string | number } | [photo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\PhotoController::image
* @see app/Http/Controllers/PhotoController.php:54
* @route '/photo/{photo}/image'
*/
export const image = (args: { photo: string | number } | [photo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: image.url(args, options),
    method: 'get',
})

image.definition = {
    methods: ["get","head"],
    url: '/photo/{photo}/image',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PhotoController::image
* @see app/Http/Controllers/PhotoController.php:54
* @route '/photo/{photo}/image'
*/
image.url = (args: { photo: string | number } | [photo: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { photo: args }
    }

    if (Array.isArray(args)) {
        args = {
            photo: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        photo: args.photo,
    }

    return image.definition.url
            .replace('{photo}', parsedArgs.photo.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\PhotoController::image
* @see app/Http/Controllers/PhotoController.php:54
* @route '/photo/{photo}/image'
*/
image.get = (args: { photo: string | number } | [photo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: image.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::image
* @see app/Http/Controllers/PhotoController.php:54
* @route '/photo/{photo}/image'
*/
image.head = (args: { photo: string | number } | [photo: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: image.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PhotoController::image
* @see app/Http/Controllers/PhotoController.php:54
* @route '/photo/{photo}/image'
*/
const imageForm = (args: { photo: string | number } | [photo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: image.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::image
* @see app/Http/Controllers/PhotoController.php:54
* @route '/photo/{photo}/image'
*/
imageForm.get = (args: { photo: string | number } | [photo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: image.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PhotoController::image
* @see app/Http/Controllers/PhotoController.php:54
* @route '/photo/{photo}/image'
*/
imageForm.head = (args: { photo: string | number } | [photo: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: image.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

image.form = imageForm

const PhotoController = { update, destroy, image }

export default PhotoController