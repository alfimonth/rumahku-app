<?php

namespace App\Http\Controllers;

use App\Models\Home as HomeModel;
use Inertia\Inertia;

class HomeController extends Controller
{
  public function index()
  {
    $homes = HomeModel::inRandomOrder()->take(4)->get();
    return Inertia::render('Home', [
      'homes' => $homes
    ]);
  }
}
