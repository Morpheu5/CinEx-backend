<?php
namespace App\Http\Controllers;

use App\Data\NavigationAnchorData;
use App\Data\PhotosphereData;
use App\Http\Requests\NavigationAnchor\StoreNavigationAnchorRequest;
use App\Http\Requests\NavigationAnchor\UpdateNavigationAnchorRequest;
use App\Models\NavigationAnchor;
use App\Models\Photosphere;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NavigationAnchorController extends Controller
{
    public function index(Request $request)
    {
        $anchors = NavigationAnchor::query()
            ->with(['photosphere', 'target'])
            ->latest('id')
            ->get();

        $photospheres = Photosphere::orderBy('name')->get();

        return Inertia::render('dashboard/navigation-anchor/index', [
            'anchors' => NavigationAnchorData::collect($anchors),
            'photospheres' => PhotosphereData::collect($photospheres),
        ]);
    }

    public function create()
    {
        $photospheres = Photosphere::query()->select('id','name')->orderBy('name')->get();
        return Inertia::render('dashboard/navigation-anchor/create', [
            'photospheres' => $photospheres,
        ]);
    }

    public function store(StoreNavigationAnchorRequest $request)
    {
        $a = $request->user()->navigationAnchors()->create($request->validated());
        return to_route('dashboard.navigation-anchor.edit', $a)
            ->with('success', 'Navigation anchor created.');
    }

    public function show(NavigationAnchor $navigationAnchor)
    {
        $navigationAnchor->with(['photosphere','target'])->get();
        return Inertia::render('dashboard/navigation-anchor/show', [
            'anchor' => NavigationAnchorData::from($navigationAnchor),
        ]);
    }

    public function edit(NavigationAnchor $navigationAnchor)
    {
        $navigationAnchor->with(['photosphere','target'])->get();
        $photospheres = Photosphere::orderBy('name')->get();
        return Inertia::render('dashboard/navigation-anchor/edit', [
            'anchor' => NavigationAnchorData::from($navigationAnchor),
            'photospheres' => PhotosphereData::collect($photospheres),
        ]);
    }

    public function update(UpdateNavigationAnchorRequest $request, NavigationAnchor $navigationAnchor)
    {
        $navigationAnchor->update($request->validated());
        return back()->with('success', 'Navigation anchor updated.');
    }

    public function destroy(NavigationAnchor $navigationAnchor)
    {
        $navigationAnchor->delete();
        return to_route('dashboard.navigation-anchor.index')
            ->with('success', 'Navigation anchor deleted.');
    }
}
