<?php

namespace App\Data;

use App\Models\Photosphere;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\LaravelData\Lazy;
use Spatie\LaravelData\Optional;

class PhotosphereData extends Data {
    /**
     * @param int                                  $id
     * @param string                               $name
     * @param string                               $path
     * @param int                                  $theatre_id
     * @param Lazy|TheatreData                          $theatre
     * @param DataCollection<GalleryData>|Optional $galleries
     */
    public function __construct(
        public int                     $id,
        public string                  $name,
        public string                  $path,
        public int                     $theatre_id,
        public Lazy|TheatreData             $theatre,
        public DataCollection|Optional $galleries,
    ) {}

    public static function fromModel(Photosphere $photosphere): self {
        return new self(
            id:         $photosphere->id,
            name:       $photosphere->name,
            path:       $photosphere->path,
            theatre_id: $photosphere->theatre_id,
            theatre:    Lazy::whenLoaded('theatre', $photosphere,
                fn () => TheatreData::from($photosphere->theatre)
            ),
            galleries:  GalleryData::collect($photosphere->galleries ?? collect(), DataCollection::class),
        );
    }
}
