<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Home extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function home_data()
    {
        return $this->hasOne(HomeData::class);
    }

    public function homeImage()
    {
        return $this->hasMany(HomeImage::class);
    }

    public function location()
    {
        return $this->hasOne(HomeLocation::class);
    }


    public static function boot()
    {
        // fungsi untuk menghilangkan masalah n+1 problem
        // this function automatically called by Eloquent
        parent::boot();

        static::retrieved(function ($model) {
            $model->load('home_data', 'homeImage', 'location');
        });
    }
}
