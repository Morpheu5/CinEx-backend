<?php

namespace App\Data;

use App\Models\Photo;
use Spatie\LaravelData\Data;

class PhotoData extends Data {
    /**
     * @param int    $id
     * @param string $path
     * @param string $image_url
     * @param string $description
     * @param int    $gallery_id
     */
    public function __construct(
        public int    $id,
        public string $path,
        public string $image_url,
        public string $description,
        public int    $gallery_id,
    ) {}

    public static function fromModel(Photo $photo): self {
        return new self(
            id:          $photo->id,
            path:        $photo->path,
            // Prefer routing through a controller so images can be private / signed / cached etc.
            // Keep it relative so it works both in Inertia and in the separate viewer app.
            image_url:   route('photo.image', $photo),
            description: $photo->description,
            gallery_id:  $photo->gallery_id,
        );
    }
}
