<?php

namespace App\Data;

use App\Models\Photo;
use Spatie\LaravelData\Data;

class PhotoData extends Data {
    /**
     * @param int    $id
     * @param string $path
     * @param string $description
     * @param int    $gallery_id
     */
    public function __construct(
        public int    $id,
        public string $path,
        public string $description,
        public int    $gallery_id,
    ) {}

    public static function fromModel(Photo $photo): self {
        return new self(
            id:          $photo->id,
            path:        $photo->path,
            description: $photo->description,
            gallery_id:  $photo->gallery_id,
        );
    }
}
