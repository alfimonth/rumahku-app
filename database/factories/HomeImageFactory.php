<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HomeImage>
 */
class HomeImageFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'home_id' => 1,
            'image' => 'https://events.rumah123.com/wp-content/uploads/sites/38/2015/10/25151430/18.-Rumah-Minimalis-Modern-Bernuansa-Skandinavia-1024x1024.jpg',
            'image_class' => 'cover',
        ];
    }
}
