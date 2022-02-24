<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TeamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $teams = [
            [
                'team_name' => "Mercedes AMG F1",
                'hex_color' => "00D2BE",
            ],
            [
                'team_name' => "Scuderia Ferrari",
                'hex_color' => "DC0000",
            ],
            [
                'team_name' => "Red Bull Racing",
                'hex_color' => "1E41FF",
            ],
            [
                'team_name' => "Renault F1 Team",
                'hex_color' => "FFF500",
            ],
            [
                'team_name' => "Haas F1 Team",
                'hex_color' => "F0D787",
            ],
            [
                'team_name' => "Racing Point F1",
                'hex_color' => "F596C8",
            ],
            [
                'team_name' => "Alpha Tauri F1",
                'hex_color' => "469BFF",
            ],
            [
                'team_name' => "McLaren F1",
                'hex_color' => "FF8700",
            ],
            [
                'team_name' => "Alfa Romeo Racing",
                'hex_color' => "9B0000",
            ],
            [
                'team_name' => "Williams Racing",
                'hex_color' => "419FD9",
            ],

        ];
        DB::table('team')->insert($teams);
    }
}
