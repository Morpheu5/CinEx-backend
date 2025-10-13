<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('navigation_anchors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('photosphere_id')
                  ->constrained('photospheres')      // source
                  ->cascadeOnDelete();               // delete anchors with source photosphere
            $table->foreignId('target_photosphere_id')
                  ->constrained('photospheres')      // target
                  ->restrictOnDelete();              // prevent deleting a target that’s referenced
            $table->string('name', 191);
            $table->decimal('longitude', 10, 3);
            $table->decimal('latitude', 10, 3);
            $table->timestamps();
            $table->unique(['photosphere_id', 'name']); // optional: names unique within a source
            $table->index(['photosphere_id']);
            $table->index(['target_photosphere_id']);
        });
    }

    public function down(): void {
        Schema::dropIfExists('navigation_anchors');
    }
};
