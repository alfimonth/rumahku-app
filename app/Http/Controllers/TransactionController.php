<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    private $homes = [
        [
            'name' => 'Home 1',
            'price' => 9000.000,
            'investTotal' => 50,
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
            'investTotal' => 50,
            'investor' => 9,
            'id' => 3,
        ],
    ];

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Transaction', [
            'activePage' => 'transactions'
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
