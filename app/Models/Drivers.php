<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Drivers extends Model
{
    use HasFactory;

    protected $table = 'driver';
    protected $primaryKey = 'id';
    protected $visible = ['id','fname', 'lname', 'team_id'];

    protected $fillable = ['id','fname', 'lname', 'team_id'];

    public function driverBelongToTeam () {
        return $this->belongsTo(Teams::class);
    }
}
