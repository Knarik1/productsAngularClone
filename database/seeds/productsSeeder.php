<?php

use Illuminate\Database\Seeder;

class productsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([[
            'name' => 'elak',
            'category' => 'fruit',
            'price' => 39.45,
            'brand' => 'freshFruit',
            'color' => 'green',
            'image' => 'images/elak.jpg',
            'type' => 'greece',
            'count' => 800
        ],
            [
                'name' => 'shirt',
                'category' => 'clothes',
                'price' => 7498.23,
                'brand' => 'addidas',
                'color' => 'yellow',
                'image' => 'images/shirt.jpg',
                'type' => 'cotton',
                'count' => 300
            ]]);
    }
}
