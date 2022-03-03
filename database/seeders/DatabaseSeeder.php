<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use SebastianBergmann\CodeCoverage\Driver\Driver;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            DriverSeeder::class,
            TeamSeeder::class
        ]);
    }
}
