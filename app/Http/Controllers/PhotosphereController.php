<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Theatre;
use App\Models\Photosphere;
use App\Http\Resources\TheatreResource;
use App\Http\Resources\PhotosphereResource;

class PhotosphereController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request) {
        $all = Photosphere::all();

        if ($request->wantsJson()) {
            return PhotoshpereResource::collection($all);
        }

        return Inertia::render('dashboard/photosphere/index', [
            'photospheres' => PhotosphereResource::collection($all),
            'filters' => [

            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        $theatres = Theatre::query()
            ->select('id', 'name')
            ->orderBy('name')
            ->get();
        
        return Inertia::render('dashboard/photosphere/create', [
            'theatres' => $theatres,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {
        $data = $request->validate([
            'name' => 'required|string',
            'file' => 'required',
            'theatre_id' => 'required|exists:theatres,id',
        ]);
        $path = $request->file('file')->store('photospheres');
        $data['path'] = $path;
        $request->user()->photospheres()->create([
            'name' => $data['name'],
            'path' => $path,
            'theatre_id' => $data['theatre_id'],
        ]);
        return redirect()->route('dashboard.photosphere.index')
            ->with('success', 'Photosphere created.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
