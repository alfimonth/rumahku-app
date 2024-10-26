<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class HomeLocation extends Model
{
    use HasFactory;

    protected $guarded = [
        'id'
    ];

    public function home()
    {
        return $this->belongsTo(Home::class);
    }
}
