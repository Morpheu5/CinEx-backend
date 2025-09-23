<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\User;

class TheatreSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        $user = User::find(1);
        
        $user->theatres()->create([
            'name' => 'Cinema Teatro Filo',
            'city' => 'Cremona',
            'country' => 'IT',
            'longitude' => 45.135883,
            'latitude' => 10.0246753,
        ]);
    }
}
