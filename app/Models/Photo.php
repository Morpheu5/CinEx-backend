<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Photo extends Model {
    protected $fillable = ['path', 'user_id', 'gallery_id', 'description' ];

    public function gallery(): BelongsTo {
        return $this->belongsTo(Gallery::class);
    }

    public function user(): BelongsTo {
        return $this->belongsTo(User::class);
    }
}
