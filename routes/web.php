<?php

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
Route::apiResource('photo', PhotoController::class);

Route::prefix('dashboard')->group(function () {
    Route::get('theatre', [App\Http\Controllers\TheatreController::class, 'index'])->name('dashboard.theatre.index');
    Route::get('theatre/new', [App\Http\Controllers\TheatreController::class, 'create'])->name('dashboard.theatre.create');
    Route::get('theatre/{theatre}', [App\Http\Controllers\TheatreController::class, 'show'])->name('dashboard.theatre.show');
    Route::get('theatre/{theatre}/edit', [App\Http\Controllers\TheatreController::class, 'edit'])->name('dashboard.theatre.edit');
})->middleware(['auth', 'verified']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
