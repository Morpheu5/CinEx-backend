<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePhotoRequest extends FormRequest {
    public function authorize(): bool {
        return true; // FIXME do the proper checking
    }

    public function rules(): array {
        return [
            'description' => ['nullable', 'string'],
        ];
    }
}
