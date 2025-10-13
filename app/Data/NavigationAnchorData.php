<?php
namespace App\Data;

use App\Models\NavigationAnchor;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Lazy;

class NavigationAnchorData extends Data {
    public function __construct(
        public int $id,
        public int $photosphere_id,
        public int $target_photosphere_id,
        public string $name,
        public float $longitude,
        public float $latitude,
        public Lazy|PhotosphereData $photosphere,
        public Lazy|PhotosphereData $target,
    ) {}

    public static function fromModel(NavigationAnchor $model): self {
        return new self(
            id: $model->id,
            photosphere_id: $model->photosphere_id,
            target_photosphere_id: $model->target_photosphere_id,
            name: $model->name,
            longitude: $model->longitude,
            latitude: $model->latitude,
            photosphere: Lazy::whenLoaded('photosphere', $model,
                fn () => PhotosphereData::from($model->photosphere),
            ),
            target: Lazy::whenLoaded('target', $model,
                fn () => PhotosphereData::from($model->target),
            ),
        );
    }
}
