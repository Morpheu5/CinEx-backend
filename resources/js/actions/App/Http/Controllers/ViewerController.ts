import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ViewerController::index
* @see app/Http/Controllers/ViewerController.php:12
* @route '/viewer'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/viewer',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ViewerController::index
* @see app/Http/Controllers/ViewerController.php:12
* @route '/viewer'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ViewerController::index
* @see app/Http/Controllers/ViewerController.php:12
* @route '/viewer'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ViewerController::index
* @see app/Http/Controllers/ViewerController.php:12
* @route '/viewer'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ViewerController::index
* @see app/Http/Controllers/ViewerController.php:12
* @route '/viewer'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ViewerController::index
* @see app/Http/Controllers/ViewerController.php:12
* @route '/viewer'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ViewerController::index
* @see app/Http/Controllers/ViewerController.php:12
* @route '/viewer'
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
* @see \App\Http\Controllers\ViewerController::theatre
* @see app/Http/Controllers/ViewerController.php:27
* @route '/viewer/theatres/{theatre}'
*/
export const theatre = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: theatre.url(args, options),
    method: 'get',
})

theatre.definition = {
    methods: ["get","head"],
    url: '/viewer/theatres/{theatre}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ViewerController::theatre
* @see app/Http/Controllers/ViewerController.php:27
* @route '/viewer/theatres/{theatre}'
*/
theatre.url = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return theatre.definition.url
            .replace('{theatre}', parsedArgs.theatre.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ViewerController::theatre
* @see app/Http/Controllers/ViewerController.php:27
* @route '/viewer/theatres/{theatre}'
*/
theatre.get = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: theatre.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ViewerController::theatre
* @see app/Http/Controllers/ViewerController.php:27
* @route '/viewer/theatres/{theatre}'
*/
theatre.head = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: theatre.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ViewerController::theatre
* @see app/Http/Controllers/ViewerController.php:27
* @route '/viewer/theatres/{theatre}'
*/
const theatreForm = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: theatre.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ViewerController::theatre
* @see app/Http/Controllers/ViewerController.php:27
* @route '/viewer/theatres/{theatre}'
*/
theatreForm.get = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: theatre.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ViewerController::theatre
* @see app/Http/Controllers/ViewerController.php:27
* @route '/viewer/theatres/{theatre}'
*/
theatreForm.head = (args: { theatre: number | { id: number } } | [theatre: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: theatre.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

theatre.form = theatreForm

/**
* @see \App\Http\Controllers\ViewerController::show
* @see app/Http/Controllers/ViewerController.php:47
* @route '/viewer/photospheres/{photosphere}'
*/
export const show = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/viewer/photospheres/{photosphere}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ViewerController::show
* @see app/Http/Controllers/ViewerController.php:47
* @route '/viewer/photospheres/{photosphere}'
*/
show.url = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{photosphere}', parsedArgs.photosphere.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ViewerController::show
* @see app/Http/Controllers/ViewerController.php:47
* @route '/viewer/photospheres/{photosphere}'
*/
show.get = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ViewerController::show
* @see app/Http/Controllers/ViewerController.php:47
* @route '/viewer/photospheres/{photosphere}'
*/
show.head = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ViewerController::show
* @see app/Http/Controllers/ViewerController.php:47
* @route '/viewer/photospheres/{photosphere}'
*/
const showForm = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ViewerController::show
* @see app/Http/Controllers/ViewerController.php:47
* @route '/viewer/photospheres/{photosphere}'
*/
showForm.get = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ViewerController::show
* @see app/Http/Controllers/ViewerController.php:47
* @route '/viewer/photospheres/{photosphere}'
*/
showForm.head = (args: { photosphere: number | { id: number } } | [photosphere: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

const ViewerController = { index, theatre, show }

export default ViewerController