<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id(); // This is the 'id' field
            $table->string('title'); // This is the 'title' field
            $table->text('description')->nullable(); // 'description' field, can be empty
            $table->string('status')->default('pending'); // 'status' field with a default value of 'pending'
            $table->date('due_date')->nullable(); // 'due_date' field, can be empty
            $table->timestamps(); // Adds 'created_at' and 'updated_at'
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};