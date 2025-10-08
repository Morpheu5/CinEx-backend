<?php

namespace App\Data;

use App\Models\Gallery;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\LaravelData\Optional;

class GalleryData extends Data {

    /**
     * @param int    $id
     * @param string $name
     * @param float  $longitude
     * @param float  $latitude
     * @param DataCollection<PhotoData>|Optional $photos
     * @param int    $photosphere_id
     */
    public function __construct(
        public int    $id,
        public string $name,
        public float  $longitude,
        public float  $latitude,
        public DataCollection|Optional $photos,
        public int    $photosphere_id,
    ) {}

    public static function fromModel(Gallery $gallery): self {
        return new self(
            id:             $gallery->id,
            name:           $gallery->name,
            longitude:      $gallery->longitude,
            latitude:       $gallery->latitude,
            photos:         PhotoData::collect($gallery->photos ?? collect(), DataCollection::class),
            photosphere_id: $gallery->photosphere_id,
        );
    }
}
