<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
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
        $validated = $request->validate([
            'theatre_id' => ['required', 'integer', 'exists:theatres,id'],
            'name'       => ['required', 'string', 'max:255'],
            'file'       => ['nullable', 'file', 'mimes:jpg,jpeg,png,webp', 'max:20480'],
            'path'       => ['nullable', 'string'], // not used by the UI but harmless
            'galleries'  => ['sometimes', 'array'],
            // on create, forbid id to avoid ambiguity
            'galleries.*.id'        => ['prohibited'],
            'galleries.*.name'      => ['required', 'string', 'min:1'],
            'galleries.*.latitude'  => ['required', 'numeric', 'between:-90,90'],
            'galleries.*.longitude' => ['required', 'numeric', 'between:-180,180'],
        ]);

        $disk = 'public';
        $dir  = 'photospheres';

        $photosphere = new \App\Models\Photosphere();
        $photosphere->user_id    = (int) $request->user()->id; // adjust if different policy
        $photosphere->theatre_id = (int) $validated['theatre_id'];
        $photosphere->name       = $validated['name'];

        if ($request->hasFile('file')) {
            $photosphere->path = $request->file('file')->store($dir, $disk);
        } elseif ($request->exists('path')) {
            $photosphere->path = $request->input('path'); // usually null/empty on create UI
        }

        $incoming = collect($validated['galleries'] ?? []);

        DB::transaction(function () use ($photosphere, $incoming) {
            $photosphere->save();

            foreach ($incoming as $g) {
                $photosphere->galleries()->create([
                    'user_id'   => $photosphere->user_id, // satisfy NOT NULL + ownership
                    'name'      => $g['name'],
                    'latitude'  => $g['latitude'],
                    'longitude' => $g['longitude'],
                ]);
            }
        });

        return redirect()
            ->route('dashboard.photosphere.edit', $photosphere) // or your index
            ->setStatusCode(303);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {
        $photosphere = Photosphere::with(['theatre', 'galleries'])->find($id);
        return $photosphere;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Photosphere $photosphere) {
        $photosphere->load(['theatre', 'galleries']);

        return Inertia::render('dashboard/photosphere/edit', [
            'photosphere' => [
                'id' => $photosphere->id,
                'name' => $photosphere->name,
                'path' => $photosphere->path,
                'theatre_id' => $photosphere->theatre_id,
                'theatre' => ['name' => $photosphere->theatre->name],
                'galleries' => $photosphere->galleries->map(fn($g) => [
                    'id' => $g->id,
                    'name' => $g->name,
                    'latitude' => $g->latitude,
                    'longitude' => $g->longitude,
                ]),
            ],
            'theatres' => Theatre::select('id','name')->orderBy('name')->get(),
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

            'galleries' => ['sometimes', 'array'],
            'galleries.*.id' => [
                'nullable', 'integer',
                // only allow updating galleries that belong to this photosphere
                Rule::exists('galleries', 'id')->where('photosphere_id', $photosphere->id),
            ],
            'galleries.*.name' => ['required', 'string', 'min:1'],
            'galleries.*.latitude' => ['required', 'numeric', 'between:-90,90'],
            'galleries.*.longitude' => ['required', 'numeric', 'between:-180,180'],
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

        DB::transaction(function () use ($photosphere, $request, $validated) {
            $photosphere->save();

            $incoming  = collect($validated['galleries'] ?? []);
            $inputIds  = $incoming->pluck('id')->filter()->values()->all(); // only existing rows

            // Destructive sync should run BEFORE we create new rows, so we don't delete them.
            if ($request->has('galleries')) {
                if (!empty($inputIds)) {
                    // Keep only the ones referenced by id; remove anything else
                    $photosphere->galleries()->whereNotIn('id', $inputIds)->delete();
                } else {
                    // All payload items are new (no ids) → replace everything
                    $photosphere->galleries()->delete();
                }
            }

            // Now update existing and create new
            foreach ($incoming as $g) {
                $payload = [
                    'name'      => $g['name'],
                    'latitude'  => $g['latitude'],
                    'longitude' => $g['longitude'],
                ];

                if (!empty($g['id'])) {
                    $photosphere->galleries()->whereKey($g['id'])->update($payload);
                } else {
                    $payload['user_id'] = $photosphere->user_id; // or auth()->id()
                    $photosphere->galleries()->create($payload);
                }
            }
        });

        $photosphere->save();

        return redirect()->route('dashboard.photosphere.edit', $photosphere)
            ->setStatusCode(303);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Photosphere $photosphere) {
        $disk = 'public';

        DB::transaction(function () use ($photosphere, $disk) {
            // Delete file if present
            if ($photosphere->path && Storage::disk($disk)->exists($photosphere->path)) {
                Storage::disk($disk)->delete($photosphere->path);
            }

            // Delete parent
            $photosphere->delete();
        });

        return redirect()
            ->route('dashboard.photosphere.index')
            ->with('success', 'Photosphere deleted');
    }
}
