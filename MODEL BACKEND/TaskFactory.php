<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            // We'll use the 'faker' library to generate sample data
            'title' => fake()->sentence(4), // Generates a short sentence
            'description' => fake()->paragraph(2), // Generates a short paragraph
            'status' => fake()->randomElement(['pending', 'in_progress', 'completed']),
            'due_date' => fake()->optional()->date(), // Generates a date or null
        ];
    }
}