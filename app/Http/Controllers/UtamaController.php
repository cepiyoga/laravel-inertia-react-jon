<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Product;

class UtamaController extends Controller
{
    public function index()
    {
        $data = Post::latest()->paginate(10);
        return inertia('Home', [
            'name' => 'Cepi Yoga',
            'posts' => $data
        ]);
    }

    public function coba()
    {
        return inertia('Utama/Coba', [
            'name' => 'Cepi Yoga',
            'data' => Product::all()
        ]);
    }


}

