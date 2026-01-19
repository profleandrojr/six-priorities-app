export interface Goal {
  id: string;
  title: string;
  smartDescription: string;
  currentValue: number;
  targetValue: number;
  horizon: 'H1' | 'H2' | 'H3'; // McKinsey's 3 Horizons
  createdAt: Date;
}
