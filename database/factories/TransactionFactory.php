<?php

namespace Database\Factories;

use App\Models\Transaction;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\HomeData as HomeDataModel;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Transaction>
 */
class TransactionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => 1,
            'home_data_id' => rand(1, 5),
            'amount' => function () {
                return rand(100000, 99999999999) / 100;
            },
            'payment_by' => function () {
                return ['BRI Direct', 'BCA Central Bank'][rand(0, 1)];
            },
            'status' => 'paid',
        ];
    }
}
