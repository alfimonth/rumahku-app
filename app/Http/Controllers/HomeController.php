<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
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
      'investTotal' => 60,
      'investor' => 9,
      'id' => 3,
    ],
  ];
  public function index()
  {
    return Inertia::render('Home', [
      'homes' => $this->homes
    ]);
  }
}
