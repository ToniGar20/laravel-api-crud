<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DB::table('driver')
            ->select('driver.id', 'driver.fname', 'driver.lname', 'team.team_name', 'team.hex_color')
            ->leftjoin('team', 'driver.team_id', '=', 'team.id')
            ->orderBy('team.id')
            ->orderBy('driver.id')
            ->get();

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return DB::table('driver')
            ->insert([
                'fname' => $request->fname,
                'lname' => $request->lname,
                'team_id' => $request->team
            ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return DB::table('driver')
            ->where('id',$id)
            ->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return DB::table('driver')
            ->where('id', $id)
            ->update([
                'fname' => $request->fname,
                'lname' => $request->lname,
                'team_id' => $request->team
            ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return $deleteDrive = DB::table('driver')
            ->where('id', $id)
            ->delete();
    }
}
