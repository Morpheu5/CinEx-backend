<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Theatre;
use App\Http\Resources\TheatreResource;

class TheatreController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request) {
        $theatres = Theatre::all();

        if ($request->wantsJson()) {
            return TheatreResource::collection($theatres);
        }

        return Inertia::render('dashboard/theatre/index', [
            'theatres' => TheatreResource::collection($theatres),
            'filters' => [

            ],
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
    public function show(Request $request, string $id) {
        $theatre = Theatre::find($id);

        if ($request->wantsJson()) {
            return $theatre;
        }

        return Inertia::render('dashboard/theatre/show', [
            'theatre' => $theatre,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, string $id) {
        $theatre = Theatre::find($id);

        if ($request->wantsJson()) {
            return $theatre;
        }

        return Inertia::render('dashboard/theatre/edit', [
            'theatre' => $theatre,
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
