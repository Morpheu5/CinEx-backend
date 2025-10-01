<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Storage;

class Gallery extends Model {
    protected $fillable = ['photosphere_id', 'user_id', 'name', 'latitude', 'longitude'];

    public function photosphere(): BelongsTo {
        return $this->belongsTo(Photosphere::class);
    }

    public function photos(): HasMany {
        return $this->hasMany(Photo::class);
    }

    protected static function booted() {
        static::deleting(function(Gallery $gallery) {
            foreach ($gallery->photos as $photo) {
                if ($photo->path) {
                    Storage::disk('public')->delete($photo->path);
                }
                $photo->delete();
            }
        });
    }
}
