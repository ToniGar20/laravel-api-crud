<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DriverSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $drivers = [
            [
                'fname' => "Lewis",
                'lname' => "Hamilton",
                'team_id' => 1
            ],
            [
                'fname' => "Valtteri",
                'lname' => "Bottas",
                'team_id' => 1
            ],
            [
                'fname' => "Sebastian",
                'lname' => "Vettel",
                'team_id' => 2
            ],
            [
                'fname' => "Charles",
                'lname' => "Leclerc",
                'team_id' => 2
            ],
            [
                'fname' => "Alex",
                'lname' => "Albon",
                'team_id' => 3
            ],
            [
                'fname' => "Max",
                'lname' => "Verstappen",
                'team_id' => 3
            ],
            [
                'fname' => "Nico",
                'lname' => "Hulkenberg",
                'team_id' => 4
            ],
            [
                'fname' => "Daniel",
                'lname' => "Ricciardo",
                'team_id' => 4
            ],
            [
                'fname' => "Kevin",
                'lname' => "Magnussen",
                'team_id' => 5
            ],
            [
                'fname' => "Romain",
                'lname' => "Grosjean",
                'team_id' => 5
            ],
            [
                'fname' => "Sergio",
                'lname' => "Pérez",
                'team_id' => 6
            ],
            [
                'fname' => "Lance",
                'lname' => "Stroll",
                'team_id' => 6
            ],
            [
                'fname' => "Pierre",
                'lname' => "Gasly",
                'team_id' => 7
            ],
            [
                'fname' => "Daniil",
                'lname' => "Kvyat",
                'team_id' => 7
            ],
            [
                'fname' => "Lando",
                'lname' => "Norris",
                'team_id' => 8
            ],
            [
                'fname' => "Carlos",
                'lname' => "Sainz",
                'team_id' => 8
            ],
            [
                'fname' => "Kimi",
                'lname' => "Raikkonen",
                'team_id' => 9
            ],
            [
                'fname' => "Antonio",
                'lname' => "Giovinazzi",
                'team_id' => 9
            ],
            [
                'fname' => "Robert",
                'lname' => "Kubica",
                'team_id' => 10
            ],
            [
                'fname' => "George",
                'lname' => "Russell",
                'team_id' => 10
            ],

        ];
        DB::table('driver')->insert($drivers);
    }
}
