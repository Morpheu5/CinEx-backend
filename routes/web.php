<?php

use App\Http\Controllers\NavigationAnchorController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

use App\Http\Controllers\UserController;
use App\Http\Controllers\TheatreController;
use App\Http\Controllers\PhotosphereController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\PhotoController;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->name('home');

Route::get('admin', function () {
    return Inertia::render('Admin');
})->middleware(['auth', 'verified'])->name('admin');


Route::apiResource('user', UserController::class);

Route::apiResource('theatre', TheatreController::class);

Route::apiResource('photosphere', PhotosphereController::class);
Route::get('photosphere/{photosphere}/image', [PhotosphereController::class, 'image'])->name('photosphere.image');

Route::apiResource('gallery', GalleryController::class);

Route::apiResource('photo', PhotoController::class);
Route::get('photo/{photo}/image', [PhotoController::class, 'image'])->name('photo.image');

Route::apiResource('navigation-anchor', NavigationAnchorController::class);


Route::prefix('admin')->group(function () {
    Route::get('theatre', [App\Http\Controllers\TheatreController::class, 'index'])->name('admin.theatre.index');
    Route::get('theatre/create', [App\Http\Controllers\TheatreController::class, 'create'])->name('admin.theatre.create');
    Route::get('theatre/{theatre}', [App\Http\Controllers\TheatreController::class, 'show'])->name('admin.theatre.show');
    Route::get('theatre/{theatre}/edit', [App\Http\Controllers\TheatreController::class, 'edit'])->name('admin.theatre.edit');

    Route::get('photosphere', [App\Http\Controllers\PhotosphereController::class, 'index'])->name('admin.photosphere.index');
    Route::get('photosphere/create', [App\Http\Controllers\PhotosphereController::class, 'create'])->name('admin.photosphere.create');
    Route::get('photosphere/{photosphere}', [App\Http\Controllers\PhotosphereController::class, 'show'])->name('admin.photosphere.show');
    Route::get('photosphere/{photosphere}/edit', [App\Http\Controllers\PhotosphereController::class, 'edit'])->name('admin.photosphere.edit');

    Route::get('gallery', [App\Http\Controllers\GalleryController::class, 'index'])->name('admin.gallery.index');
    Route::get('gallery/create', [App\Http\Controllers\GalleryController::class, 'create'])->name('admin.gallery.create');
    Route::get('gallery/{gallery}', [App\Http\Controllers\GalleryController::class, 'show'])->name('admin.gallery.show');
    Route::get('gallery/{gallery}/edit', [App\Http\Controllers\GalleryController::class, 'edit'])->name('admin.gallery.edit');

    Route::get('navigation-anchor', [App\Http\Controllers\NavigationAnchorController::class, 'index'])->name('admin.navigation-anchor.index');
    Route::get('navigation-anchor/create', [App\Http\Controllers\NavigationAnchorController::class, 'create'])->name('admin.navigation-anchor.create');
    Route::get('navigation-anchor/{gallery}', [App\Http\Controllers\NavigationAnchorController::class, 'show'])->name('admin.navigation-anchor.show');
    Route::get('navigation-anchor/{gallery}/edit', [App\Http\Controllers\NavigationAnchorController::class, 'edit'])->name('admin.navigation-anchor.edit');
})->middleware(['auth', 'verified']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
