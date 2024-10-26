<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\HomeLocation>
 */
class HomeLocationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'home_id' => rand(1, 5),
            'lat' => -6.21462 + (float)rand() / 1000000,
            'long' => 106.84513 + (float)rand() / 1000000,
            'address' => 'Jalan ' . rand(1, 100) . ' ' . array_rand(['Perumahan', 'Apartemen', 'Ruko', 'Kost', 'Kontrakan']) . ' ' . array_rand(['Griya', 'Kemang', 'Fatmawati', 'Sudirman', 'Thamrin', 'Kuningan', 'Pondok', 'Cipete']),
        ];
    }
}
