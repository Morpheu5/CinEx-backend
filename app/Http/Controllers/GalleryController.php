<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\Photosphere;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request) {
        $all = Gallery::with('photosphere')->get();

        if (!$request->routeIs('dashboard.*')) {
            return collect($all);
        }

        return Inertia::render('dashboard/gallery/index', [
            'galleries' => collect($all),
            'filters' => [],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
    public function edit(string $id) {
        $gallery = Gallery::with('photosphere')->findOrFail($id);
        $photospheres = Photosphere::select(['id', 'name'])->get();

        return Inertia::render('dashboard/gallery/edit', [
            'gallery' => $gallery,
            'photospheres' => $photospheres,
        ]);
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
