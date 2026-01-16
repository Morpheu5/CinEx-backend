import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import theatre from './theatre'
import photosphere from './photosphere'
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

const viewer = {
    index: Object.assign(index, index),
    theatre: Object.assign(theatre, theatre),
    photosphere: Object.assign(photosphere, photosphere),
}

export default viewer