import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { title } from 'process';

@Component({
  selector: 'sp-goal-input',
  imports: [ReactiveFormsModule],
  templateUrl: './goal-input.html',
  styleUrl: './goal-input.scss',
  standalone: true,
})
export class GoalInput {
  private fb = inject(FormBuilder);

  // Signal to control the "Help" panel visibility
  showExamples = signal(false);

  goalForm = this.fb.group({
    title: ['', Validators.required],
    // The "Template" part: guiding the description
    smartDescription: ['', [Validators.required, Validators.minLength(10)]],
  });

  // Framework Specific Examples
  examples = [
    { title: 'English Fluency', desc: 'Achieve level 130 (current 100) on Duolingo in one year.' },
    { title: 'Master Angular', desc: 'Build 2 high-complexity, 4 medium, and 2 easy projects.' },
  ];

  toggleHelp() {
    this.showExamples.update((v) => !v);
  }

  addGoal() {
    if (this.goalForm.valid) {
      console.log('New Goal Submitted:', this.goalForm.value);
      // TODO: Connect this to GoalService

      // Reset form but keep the "Add" state ready
      this.goalForm.reset();
    }
  }
}
