<?php

namespace App\Data;

use App\Models\Photosphere;
use App\Models\Theatre;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;
use Spatie\LaravelData\Lazy;
use Spatie\LaravelData\Optional;

class TheatreData extends Data {
    /**
     * @param int $id
     * @param string $name
     * @param string $city
     * @param string $country
     * @param float $latitude
     * @param float $longitude
     * @param Lazy|DataCollection<PhotosphereData>|Optional $photospheres
     */
    public function __construct(
        public int                     $id,
        public string                  $name,
        public string                  $city,
        public string                  $country,
        public float                   $latitude,
        public float                   $longitude,
        public Lazy|DataCollection|Optional $photospheres,
    ) {}

    public static function fromModel(Theatre $theatre): self {
        return new self(
            id:           $theatre->id,
            name:         $theatre->name,
            city:         $theatre->city,
            country:      $theatre->country,
            latitude:     $theatre->latitude,
            longitude:    $theatre->longitude,
            photospheres: Lazy::whenLoaded('photospheres', $theatre,
                fn () => PhotosphereData::collect($theatre->photospheres ?? collect(), DataCollection::class)
            ),
        );
    }
}
