<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Theatre extends Model {
    protected $fillable = ['name', 'latitude', 'longitude', 'city', 'country'];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
