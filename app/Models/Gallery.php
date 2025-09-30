<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Gallery extends Model {
    protected $fillable = ['photosphere_id', 'user_id', 'name', 'latitude', 'longitude'];

    public function photosphere(): BelongsTo {
        return $this->belongsTo(\App\Models\Photosphere::class);
    }

    public function photos(): HasMany {
        return $this->hasMany(\App\Models\Photo::class);
    }
}
