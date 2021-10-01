<?php

namespace Monaye\NovaProfileResourceTools\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Validator;

class NovaProfileResourceToolsController extends Controller
{
    public function updateInformation(Request $request)
    {
        $user = $request->user();
        $user->email = $request->email;
        $user->username = $request->email;
        $user->save();
        $owner = $user->owner;
        $owner->name = $request->name;
        $owner->save();

        return response()->json([
            'message' => 'プロフィールを更新しました。',
        ]);
    }

    public function updatePassword(Request $request)
    {
        $user = $request->user();

        Validator::make($request->all(), [
            'current_password' => ['required', 'string'],
            'password' => ['required', 'string', Password::min(6), 'confirmed'],
        ])->after(function ($validator) use ($request, $user) {
            if (!isset($request->current_password) || !Hash::check($request->current_password, $user->password)) {
                $validator->errors()->add('current_password', __('The provided password does not match your current password.'));
            }
        })->validateWithBag('updatePassword');

        $user->forceFill([
            'password' => Hash::make($request->password),
        ])->save();
    }
}
