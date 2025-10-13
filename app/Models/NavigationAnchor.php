<?php

namespace App\Models;

//use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class NavigationAnchor extends Model {
    protected $fillable = [
        'photosphere_id',
        'target_photosphere_id',
        'name',
        'longitude',
        'latitude',
    ];

    public function photosphere() : BelongsTo {
        return $this->belongsTo(Photosphere::class);
    }

    public function target() : BelongsTo {
        return $this->belongsTo(Photosphere::class, 'target_photosphere_id');
    }
}
