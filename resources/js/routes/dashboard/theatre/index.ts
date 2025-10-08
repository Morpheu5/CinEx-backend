import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/dashboard/theatre'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/dashboard/theatre',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/dashboard/theatre'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/dashboard/theatre'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/dashboard/theatre'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/dashboard/theatre'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/dashboard/theatre'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::index
* @see app/Http/Controllers/TheatreController.php:16
* @route '/dashboard/theatre'
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
* @see \App\Http\Controllers\TheatreController::create
* @see app/Http/Controllers/TheatreController.php:31
* @route '/dashboard/theatre/new'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/dashboard/theatre/new',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TheatreController::create
* @see app/Http/Controllers/TheatreController.php:31
* @route '/dashboard/theatre/new'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TheatreController::create
* @see app/Http/Controllers/TheatreController.php:31
* @route '/dashboard/theatre/new'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::create
* @see app/Http/Controllers/TheatreController.php:31
* @route '/dashboard/theatre/new'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TheatreController::create
* @see app/Http/Controllers/TheatreController.php:31
* @route '/dashboard/theatre/new'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::create
* @see app/Http/Controllers/TheatreController.php:31
* @route '/dashboard/theatre/new'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::create
* @see app/Http/Controllers/TheatreController.php:31
* @route '/dashboard/theatre/new'
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
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/dashboard/theatre/{theatre}'
*/
export const show = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/dashboard/theatre/{theatre}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/dashboard/theatre/{theatre}'
*/
show.url = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return show.definition.url
            .replace('{theatre}', parsedArgs.theatre.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/dashboard/theatre/{theatre}'
*/
show.get = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/dashboard/theatre/{theatre}'
*/
show.head = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/dashboard/theatre/{theatre}'
*/
const showForm = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/dashboard/theatre/{theatre}'
*/
showForm.get = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::show
* @see app/Http/Controllers/TheatreController.php:56
* @route '/dashboard/theatre/{theatre}'
*/
showForm.head = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\TheatreController::edit
* @see app/Http/Controllers/TheatreController.php:71
* @route '/dashboard/theatre/{theatre}/edit'
*/
export const edit = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/dashboard/theatre/{theatre}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TheatreController::edit
* @see app/Http/Controllers/TheatreController.php:71
* @route '/dashboard/theatre/{theatre}/edit'
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
* @route '/dashboard/theatre/{theatre}/edit'
*/
edit.get = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::edit
* @see app/Http/Controllers/TheatreController.php:71
* @route '/dashboard/theatre/{theatre}/edit'
*/
edit.head = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TheatreController::edit
* @see app/Http/Controllers/TheatreController.php:71
* @route '/dashboard/theatre/{theatre}/edit'
*/
const editForm = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::edit
* @see app/Http/Controllers/TheatreController.php:71
* @route '/dashboard/theatre/{theatre}/edit'
*/
editForm.get = (args: { theatre: string | number } | [theatre: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TheatreController::edit
* @see app/Http/Controllers/TheatreController.php:71
* @route '/dashboard/theatre/{theatre}/edit'
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

const theatre = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
}

export default theatre