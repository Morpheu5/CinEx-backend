<?php

// @formatter:off
// phpcs:ignoreFile
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace App\Models{
/**
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property float $latitude
 * @property float $longitude
 * @property int $user_id
 * @property int $photosphere_id
 * @property string $name
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Photo> $photos
 * @property-read int|null $photos_count
 * @property-read \App\Models\Photosphere $photosphere
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Gallery newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Gallery newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Gallery query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Gallery whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Gallery whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Gallery whereLatitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Gallery whereLongitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Gallery whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Gallery wherePhotosphereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Gallery whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Gallery whereUserId($value)
 */
	class Gallery extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property int $photosphere_id
 * @property int $target_photosphere_id
 * @property string $name
 * @property string $longitude
 * @property string $latitude
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property int $user_id
 * @property-read \App\Models\Photosphere $photosphere
 * @property-read \App\Models\Photosphere $target
 * @method static \Illuminate\Database\Eloquent\Builder<static>|NavigationAnchor newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|NavigationAnchor newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|NavigationAnchor query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|NavigationAnchor whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|NavigationAnchor whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|NavigationAnchor whereLatitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|NavigationAnchor whereLongitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|NavigationAnchor whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|NavigationAnchor wherePhotosphereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|NavigationAnchor whereTargetPhotosphereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|NavigationAnchor whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|NavigationAnchor whereUserId($value)
 */
	class NavigationAnchor extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $path
 * @property string $description
 * @property int $user_id
 * @property int $gallery_id
 * @property-read \App\Models\Gallery $gallery
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photo newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photo newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photo query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photo whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photo whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photo whereGalleryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photo whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photo wherePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photo whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photo whereUserId($value)
 */
	class Photo extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property string $path
 * @property int $user_id
 * @property int $theatre_id
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Gallery> $galleries
 * @property-read int|null $galleries_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\NavigationAnchor> $navigationAnchors
 * @property-read int|null $navigation_anchors_count
 * @property-read \App\Models\Theatre|null $theatre
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photosphere newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photosphere newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photosphere query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photosphere whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photosphere whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photosphere whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photosphere wherePath($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photosphere whereTheatreId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photosphere whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Photosphere whereUserId($value)
 */
	class Photosphere extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string $name
 * @property float $longitude
 * @property float $latitude
 * @property string $city
 * @property string $country
 * @property int $user_id
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Photosphere> $photospheres
 * @property-read int|null $photospheres_count
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Theatre newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Theatre newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Theatre query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Theatre whereCity($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Theatre whereCountry($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Theatre whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Theatre whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Theatre whereLatitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Theatre whereLongitude($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Theatre whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Theatre whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Theatre whereUserId($value)
 */
	class Theatre extends \Eloquent {}
}

namespace App\Models{
/**
 * @property int $id
 * @property string $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Gallery> $galleries
 * @property-read int|null $galleries_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\NavigationAnchor> $navigationAnchors
 * @property-read int|null $navigation_anchors_count
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Photo> $photos
 * @property-read int|null $photos_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Photosphere> $photospheres
 * @property-read int|null $photospheres_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Theatre> $theatres
 * @property-read int|null $theatres_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

