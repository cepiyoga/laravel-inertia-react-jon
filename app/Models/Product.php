<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'prod_name', 'prod_description', 'prod_price'
    ];
}
