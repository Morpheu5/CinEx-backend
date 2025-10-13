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

Route::get('dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::apiResource('user', UserController::class);
Route::apiResource('theatre', TheatreController::class);
Route::apiResource('photosphere', PhotosphereController::class);
Route::apiResource('gallery', GalleryController::class);
Route::apiResource('photo', PhotoController::class)->only(['update', 'destroy']);
Route::apiResource('navigation-anchor', NavigationAnchorController::class);

Route::get('photosphere/{photosphere}/image', [PhotosphereController::class, 'image'])->name('photosphere.image');
Route::get('photo/{photo}/image', [PhotoController::class, 'image'])->name('photo.image');

Route::prefix('dashboard')->group(function () {
    Route::get('theatre', [App\Http\Controllers\TheatreController::class, 'index'])->name('dashboard.theatre.index');
    Route::get('theatre/new', [App\Http\Controllers\TheatreController::class, 'create'])->name('dashboard.theatre.create');
    Route::get('theatre/{theatre}', [App\Http\Controllers\TheatreController::class, 'show'])->name('dashboard.theatre.show');
    Route::get('theatre/{theatre}/edit', [App\Http\Controllers\TheatreController::class, 'edit'])->name('dashboard.theatre.edit');

    Route::get('photosphere', [App\Http\Controllers\PhotosphereController::class, 'index'])->name('dashboard.photosphere.index');
    Route::get('photosphere/new', [App\Http\Controllers\PhotosphereController::class, 'create'])->name('dashboard.photosphere.create');
    Route::get('photosphere/{photosphere}', [App\Http\Controllers\PhotosphereController::class, 'show'])->name('dashboard.photosphere.show');
    Route::get('photosphere/{photosphere}/edit', [App\Http\Controllers\PhotosphereController::class, 'edit'])->name('dashboard.photosphere.edit');

    Route::get('gallery', [App\Http\Controllers\GalleryController::class, 'index'])->name('dashboard.gallery.index');
    Route::get('gallery/new', [App\Http\Controllers\GalleryController::class, 'create'])->name('dashboard.gallery.create');
    Route::get('gallery/{gallery}', [App\Http\Controllers\GalleryController::class, 'show'])->name('dashboard.gallery.show');
    Route::get('gallery/{gallery}/edit', [App\Http\Controllers\GalleryController::class, 'edit'])->name('dashboard.gallery.edit');

    Route::resource('navigation-anchor', NavigationAnchorController::class, ['as' => 'dashboard']);
})->middleware(['auth', 'verified']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
