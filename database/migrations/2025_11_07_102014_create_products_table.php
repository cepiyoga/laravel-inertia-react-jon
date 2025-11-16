<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('prod_name');
            $table->string('prod_description');
            $table->integer('prod_price');
            $table->timestamps();
        });

        for ($i = 0; $i < 10; $i++) {
            DB::table('products')->insert([
                'prod_name' => fake()->text(10),
                'prod_description' => fake()->text(100),
                'prod_price' => rand(10, 100),
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
