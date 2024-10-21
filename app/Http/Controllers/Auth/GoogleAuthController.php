<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    public function redirect()
    {
        // return Socialite::driver('google')->redirect();

        try {
            return Socialite::driver('google')->redirect();
        } catch (\Exception $e) {
            return redirect('/login')->with('error', $e->getMessage());
        }
    }

    public function callback()
    {
        $driver = Socialite::driver('google')->user();

        // dd($driver);
        $user = User::updateOrCreate([
            'google_id' => $driver->id,
        ], [
            'name' => $driver->name,
            'username' => $driver->user['given_name'],
            'email' => $driver->email,
            'user_image' => $driver->avatar,
            'password' => 'hello world',
        ]);

        Auth::login($user);

        return redirect('/dashboard');
    }
}
