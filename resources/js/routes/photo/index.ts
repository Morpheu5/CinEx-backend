import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
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

const photo = {
    image: Object.assign(image, image),
}

export default photo