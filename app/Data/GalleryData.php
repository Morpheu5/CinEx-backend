<?php

namespace App\Data;

use App\Models\Gallery;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\LaravelData\Lazy;
use Spatie\LaravelData\Optional;

class GalleryData extends Data {

    /**
     * @param int    $id
     * @param string $name
     * @param float|null $longitude
     * @param float|null $latitude
     * @param DataCollection<PhotoData>|Optional $photos
     * @param Lazy|PhotosphereData $photosphere
     */
    public function __construct(
        public int    $id,
        public string $name,
        public ?float $longitude,
        public ?float $latitude,
        public DataCollection|Optional $photos,
        public Lazy|PhotosphereData $photosphere,
    ) {}

    public static function fromModel(Gallery $gallery): self {
        return new self(
            id:             $gallery->id,
            name:           $gallery->name,
            longitude:      $gallery->longitude,
            latitude:       $gallery->latitude,
            photos:         PhotoData::collect($gallery->photos ?? collect(), DataCollection::class),
            photosphere:    Lazy::whenLoaded('photosphere', $gallery,
                fn () => PhotosphereData::from($gallery->photosphere)
            ),
        );
    }
}
