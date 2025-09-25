<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
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
    public function show(string $id) {
        $photosphere = Photosphere::with('theatre')->find($id);
        return $photosphere;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id) {
        $photosphere = Photosphere::with('theatre')->find($id);

        return Inertia::render('dashboard/photosphere/edit', [
            'photosphere' => $photosphere->withRelationshipAutoloading(),
            'theatres' => Theatre::all(),
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Photosphere $photosphere) {
        // Validate inputs (adjust rules to your needs)
        $validated = $request->validate([
            'theatre_id' => ['required', 'integer', 'exists:theatres,id'],
            'name'       => ['required', 'string', 'max:255'],
            'file'       => ['nullable', 'file', 'mimes:jpg,jpeg,png,webp', 'max:20480'], // 20MB example
            'path'       => ['nullable', 'string'],
        ]);

        // Always update non-file fields
        $photosphere->theatre_id = (int) $validated['theatre_id'];
        $photosphere->name       = $validated['name'];

        // Disk & directory (change if you use another disk)
        $disk = 'public';
        $dir  = 'photospheres';

        if ($request->hasFile('file')) {
            // 1) Delete old file if present
            $oldPath = $photosphere->path;
            if ($oldPath && Storage::disk($disk)->exists($oldPath)) {
                Storage::disk($disk)->delete($oldPath);
            }

            // 2) Store the new file and replace path
            $newPath = $request->file('file')->store($dir, $disk);
            $photosphere->path = $newPath;

        } else {
            // No new file: keep/store the path "as it came in"
            // If the client sends '', this will persist '' (not null)
            if ($request->exists('path')) {
                $photosphere->path = $request->input('path');
            }
            // If 'path' isn't in the request at all, we leave the model's path untouched
        }

        $photosphere->save();

        return redirect()->route('dashboard.photosphere.edit', $photosphere)
            ->setStatusCode(303);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Photosphere $photosphere) {
        Storage::delete($photosphere->path);
        $photosphere->delete();

        return redirect()->route('photosphere.index')
            ->with('success', 'Photosphere deleted');

    }
}
