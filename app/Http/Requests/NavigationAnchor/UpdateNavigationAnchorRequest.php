<?php
namespace App\Http\Requests\NavigationAnchor;

use Illuminate\Foundation\Http\FormRequest;

class UpdateNavigationAnchorRequest extends FormRequest
{
    public function authorize(): bool { return true; }
    public function rules(): array {
        return [
            'photosphere_id'        => ['required','integer','exists:photospheres,id'],
            'target_photosphere_id' => ['required','integer','different:photosphere_id','exists:photospheres,id'],
            'name'                  => ['required','string','max:191'],
            'longitude'             => ['required','numeric','between:-180,180'],
            'latitude'              => ['required','numeric','between:-90,90'],
        ];
    }
}
