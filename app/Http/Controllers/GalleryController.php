<?php

namespace App\Http\Controllers;

use App\Data\GalleryData;
use App\Http\Requests\Gallery\StoreGalleryRequest;
use App\Http\Requests\Gallery\UpdateGalleryRequest;
use App\Models\Gallery;
use App\Models\Photo;
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
            return GalleryData::collect($all);
        }

        return Inertia::render('dashboard/gallery/index', [
            'galleries' => GalleryData::collect($all),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        $photospheres = Photosphere::all();
        return Inertia::render('dashboard/gallery/create', [
            'photospheres' => $photospheres,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreGalleryRequest $request) {
        $data = $request->validated();
        $gallery = Gallery::create([
            'photosphere_id' => $data['photosphere_id'],
            'user_id' => $request->user()->id,
            'name' => $data['name'],
            'latitude' => $data['latitude'],
            'longitude' => $data['longitude'],
        ]);

        // Handle file uploads: photos[]
        if ($request->hasFile('photos')) {
            foreach ($request->photos as $upload) {
                $stored = $upload->store('galleries/' . $gallery->id, 'local');
                Photo::create([
                    'gallery_id' => $gallery->id,
                    'user_id' => $request->user()->id,
                    'path' => $stored,
                    'description' => '',
                ]);
            }
        }

        return redirect()->route('dashboard.gallery.edit', $gallery)
            ->with('success', 'Gallery created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {
        $gallery = Gallery::with(['photosphere', 'photos'])->findOrFail($id);
        return Inertia::render('dashboard/gallery/show', [
            'gallery' => GalleryData::from($gallery),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id) {
        $gallery = Gallery::with(['photosphere', 'photos'])->findOrFail($id);
        $photospheres = Photosphere::select(['id', 'name'])->get();

        return Inertia::render('dashboard/gallery/edit', [
            'gallery' => $gallery,
            'photospheres' => $photospheres,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateGalleryRequest $request, string $id) {
        $gallery = Gallery::findOrFail($id);
        $data = $request->validated();

        $gallery->update([
            'name' => $data['name'],
            'latitude' => $data['latitude'],
            'longitude' => $data['longitude'],
        ]);

        if ($request->hasFile('photos')) {
            foreach ($request->photos as $upload) {
                $stored = $upload->store('galleries/' . $gallery->id, 'local');
                Photo::create([
                    'gallery_id' => $gallery->id,
                    'user_id' => $request->user()->id,
                    'path' => $stored,
                    'description' => '',
                ]);
            }
        }

        return redirect()->route('dashboard.gallery.edit', $gallery)
            ->setStatusCode(303);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id) {
        $gallery = Gallery::with('photos')->findOrFail($id);
        $gallery->delete();
        return redirect()->route('dashboard.gallery.index')
            ->with('success', 'Gallery deleted successfully.');
    }
}
