import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
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

const photosphere = {
    image: Object.assign(image, image),
}

export default photosphere