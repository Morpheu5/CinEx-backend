<?php

use App\Http\Controllers\NavigationAnchorController;
use App\Models\Theatre;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ViewerController;
use Inertia\Inertia;

use App\Http\Controllers\UserController;
use App\Http\Controllers\TheatreController;
use App\Http\Controllers\PhotosphereController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\PhotoController;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');


Route::apiResource('user', UserController::class);

Route::prefix('api/v1')
    ->name('api.v1.')
    ->group(function() {
        Route::apiResource('theatre', TheatreController::class)->only(['index', 'show']);
        Route::apiResource('photosphere', PhotosphereController::class)->only(['index', 'show']);
        Route::apiResource('gallery', GalleryController::class)->only(['index', 'show']);
        Route::apiResource('photo', PhotoController::class)->only(['index', 'show']);
        Route::apiResource('navigation-anchor', NavigationAnchorController::class)->only(['index', 'show']);

        Route::middleware(['auth', 'verified'])->group(function() {
            Route::apiResource('theatre', TheatreController::class)->only(['store', 'update', 'destroy']);
            Route::apiResource('photosphere', PhotosphereController::class)->only(['store', 'update', 'destroy']);
            Route::apiResource('gallery', GalleryController::class)->only(['store', 'update', 'destroy']);
            Route::apiResource('photo', PhotoController::class)->only(['store', 'update', 'destroy']);
            Route::apiResource('navigation-anchor', NavigationAnchorController::class)->only(['store', 'update', 'destroy']);
        });
    });

Route::get('photosphere/{photosphere}/image', [PhotosphereController::class, 'image'])->name('photosphere.image');
Route::get('photo/{photo}/image', [PhotoController::class, 'image'])->name('photo.image');

// Three.js viewer (Laravel/Inertia)
Route::get('viewer', [ViewerController::class, 'index'])
    ->name('viewer.index');

Route::get('viewer/theatres/{theatre}', [ViewerController::class, 'theatre'])
    ->name('viewer.theatre.show');

Route::get('viewer/photospheres/{photosphere}', [ViewerController::class, 'show'])
    ->name('viewer.photosphere.show');

Route::get('admin', function () {
    return redirect('/admin/theatre');
})->middleware(['auth', 'verified'])->name('admin');

Route::prefix('admin')
    ->name('admin.')
    ->group(function () {
    Route::get('theatre', [App\Http\Controllers\TheatreController::class, 'index'])->name('theatre.index');
    Route::get('theatre/create', [App\Http\Controllers\TheatreController::class, 'create'])->name('theatre.create');
    Route::get('theatre/{theatre}', [App\Http\Controllers\TheatreController::class, 'show'])->name('theatre.show');
    Route::get('theatre/{theatre}/edit', [App\Http\Controllers\TheatreController::class, 'edit'])->name('theatre.edit');

    Route::get('photosphere', [App\Http\Controllers\PhotosphereController::class, 'index'])->name('photosphere.index');
    Route::get('photosphere/create', [App\Http\Controllers\PhotosphereController::class, 'create'])->name('photosphere.create');
    Route::get('photosphere/{photosphere}', [App\Http\Controllers\PhotosphereController::class, 'show'])->name('photosphere.show');
    Route::get('photosphere/{photosphere}/edit', [App\Http\Controllers\PhotosphereController::class, 'edit'])->name('photosphere.edit');

    Route::get('gallery', [App\Http\Controllers\GalleryController::class, 'index'])->name('gallery.index');
    Route::get('gallery/create', [App\Http\Controllers\GalleryController::class, 'create'])->name('gallery.create');
    Route::get('gallery/{gallery}', [App\Http\Controllers\GalleryController::class, 'show'])->name('gallery.show');
    Route::get('gallery/{gallery}/edit', [App\Http\Controllers\GalleryController::class, 'edit'])->name('gallery.edit');

    Route::get('navigation-anchor', [App\Http\Controllers\NavigationAnchorController::class, 'index'])->name('navigation-anchor.index');
    Route::get('navigation-anchor/create', [App\Http\Controllers\NavigationAnchorController::class, 'create'])->name('navigation-anchor.create');
    Route::get('navigation-anchor/{navigationAnchor}', [App\Http\Controllers\NavigationAnchorController::class, 'show'])->name('navigation-anchor.show');
    Route::get('navigation-anchor/{navigationAnchor}/edit', [App\Http\Controllers\NavigationAnchorController::class, 'edit'])->name('navigation-anchor.edit');
})->middleware(['auth', 'verified']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
