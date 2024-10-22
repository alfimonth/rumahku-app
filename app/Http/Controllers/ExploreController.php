<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ExploreController extends Controller
{
    private $homes = [
        [
            'name' => 'Home 1',
            'price' => 9000.000,
            'investTotal' => 70,
            'investor' => 9,
            'id' => 1,
        ],
        [
            'name' => 'Home 2',
            'price' => 10000000,
            'investTotal' => 50,
            'investor' => "9",
            'id' => 2,
        ],
        [
            'name' => 'Home 3',
            'price' => 2500000000,
            'investTotal' => 90,
            'investor' => 9,
            'id' => 3,
        ],
    ];
    public function index()
    {
        return Inertia::render('Explore', [
            'homes' => $this->homes
        ]);
    }
}
