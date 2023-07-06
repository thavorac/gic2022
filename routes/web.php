<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\AuthorController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/blogs', [BlogController::class, "index"]);
Route::get('/authors', [AuthorController::class, "index"]);
Route::get('/authors/form', [AuthorController::class, "create"]);
Route::post('/authors/form', [AuthorController::class, "store"]);