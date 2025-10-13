<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\Storage;

class Photosphere extends Model {

    protected static function booted() {
        static::deleting(function (Photosphere $p) {
            $p->galleries()->delete();
            if ($p->path) {
                Storage::disk('local')->delete($p->path);
            }
            $p->navigationAnchors()->delete();
        });
    }

    protected $fillable = ['name', 'path', 'theatre_id', 'user_id'];

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function theatre(): BelongsTo {
        return $this->belongsTo(Theatre::class);
    }

    public function galleries(): HasMany {
        return $this->hasMany(Gallery::class);
    }

    public function navigationAnchors(): HasMany {
        return $this->hasMany(NavigationAnchor::class);
    }
}
