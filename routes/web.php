<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\UtamaController;
use Illuminate\Support\Facades\Route;

//Route::get('/', function () {
//    return inertia('Home');
//});

Route::get('/', [UtamaController::class, 'index'])->name('home');
Route::get('/coba', [UtamaController::class, 'coba']);
Route::resource('posts', PostController::class)->except('index');
