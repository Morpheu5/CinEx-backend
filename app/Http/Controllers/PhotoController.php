<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdatePhotoRequest;
use App\Models\Photo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PhotoController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index() {
       abort(404);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {
        $photo = Photo::find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePhotoRequest $request, string $galleryId, string $photoId) {
        $photo = Photo::where('gallery_id', $galleryId)->findOrFail($photoId);
        $photo->update($request->validated());
        return back()->with('success', 'Caption updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $galleryId, string $photoId) {
        $photo = Photo::where('gallery_id', $galleryId)->findOrFail($photoId);
        if ($photo->path) {
            Storage::disk('public')->delete($photo->path);
        }
        $photo->delete();
        return back()->with('success', 'Photo removed');
    }
}
