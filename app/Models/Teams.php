<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teams extends Model
{
    use HasFactory;

    protected $table = 'team';
    protected $primaryKey = 'id';
    protected $visible = ['id','team_name', 'hex_color'];

    protected $fillable = ['id','team_name', 'hex_color'];

    public function teamHaveDrivers(){
        return $this->hasMany(Drivers::class);
    }
}
