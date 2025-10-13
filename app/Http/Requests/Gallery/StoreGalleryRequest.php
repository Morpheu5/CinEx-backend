<?php

namespace App\Http\Requests\Gallery;

use Illuminate\Foundation\Http\FormRequest;

class StoreGalleryRequest extends FormRequest {
    public function authorize(): bool {
        return true; // FIXME do the proper checking
    }

    public function rules(): array {
        return [
            'photosphere_id' => ['required', 'integer', 'exists:photospheres,id'],
            'name' => ['required', 'string', 'max:255'],
            'latitude' => ['required', 'numeric', 'between:-90,90'],
            'longitude' => ['required', 'numeric', 'between:-180,180'],
            'photos' => ['nullable', 'array'],
            'photos.*' => ['file', 'image', 'mimes:jpeg,png,jpg', 'max:20480'],
        ];
    }
}
