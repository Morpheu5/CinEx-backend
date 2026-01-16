<?php

namespace App\Http\Controllers;

use App\Data\PhotosphereData;
use App\Models\Photosphere;
use App\Models\Theatre;
use Inertia\Inertia;

class ViewerController extends Controller
{
    public function index() {
        $theatres = Theatre::query()
            ->select(['id', 'name'])
            ->orderBy('name')
            ->get()
            ->map(fn (Theatre $t) => [
                'id' => $t->id,
                'name' => $t->name,
            ]);

        return Inertia::render('viewer/index', [
            'theatres' => $theatres,
        ]);
    }

    public function theatre(Theatre $theatre) {
        // Keep the payload intentionally small for now
        $photospheres = $theatre->photospheres()
            ->select(['id', 'name'])
            ->orderBy('name')
            ->get()
            ->map(fn (PHotosphere $p) => [
                'id' => $p->id,
                'name' => $p->name,
            ]);

        return Inertia::render('viewer/theatre', [
            'theatre' => [
                'id' => $theatre->id,
                'name' => $theatre->name,
            ],
            'photospheres' => $photospheres,
        ]);
    }

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
