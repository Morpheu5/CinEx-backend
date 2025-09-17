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


Route::apiResource('users', UserController::class);
Route::apiResource('theatres', TheatreController::class);
Route::apiResource('photospheres', PhotosphereController::class);
Route::apiResource('galleries', GalleryController::class);
Route::apiResource('photos', PhotoController::class);


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
