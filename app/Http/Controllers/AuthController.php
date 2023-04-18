<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Validate request data
        $this->validate($request, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
        ]);

        // Create a new user
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Return response
        return response()->json(['user' => $user, 'message' => 'Registration successful'], 201);
    }

    public function login(Request $request)
    {
        // Validate request data
        $this->validate($request, [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        // Attempt to authenticate user
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            /**  @var \App\Models\User $user **/
            $user = Auth::user();
            $token = $user->createToken('MyApp')->accessToken;
            return response()->json(['user' => $user, 'access_token' => $token, 'message' => 'Login successful'], 200);
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
}

