<?php

use App\Models\Gallery;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        // Detect whether the FK constraint exists (column may exist without FK)
        $fkExists = DB::table('information_schema.TABLE_CONSTRAINTS')
            ->where('CONSTRAINT_SCHEMA', DB::raw('database()'))
            ->where('TABLE_NAME', 'photos')
            ->where('CONSTRAINT_NAME', 'photos_gallery_id_foreign')
            ->where('CONSTRAINT_TYPE', 'FOREIGN KEY')
            ->exists();

        Schema::table('photos', function (Blueprint $table) use ($fkExists) {
            if ($fkExists) {
                $table->dropForeign('photos_gallery_id_foreign');
            }

            // If you intend to recreate gallery_id with proper FK, drop the column if present
            if (Schema::hasColumn('photos', 'gallery_id')) {
                $table->dropColumn('gallery_id');
            }

            // Re-add gallery_id + FK only if missing
            if (!Schema::hasColumn('photos', 'gallery_id')) {
                $table->foreignIdFor(Gallery::class)->constrained()->cascadeOnDelete();
            }

            if (!Schema::hasColumn('photos', 'description')) {
                $table->string('description', 1024)->nullable();
            }
        });
    }

    public function down(): void {
        $fkExists = DB::table('information_schema.TABLE_CONSTRAINTS')
            ->where('CONSTRAINT_SCHEMA', DB::raw('database()'))
            ->where('TABLE_NAME', 'photos')
            ->where('CONSTRAINT_NAME', 'photos_gallery_id_foreign')
            ->where('CONSTRAINT_TYPE', 'FOREIGN KEY')
            ->exists();

        Schema::table('photos', function (Blueprint $table) use ($fkExists) {
            if ($fkExists) {
                $table->dropForeign('photos_gallery_id_foreign');
            }

            if (Schema::hasColumn('photos', 'gallery_id')) {
                $table->dropColumn('gallery_id');
            }

            if (Schema::hasColumn('photos', 'description')) {
                $table->dropColumn('description');
            }
        });
    }
};
