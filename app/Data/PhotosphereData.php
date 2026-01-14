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
     * @param string                               $image_url
     * @param int                                  $theatre_id
     * @param Lazy|TheatreData                          $theatre
     * @param Lazy|DataCollection<GalleryData>|Optional $galleries
     * @param Lazy|DataCollection<NavigationAnchorData>|Optional $navigation_anchors
     */
    public function __construct(
        public int                     $id,
        public string                  $name,
        public string                  $path,
        public string                  $image_url,
        public int                     $theatre_id,
        public Lazy|TheatreData             $theatre,
        public Lazy|DataCollection|Optional $galleries,
        public Lazy|DataCollection|Optional $navigation_anchors,
    ) {}

    public static function fromModel(Photosphere $photosphere): self {
        return new self(
            id:         $photosphere->id,
            name:       $photosphere->name,
            path:       $photosphere->path,
            image_url:  route('photosphere.image', $photosphere),
            theatre_id: $photosphere->theatre_id,
            theatre:    Lazy::whenLoaded('theatre', $photosphere,
                fn () => TheatreData::from($photosphere->theatre)
            ),
            galleries:  Lazy::whenLoaded('galleries', $photosphere,
                fn () => GalleryData::collect($photosphere->galleries ?? collect(), DataCollection::class),
            ),
            navigation_anchors: Lazy::whenLoaded('navigationAnchors', $photosphere,
                fn () => NavigationAnchorData::collect($photosphere->navigationAnchors ?? collect(), DataCollection::class),
            )
        );
    }
}
