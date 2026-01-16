import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\ViewerController::show
* @see app/Http/Controllers/ViewerController.php:27
* @route '/viewer/theatres/{theatre}'
*/
export const show = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/viewer/theatres/{theatre}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ViewerController::show
* @see app/Http/Controllers/ViewerController.php:27
* @route '/viewer/theatres/{theatre}'
*/
show.url = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{theatre}', parsedArgs.theatre.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ViewerController::show
* @see app/Http/Controllers/ViewerController.php:27
* @route '/viewer/theatres/{theatre}'
*/
show.get = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ViewerController::show
* @see app/Http/Controllers/ViewerController.php:27
* @route '/viewer/theatres/{theatre}'
*/
show.head = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ViewerController::show
* @see app/Http/Controllers/ViewerController.php:27
* @route '/viewer/theatres/{theatre}'
*/
const showForm = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ViewerController::show
* @see app/Http/Controllers/ViewerController.php:27
* @route '/viewer/theatres/{theatre}'
*/
showForm.get = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ViewerController::show
* @see app/Http/Controllers/ViewerController.php:27
* @route '/viewer/theatres/{theatre}'
*/
showForm.head = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const theatre = {
    show: Object.assign(show, show),
}

export default theatre