<?php

namespace Monaye\NovaProfileResourceTools\Controllers;

use App\Events\UserDeleted;
use Exception;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

class NovaProfileResourceToolsController extends Controller
{
    public function updateInformation(Request $request)
    {

        $user = $request->user();


        Validator::make($request->all(), [
            'name' => ['required'],
            'email' => [
                'required', 'email',
                Rule::unique('users')->ignore($user),
            ],
        ])->validate();

        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

        return response()->json([
            'message' => __('Account information updated successfully.'),
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

        return response()->json([
            'message' => __('Passsword updated successfully.'),
        ]);
    }

    public function deleteAccount(Request $request)
    {
        Validator::make($request->all(), [
            'password' => ['required', 'current_password:web'],
        ])->validate();

        $request->user()->forceDelete();

        return response()->json([
            'message' => __('Account removed successfully.'),
        ]);
    }
}
