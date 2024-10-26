<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Home>
 */
class HomeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $name = 'Home ' . $this->faker->words(3, true);
        $price = round($this->faker->randomFloat(2, 10000000, 1000000000), -3);
        return [
            'slug' => Str::slug($name),
            'name' => $name,
            'description' => $this->faker->sentence(10),
        ];
    }
}
