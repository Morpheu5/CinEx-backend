<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Gallery;

return new class extends Migration {
    public function up(): void {
        Schema::table('photos', function (Blueprint $table) {
            if (Schema::hasColumn('photos', 'gallery_id')) {
                $table->dropConstrainedForeignId('gallery_id');
            }

            $table->foreignIdFor(Gallery::class)->constrained()->cascadeOnDelete();

            if (!Schema::hasColumn('photos', 'description')) {
                $table->string('description', 1024)->nullable();
            }
        });
    }

    public function down(): void {
        Schema::table('photos', function (Blueprint $table) {
            if (Schema::hasColumn('photos', 'gallery_id')) {
                $table->dropConstrainedForeignId('gallery_id');
            }
            if (Schema::hasColumn('photos', 'description')) {
                $table->dropColumn('description');
            }
        });
    }
};
