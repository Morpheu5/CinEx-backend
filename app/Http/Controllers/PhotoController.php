<?php

namespace App\Http\Controllers;

use App\Http\Requests\Photo\UpdatePhotoRequest;
use App\Models\Photo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
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
        abort(404);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {
        abort(404);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePhotoRequest $request, Photo $photo) {
        $photo->update($request->validated());
        return back()->with('success', 'Caption updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $photoId) {
        $photo = Photo::findOrFail($photoId);
        if ($photo->path) {
            Log::info($photo->path);
            Storage::disk('local')->delete($photo->path);
        }
        $photo->delete();
        return back()->with('success', 'Photo removed');
    }

    public function image(string $photoId) {
        $photo = Photo::findOrFail($photoId);
        return response()->file(Storage::path($photo->path));
    }
}
