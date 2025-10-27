<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Task;
use Illuminate\Support\Str;

class TaskSeeder extends Seeder
{
    public function run(): void
    {
        $tasks = [
            ['Finish Laravel project', 'Complete the Task 2 model and migration setup'],
            ['Write documentation', 'Add comments and readme file'],
            ['Code review meeting', 'Discuss with team about improvements'],
            ['Setup testing environment', 'Install PHPUnit and setup tests'],
            ['Design database schema', 'Plan tables and relationships'],
            ['Implement authentication', 'Add login and registration'],
            ['Fix bug #23', 'Resolve issue with user profile'],
            ['Deploy to staging', 'Push latest changes to staging server'],
            ['Update dependencies', 'Run composer update and check versions'],
            ['Frontend styling', 'Improve UI with Tailwind CSS'],
            ['Setup CI/CD', 'Integrate GitHub Actions for automatic deployment'],
            ['Optimize queries', 'Improve performance of database queries'],
            ['Prepare presentation', 'Summarize progress for the team'],
            ['User feedback analysis', 'Collect and review user feedback'],
            ['Write unit tests', 'Cover main functionalities with tests'],
            ['Fix layout issues', 'Resolve responsive design bugs'],
            ['Update README', 'Add latest setup instructions'],
            ['Database backup', 'Ensure all data is backed up'],
            ['Code refactoring', 'Clean up legacy code'],
            ['Team meeting', 'Weekly sync with all developers'],
        ];

        $statuses = ['pending', 'in_progress', 'completed'];

        foreach ($tasks as [$title, $description]) {
            Task::create([
                'title' => $title,
                'description' => $description,
                // Randomly assign status
                'status' => $statuses[array_rand($statuses)],
                // Randomly assign due date: between 5 days ago and 10 days in the future
                'due_date' => now()->addDays(rand(-5, 10)),
            ]);
        }
    }
}
