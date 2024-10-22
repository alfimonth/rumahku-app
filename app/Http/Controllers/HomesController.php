<?php

namespace App\Http\Controllers;

use App\Models\Home as HomeModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomesController extends Controller
{
    public function index()
    {
        $homes = HomeModel::latest()->get();
        return Inertia::render('Explore', [
            'homes' => $homes
        ]);
    }

    public function show($id)
    {
        return Inertia::render('Detail', [
            'home' => '',
        ]);
    }
}
