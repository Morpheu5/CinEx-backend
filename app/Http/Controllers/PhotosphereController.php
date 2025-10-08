<?php

namespace App\Http\Controllers;

use App\Data\PhotosphereData;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use App\Models\Theatre;
use App\Models\Photosphere;

use Throwable;

class PhotosphereController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request) {
        $all = Photosphere::with(['theatre'])->get();

        if (!$request->routeIs('dashboard.*')) {
            return PhotosphereData::collect($all);
        }

        return Inertia::render('dashboard/photosphere/index', [
            'photospheres' => PhotosphereData::collect($all),
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
     * @throws Throwable
     */
    public function store(Request $request) {
        $validated = $request->validate([
            'theatre_id'            => ['required', 'integer', 'exists:theatres,id'],
            'name'                  => ['required', 'string', 'max:255'],
            'file'                  => ['nullable', 'file', 'mimes:jpg,jpeg,png,webp', 'max:20480'],
            'path'                  => ['nullable', 'string'], // not used by the UI but harmless
            'galleries'             => ['array'],
            'galleries.*.id'        => ['prohibited'], // on create, forbid id to avoid ambiguity
            'galleries.*.name'      => ['required', 'string', 'min:1'],
            'galleries.*.latitude'  => ['required', 'numeric', 'between:-90,90'],
            'galleries.*.longitude' => ['required', 'numeric', 'between:-180,180'],
        ]);

        $photosphere = null;

        DB::transaction(function () use ($request, &$photosphere, $validated) {
            $dir = 'photospheres';
            $disk = 'local';
            $path = '';
            if ($request->hasFile('file')) {
                $path = $request->file('file')->store($dir, $disk);
            } elseif ($request->exists('path')) {
                $path = $request->input('path'); // This should normally empty on create UI though
            } else {
                // Neither file nor path are present
            }
            $photosphere = Photosphere::create([
                ...$validated,
                'user_id' => $request->user()->id,
                'path' => $path,
            ]);

            $incoming_galleries = collect($validated['galleries'] ?? []);

            foreach ($incoming_galleries as $gi => $gd) {
                $gallery = $photosphere->galleries()->create([
                    ...$gd,
                    'user_id'   => $photosphere->user_id,
                ]);
            }
        });

        return redirect()
            ->route('dashboard.photosphere.edit', $photosphere->id) // or your index
            ->setStatusCode(303);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, string $id) {
        $photosphere = Photosphere::with(['theatre', 'galleries'])->findOrFail($id);

        if (!$request->routeIs('dashboard.*')) {
            return $photosphere;
        }

        return Inertia::render('dashboard/photosphere/show', [
            'photosphere' => PhotosphereData::from($photosphere),
        ]);
    }

    public function image(Request $request, string $id) {
        $photosphere = Photosphere::findOrFail($id);
        return response()->file(Storage::path($photosphere->path));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Photosphere $photosphere) {
        $photosphere->load(['theatre', 'galleries']);

        return Inertia::render('dashboard/photosphere/edit', [
            'photosphere' => PhotosphereData::from($photosphere),
            'theatres' => Theatre::select('id','name')->orderBy('name')->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     * @throws Throwable
     */
    public function update(Request $request, Photosphere $photosphere) {
        // Validate inputs (adjust rules to your needs)
        $validated = $request->validate([
            'theatre_id'            => ['required', 'integer', 'exists:theatres,id'],
            'name'                  => ['required', 'string', 'max:255'],
            'file'                  => ['nullable', 'file', 'mimes:jpg,jpeg,png,webp', 'max:20480'],
            'path'                  => ['nullable', 'string'],
            'galleries'             => ['sometimes', 'array'],
            'galleries.*.id' => [
                'nullable', 'integer',
                // only allow updating galleries that belong to this photosphere
                Rule::exists('galleries', 'id')->where('photosphere_id', $photosphere->id),
            ],
            'galleries.*.name'      => ['required', 'string', 'min:1'],
            'galleries.*.latitude'  => ['required', 'numeric', 'between:-90,90'],
            'galleries.*.longitude' => ['required', 'numeric', 'between:-180,180'],
        ]);

        DB::transaction(callback: function () use ($request, &$photosphere, $validated) {
            $disk = 'local';
            $dir  = 'photospheres';

            $photosphere->name = $validated['name'];
            $photosphere->theatre_id = (int) $validated['theatre_id'];

            if ($request->hasFile('file')) {
                // Delete the old file
                $oldPath = $photosphere->path;
                if ($oldPath && Storage::disk($disk)->exists($oldPath)) {
                    Storage::disk($disk)->delete($oldPath);
                }

                // Store the new file and replace the path
                $newPath = $request->file('file')->store($dir, $disk);
                $photosphere->path = $newPath;
            } else {
                if ($request->exists('path')) {
                    $photosphere->path = $validated['path'];
                }
            }

            $photosphere->save();

            $incoming_galleries = collect($validated['galleries'] ?? []);
            $incoming_ids = $incoming_galleries->pluck('id')->filter()->values()->all();
            if ($request->has('galleries')) {
                $to_delete = [];
                if (!empty($incoming_ids)) {
                    // Pick any galleries with ids not present in the request
                    $to_delete = $photosphere->galleries()->whereNotIn('id', $incoming_ids)->get();
                } else {
                    // No galleries in the request so we pick them all
                    // This should not happen because if there are no galleries, the 'galleries' key should not be there
                    // but let's guard against API calls...
                    $to_delete = $photosphere->galleries()->get();
                }
                // and then actually delete them
                foreach ($to_delete as $g) {
                    foreach ($g->photos() as $i) {
                        Storage::disk($disk)->delete($i->path);
                        $i->delete(); // Should be cascaded but just in case
                    }
                    $g->delete();
                }
            } else {
                // Delete all the galleries
                // This is the case in which there is no 'galleries' key in the request so we nuke them all...
                $to_delete = $photosphere->galleries()->get();
                foreach ($to_delete as $g) {
                    foreach ($g->photos() as $p) {
                        Storage::disk($disk)->delete($p->path);
                        $p->delete();
                    }
                    $g->delete();
                }
            }

            // Now create all the remaining galleries
            $existing_ids = $photosphere->galleries()->pluck('id')->filter()->values()->all();
            $to_create = $incoming_galleries->whereNotIn('id', $existing_ids)->all();
            foreach ($to_create as $gi => $gd) {
                // Create the gallery...
                $gallery = Gallery::create([
                    ...$gd,
                    'photosphere_id' => $photosphere->id,
                    'user_id' => $photosphere->user_id,
                ]);
            }
        });

        return redirect()->route('dashboard.photosphere.edit', $photosphere)
            ->setStatusCode(303);
    }

    /**
     * Remove the specified resource from storage.
     * @throws Throwable
     */
    public function destroy(Photosphere $photosphere) {
        $disk = 'local';

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
