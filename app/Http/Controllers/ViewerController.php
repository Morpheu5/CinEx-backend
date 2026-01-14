<?php

namespace App\Http\Controllers;

use App\Data\PhotosphereData;
use App\Models\Photosphere;
use Inertia\Inertia;

class ViewerController extends Controller
{
    public function show(Photosphere $photosphere)
    {
        // Important: PhotosphereData uses whenLoaded('navigationAnchors'), so we must load that exact relation name.
        $photosphere->load([
            'theatre',
            'galleries.photos',
            'navigationAnchors.target',
        ]);

        return Inertia::render('viewer/show', [
            'photosphere' => PhotosphereData::from($photosphere),
        ]);
    }
}
