import { Injectable, signal, computed } from '@angular/core';
import { Goal } from '../models/goal.model';

@Injectable({
  providedIn: 'root',
})
export class GoalService {
  // The Private State (The "Source of Truth")
  private goalsSignal = signal<Goal[]>([]);

  // Public Read-Only Signal (Components can listen, but not change directly)
  readonly goals = this.goalsSignal.asReadonly();

  // Computed Signals (Logic based on the state)
  readonly goalCount = computed(() => this.goals().length);
  readonly isFull = computed(() => this.goalCount() >= 6);

  addGoal(newGoal: Omit<Goal, 'id' | 'createdAt' | 'horizon'>) {
    if (this.isFull()) {
      console.error('Limit reached! Strategic focus requires only 6 priorities.');
      return;
    }

    const goal: Goal = {
      ...newGoal,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      horizon: 'H1', // Defaulting to Horizon 1 (Short-term/Survival)
    };

    // Updating the signal state immutably
    this.goalsSignal.update((goals) => [...goals, goal]);
  }

  removeGoal(id: string) {
    this.goalsSignal.update((goals) => goals.filter((g) => g.id !== id));
  }
}
