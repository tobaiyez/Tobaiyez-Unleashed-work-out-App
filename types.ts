export enum View {
  DASHBOARD = 'DASHBOARD',
  WORKOUT = 'WORKOUT',
  NUTRITION = 'NUTRITION',
  ADVISOR = 'ADVISOR',
  RECOVERY = 'RECOVERY'
}

export interface ExerciseSet {
  targetReps: number;
  actualReps?: number;
  weight?: number;
  completed: boolean;
}

export interface Exercise {
  id: string;
  name: string;
  sets: ExerciseSet[];
  notes?: string;
  restSeconds?: number;
  videoUrl?: string;
}

export interface WorkoutPlan {
  id: string;
  title: string;
  focus: string;
  exercises: Exercise[];
  durationStr: string;
}

export interface MealItem {
  name: string;
  ingredients: string[];
}

export interface DailyMealPlan {
  day: number;
  meals: {
    breakfast: MealItem;
    meal2: MealItem;
    meal3: MealItem;
    meal4?: MealItem; // Not all days have 4 meals
    snacks: MealItem;
  };
}

export interface RecoveryExercise {
  name: string;
  duration: string;
}

export interface RecoveryRoutine {
  stretching: RecoveryExercise[];
  foamRolling: RecoveryExercise[];
}

export interface DailyLog {
  date: string;
  completedExercises: Record<string, boolean>; // exerciseId -> boolean
  exerciseStats: Record<string, { setIndex: number, weight: number, reps: number }[]>;
  mealsConsumed: Record<string, boolean>; // mealKey -> boolean
  waterIntake: number; // Liters
  notes: string;
}