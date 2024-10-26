<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class HomeData extends Model
{
    use HasFactory;

    protected $guarded = [
        'id'
    ];

    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    public function homes()
    {
        return $this->belongsTo(Home::class);
    }

    public static function boot()
    {
        // fungsi untuk menghilangkan masalah n+1 problem
        // this function automatically called by Eloquent
        parent::boot();

        static::retrieved(function ($model) {
            $model->load('homes', 'transactions');
        });
    }
}
