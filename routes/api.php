<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Tool API Routes
|--------------------------------------------------------------------------
|
| Here is where you may register API routes for your tool. These routes
| are loaded by the ServiceProvider of your tool. You're free to add
| as many additional routes to this file as your tool may require.
|
*/

// Route::get('/endpoint', function (Request $request) {
//     //
// });

Route::post('/information', config('nova-profile-resource-tools.handleInformationUpdate'))
    ->name('update-nova-profile-information');

Route::post('/password', config('nova-profile-resource-tools.handlePasswordUpdate'))
    ->name('update-nova-profile-password');
