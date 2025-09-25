<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model {
    protected $fillable = ['photosphere_id', 'user_id', 'name', 'latitude', 'longitude'];
    
    public function photosphere() {
        return $this->belongsTo(\App\Models\Photosphere::class);
    }
}
