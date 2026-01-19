import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalInput } from './goal-input';

describe('GoalInput', () => {
  let component: GoalInput;
  let fixture: ComponentFixture<GoalInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoalInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
