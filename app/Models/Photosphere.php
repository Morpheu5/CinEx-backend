<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Photosphere extends Model {

    protected static function booted() {
        static::deleting(function ($p) {
            $p->galleries()->delete();
            if ($p->path) {
                Storage::disk('public')->delete($p->path);
            }
        });
    }
    
    protected $fillable = ['name', 'path', 'theatre_id'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function theatre() {
        return $this->belongsTo(Theatre::class);
    }

    public function galleries() {
        return $this->hasMany(Gallery::class);
    }
}
