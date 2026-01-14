import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/admin/navigation-anchor'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/navigation-anchor',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/admin/navigation-anchor'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/admin/navigation-anchor'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/admin/navigation-anchor'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/admin/navigation-anchor'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/admin/navigation-anchor'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::index
* @see app/Http/Controllers/NavigationAnchorController.php:15
* @route '/admin/navigation-anchor'
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
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/admin/navigation-anchor/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/navigation-anchor/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/admin/navigation-anchor/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/admin/navigation-anchor/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/admin/navigation-anchor/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/admin/navigation-anchor/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/admin/navigation-anchor/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::create
* @see app/Http/Controllers/NavigationAnchorController.php:30
* @route '/admin/navigation-anchor/create'
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
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/admin/navigation-anchor/{navigationAnchor}'
*/
export const show = (args: { navigationAnchor: string | number } | [navigationAnchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/navigation-anchor/{navigationAnchor}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/admin/navigation-anchor/{navigationAnchor}'
*/
show.url = (args: { navigationAnchor: string | number } | [navigationAnchor: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { navigationAnchor: args }
    }

    if (Array.isArray(args)) {
        args = {
            navigationAnchor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        navigationAnchor: args.navigationAnchor,
    }

    return show.definition.url
            .replace('{navigationAnchor}', parsedArgs.navigationAnchor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/admin/navigation-anchor/{navigationAnchor}'
*/
show.get = (args: { navigationAnchor: string | number } | [navigationAnchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/admin/navigation-anchor/{navigationAnchor}'
*/
show.head = (args: { navigationAnchor: string | number } | [navigationAnchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/admin/navigation-anchor/{navigationAnchor}'
*/
const showForm = (args: { navigationAnchor: string | number } | [navigationAnchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/admin/navigation-anchor/{navigationAnchor}'
*/
showForm.get = (args: { navigationAnchor: string | number } | [navigationAnchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::show
* @see app/Http/Controllers/NavigationAnchorController.php:45
* @route '/admin/navigation-anchor/{navigationAnchor}'
*/
showForm.head = (args: { navigationAnchor: string | number } | [navigationAnchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/admin/navigation-anchor/{navigationAnchor}/edit'
*/
export const edit = (args: { navigationAnchor: string | number } | [navigationAnchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/navigation-anchor/{navigationAnchor}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/admin/navigation-anchor/{navigationAnchor}/edit'
*/
edit.url = (args: { navigationAnchor: string | number } | [navigationAnchor: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { navigationAnchor: args }
    }

    if (Array.isArray(args)) {
        args = {
            navigationAnchor: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        navigationAnchor: args.navigationAnchor,
    }

    return edit.definition.url
            .replace('{navigationAnchor}', parsedArgs.navigationAnchor.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/admin/navigation-anchor/{navigationAnchor}/edit'
*/
edit.get = (args: { navigationAnchor: string | number } | [navigationAnchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/admin/navigation-anchor/{navigationAnchor}/edit'
*/
edit.head = (args: { navigationAnchor: string | number } | [navigationAnchor: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/admin/navigation-anchor/{navigationAnchor}/edit'
*/
const editForm = (args: { navigationAnchor: string | number } | [navigationAnchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/admin/navigation-anchor/{navigationAnchor}/edit'
*/
editForm.get = (args: { navigationAnchor: string | number } | [navigationAnchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\NavigationAnchorController::edit
* @see app/Http/Controllers/NavigationAnchorController.php:53
* @route '/admin/navigation-anchor/{navigationAnchor}/edit'
*/
editForm.head = (args: { navigationAnchor: string | number } | [navigationAnchor: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

const navigationAnchor = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
}

export default navigationAnchor