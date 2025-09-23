<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Photosphere extends Model {
    protected $fillable = ['name', 'path', 'theatre_id'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function theatre() {
        return $this->belongsTo(Theatre::class);
    }
}
