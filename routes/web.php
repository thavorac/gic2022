<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\AuthorController;

use App\Http\Middleware\AuthGuard;

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

Route::get('/forbidden', function() {
  return "Forbidden!! You are not allow to access this page";
});

Route::prefix('authors')->middleware([AuthGuard::class])->group(function() {
  Route::get('/', [AuthorController::class, "index"]);
  Route::get('/form', [AuthorController::class, "create"]);
  Route::post('/form', [AuthorController::class, "store"]);
});