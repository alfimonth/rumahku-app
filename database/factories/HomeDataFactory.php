<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Carbon\Carbon;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HomeData>
 */
class HomeDataFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'home_id' => function () {
                return rand(1, 5);
            },
            'price' => function () {
                return number_format(rand(100000, 1000000000) / 100, 2, '.', '');
            },
            'time_end' => function () {
                return Carbon::now()->addDays(rand(1, 30))->toDateTimeString();
            },
        ];
    }
}
