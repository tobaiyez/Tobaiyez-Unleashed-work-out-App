import { WorkoutPlan, DailyMealPlan, Exercise, RecoveryRoutine } from './types';

// Helper to create consistent exercise structures
const createSets = (repsArray: number[]): any[] => {
  return repsArray.map(r => ({ targetReps: r, completed: false }));
};

export const WORKOUTS: WorkoutPlan[] = [
  // --- ORIGINAL MUSCULAR MASS ---
  {
    id: 'w1',
    title: 'Workout 1',
    focus: 'Shoulders',
    durationStr: '60-90 min',
    exercises: [
      { id: 'w1-e1', name: 'Stationary Bike', sets: [{ targetReps: 0, completed: false }], notes: '3 mins warm up' },
      { id: 'w1-e2', name: 'Arm Swings', sets: [{ targetReps: 20, completed: false }], videoUrl: 'https://www.youtube.com/watch?v=dqGhldSMYP8' },
      { id: 'w1-e3', name: 'Seated Dumbbell Shoulder Press', sets: createSets([20, 15, 12, 10, 10, 10]) },
      { id: 'w1-e4', name: 'Standing Dumbbell Lat Raises', sets: createSets([12, 12, 12, 12, 12, 12]) },
      { id: 'w1-e5', name: 'Standing Barbell Shoulder Press', sets: createSets([20, 15, 12, 10, 10, 10]) },
      { id: 'w1-e6', name: 'Dumbbell Front Raise', sets: createSets([20, 20, 20, 20, 20, 20]) },
      { id: 'w1-e7', name: 'Barbell Shrugs', sets: createSets([15, 12, 8, 6, 6, 6]) },
      { id: 'w1-new1', name: 'Plate-Loaded Shoulder Press (Machine)', sets: createSets([12, 12, 10, 10]), notes: 'Focus on slow negative.' },
      { id: 'w1-e8', name: 'Stationary Bike', sets: [{ targetReps: 0, completed: false }], notes: '3 mins cool down' },
    ]
  },
  {
    id: 'w2',
    title: 'Workout 2',
    focus: 'Legs',
    durationStr: '60-90 min',
    exercises: [
      { id: 'w2-e1', name: 'Stationary Bike', sets: [{ targetReps: 0, completed: false }], notes: '3 mins warm up' },
      { id: 'w2-e2', name: 'Arm Swings', sets: [{ targetReps: 20, completed: false }], videoUrl: 'https://www.youtube.com/watch?v=dqGhldSMYP8' },
      { id: 'w2-e3', name: 'Leg Swings', sets: [{ targetReps: 20, completed: false }] },
      { id: 'w2-e4', name: 'Barbell Squat', sets: createSets([20, 15, 12, 10, 10, 10]) },
      { id: 'w2-e5', name: 'Double Leg Press', sets: createSets([20, 15, 12, 10, 10, 10]) },
      { id: 'w2-e6', name: 'Lying Hamstring Curls', sets: createSets([20, 15, 12, 10, 10, 10]) },
      { id: 'w2-e7', name: 'Leg Extensions', sets: createSets([20, 15, 12, 10, 10, 10]) },
      { id: 'w2-e8', name: 'Walking Dumbbell Lunges', sets: createSets([20, 20, 20, 20, 20, 20]) },
      { id: 'w2-e9', name: 'Calf Raises (Leg Press)', sets: createSets([20, 20, 15, 12, 12, 12, 8, 8]) },
      { id: 'w2-e10', name: 'Stationary Bike', sets: [{ targetReps: 0, completed: false }], notes: '3 mins cool down' },
    ]
  },
  {
    id: 'w3',
    title: 'Workout 3',
    focus: 'Chest',
    durationStr: '60-90 min',
    exercises: [
      { id: 'w3-e1', name: 'Cross Trainer', sets: [{ targetReps: 0, completed: false }], notes: '3 mins warm up' },
      { id: 'w3-e2', name: 'Arm Swings', sets: [{ targetReps: 20, completed: false }], videoUrl: 'https://www.youtube.com/watch?v=dqGhldSMYP8' },
      { id: 'w3-e3', name: 'Flat Barbell Chest Press', sets: createSets([20, 15, 12, 10, 10, 10]) },
      { id: 'w3-e4', name: 'Mid Cable Flyes', sets: createSets([12, 12, 12, 12, 12, 12]) },
      { id: 'w3-e5', name: 'Incline Barbell Chest Press', sets: createSets([20, 15, 12, 10, 10, 10]) },
      { id: 'w3-e6', name: 'Incline Dumbbell Flyes', sets: createSets([12, 12, 12, 12, 12, 12]) },
      // Additions
      { id: 'w3-new1', name: 'Smith Machine Incline Press', sets: createSets([12, 10, 10]), notes: 'Controlled movement.' },
      { id: 'w3-new2', name: 'Flat Dumbbell Press', sets: createSets([12, 10, 10]), notes: 'Deep stretch at bottom.' },
      { id: 'w3-new3', name: 'Cable Lateral Raises', sets: createSets([15, 15, 15]), notes: 'Focus on side delts.' },
      { id: 'w3-new4', name: 'Machine Chest Fly', sets: createSets([15, 12, 12]), notes: 'Squeeze at center.' },
      { id: 'w3-new5', name: 'Close-Grip Bench Press', sets: createSets([12, 10, 10]), notes: 'Tricep focus.' },
      { id: 'w3-new6', name: 'Overhead Cable Tricep Extension', sets: createSets([15, 12, 12]), notes: 'Full extension.' },
      { id: 'w3-e7', name: 'Cross Trainer', sets: [{ targetReps: 0, completed: false }], notes: '3 mins cool down' },
    ]
  },
  {
    id: 'w4',
    title: 'Workout 4',
    focus: 'Arms',
    durationStr: '60-90 min',
    exercises: [
      { id: 'w4-e1', name: 'Cross Trainer', sets: [{ targetReps: 0, completed: false }], notes: '3 mins warm up' },
      { id: 'w4-e2', name: 'Arm Swings', sets: [{ targetReps: 20, completed: false }], videoUrl: 'https://www.youtube.com/watch?v=dqGhldSMYP8' },
      { id: 'w4-e3', name: 'Close Grip Barbell Bench Press', sets: createSets([20, 15, 12, 10, 10, 10]) },
      { id: 'w4-e4', name: 'Standing Hammer Curls', sets: createSets([20, 20, 20, 20, 20, 20]) },
      { id: 'w4-e5', name: 'Rope Tricep Extensions', sets: createSets([12, 12, 12, 10, 10, 10]) },
      { id: 'w4-e6', name: 'Ez Bar Bicep Curls', sets: createSets([20, 15, 12, 10, 10, 10]) },
      // Additions
      { id: 'w4-new1', name: 'Overhead Cable Tricep Extension', sets: createSets([15, 12, 12]), notes: 'Stretch triceps fully.' },
      { id: 'w4-new2', name: 'Inclined Dumbbell Curls', sets: createSets([12, 12, 12]), notes: 'Seated incline bench.' },
      { id: 'w4-e7', name: 'Cross Trainer', sets: [{ targetReps: 0, completed: false }], notes: '3 mins cool down' },
    ]
  },
  {
    id: 'w5',
    title: 'Workout 5',
    focus: 'Back',
    durationStr: '60-90 min',
    exercises: [
      { id: 'w5-e1', name: 'Cross Trainer', sets: [{ targetReps: 0, completed: false }], notes: '3 mins warm up' },
      { id: 'w5-e2', name: 'Arm Swings', sets: [{ targetReps: 20, completed: false }], videoUrl: 'https://www.youtube.com/watch?v=dqGhldSMYP8' },
      { id: 'w5-e3', name: 'Barbell Deadlift', sets: createSets([20, 15, 12, 10, 10, 10]) },
      { id: 'w5-e4', name: 'Barbell Bent Over Row', sets: createSets([20, 15, 12, 10, 10, 10]) },
      { id: 'w5-e5', name: 'Wide Grip Lat Pulldown', sets: createSets([12, 12, 12, 10, 10, 10]) },
      { id: 'w5-e6', name: 'Seated Cable Row (Wide)', sets: createSets([12, 12, 12, 10, 10, 10]) },
      // Additions
      { id: 'w5-new1', name: 'Barbell Back Squat', sets: createSets([10, 10, 10]), notes: 'Core/Back stability focus.' },
      { id: 'w5-new2', name: 'Pull-Ups (Weighted)', sets: createSets([8, 8, 8]), notes: 'Add weight if possible.' },
      { 
        id: 'w5-new3', 
        name: 'Supinated Lat Pulldown', 
        sets: createSets([12, 10, 10]), 
        notes: 'Underhand grip.',
        videoUrl: 'https://youtube.com/shorts/_-sKtF3OTdM?si=L3Rx-8RM_AP-cGko'
      },
      { 
        id: 'w5-new4', 
        name: 'Cable Lat Pullover', 
        sets: createSets([15, 12, 12]), 
        notes: 'Straight arm.',
        videoUrl: 'https://youtube.com/shorts/v8wK0v32dAg?si=UzoOkekfldBUTThX'
      },
      { 
        id: 'w5-new5', 
        name: 'T-Bar Row', 
        sets: createSets([12, 10, 10]), 
        notes: 'Squeeze back.',
        videoUrl: 'https://www.youtube.com/watch?v=j3Igk5nyZE4'
      },
      { id: 'w5-new6', name: 'Seated Cable Row', sets: createSets([12, 10, 10]), notes: 'Neutral/Close grip.' },
      { id: 'w5-e7', name: 'Cross Trainer', sets: [{ targetReps: 0, completed: false }], notes: '3 mins cool down' },
    ]
  },
  {
    id: 'w6',
    title: 'Workout 6',
    focus: 'Legs (Vol 2)',
    durationStr: '90+ min',
    exercises: [
      { id: 'w6-e1', name: 'Cross Trainer', sets: [{ targetReps: 0, completed: false }], notes: '6 mins warm up' },
      { id: 'w6-e3', name: 'Leg Swings', sets: [{ targetReps: 20, completed: false }] },
      { id: 'w6-e4', name: 'Single Leg Press', sets: createSets([12, 12, 12, 12]), notes: 'Superset with Narrow Stance' },
      { id: 'w6-e5', name: 'Narrow Stance Leg Press', sets: createSets([12, 12, 12, 12]), notes: 'Superset' },
      { id: 'w6-e6', name: 'Lying Hamstring Curls', sets: createSets([12, 12, 12, 12]) },
      { id: 'w6-e7', name: 'Romanian Dumbbell Deadlifts', sets: createSets([12, 12, 12, 12]) },
      { id: 'w6-e8', name: 'Machine Calf Raises', sets: createSets([20, 12, 12, 12]) },
      
      // Additions
      { id: 'w6-new1', name: 'Barbell Romanian Deadlift', sets: createSets([12, 10, 10]), notes: 'Focus on hamstrings.' },
      { id: 'w6-new2', name: 'Walking Dumbbell Lunges', sets: createSets([20, 20, 20]), notes: 'Steps per leg.' },
      { id: 'w6-new3', name: 'Leg Press', sets: createSets([15, 12, 10]), notes: 'Standard stance heavy.' },
      { id: 'w6-new4', name: 'Hip Thrust Machine', sets: createSets([15, 12, 12]), notes: 'Squeeze glutes.' },
      { id: 'w6-new5', name: 'Hip Abductor Machine', sets: createSets([15, 15, 15]), notes: 'Controlled.' },
      { id: 'w6-new6', name: 'Smith Machine Squat', sets: createSets([12, 10, 10]), notes: 'Safety focus.' },
      { id: 'w6-new7', name: 'Leg Extensions', sets: createSets([15, 12, 12]), notes: 'Squeeze quads.' },
      { 
        id: 'w6-new8', 
        name: 'Back Extensions', 
        sets: createSets([15, 15, 15]), 
        notes: 'Lower back focus.',
        videoUrl: 'https://www.youtube.com/watch?v=ph3pddpKzzw'
      },
      { 
        id: 'w6-new9', 
        name: 'Bulgarian Split Squats', 
        sets: createSets([12, 12, 12]), 
        notes: 'Per leg.',
        videoUrl: 'https://www.youtube.com/watch?v=2C-uNgKwPLE'
      },

      // Wall Sits with Video (Updated from w6-e9)
      { 
        id: 'w6-e9-video', 
        name: 'Wall Sits', 
        sets: [{targetReps: 0, completed: false}, {targetReps: 0, completed: false}, {targetReps: 0, completed: false}], 
        notes: '1 min each. Watch video for form.',
        videoUrl: 'https://www.youtube.com/watch?v=y-wV4Venusw'
      },
      
      { id: 'w6-e10', name: 'Cross Trainer', sets: [{ targetReps: 0, completed: false }], notes: '3 mins cool down' },
    ]
  },
  
  // --- CALISTHENICS ---
  {
    id: 'cal-mon',
    title: 'Calisthenics: Monday',
    focus: 'Push & Core',
    durationStr: '30-40 min',
    exercises: [
      { id: 'cal-mon-e1', name: 'Dips', sets: createSets([20, 20, 20]), notes: 'Focus on depth.' },
      { id: 'cal-mon-e2', name: 'Push Ups', sets: createSets([20, 20, 20]), notes: 'Keep core tight.' },
      { id: 'cal-mon-e3', name: 'Planks', sets: [{targetReps: 0, completed: false}, {targetReps: 0, completed: false}, {targetReps: 0, completed: false}], notes: '1 Minute hold per set.' },
    ]
  },
  {
    id: 'cal-tue',
    title: 'Calisthenics: Tuesday',
    focus: 'Pull & Core',
    durationStr: '30-40 min',
    exercises: [
      { id: 'cal-tue-e1', name: 'Pull Ups', sets: createSets([15, 15, 15]), notes: 'Range: 8-15 reps. Full extension.' },
      { id: 'cal-tue-e2', name: 'Inverted Rows', sets: createSets([10, 10, 10]), notes: 'Range: 8-10 reps.' },
      { id: 'cal-tue-e3', name: 'Hollow Body Holds', sets: [{targetReps: 0, completed: false}, {targetReps: 0, completed: false}, {targetReps: 0, completed: false}], notes: '30-60 Seconds hold per set.' },
    ]
  },
  {
    id: 'cal-wed',
    title: 'Calisthenics: Wednesday',
    focus: 'Legs',
    durationStr: '30-45 min',
    exercises: [
      { id: 'cal-wed-e1', name: 'Bodyweight Squats', sets: createSets([30, 30, 30]), notes: 'Explosive movement up.' },
      { id: 'cal-wed-e2', name: 'One Leg RDL', sets: createSets([15, 15, 15]), notes: '15 reps per leg. Focus on balance.' },
      { id: 'cal-wed-e3', name: 'Calf Raises', sets: createSets([50, 50, 50]), notes: 'High volume.' },
    ]
  },
  {
    id: 'cal-thu',
    title: 'Calisthenics: Thursday',
    focus: 'Active Recovery',
    durationStr: '20-30 min',
    exercises: [
       { id: 'cal-thu-e1', name: 'Jogging', sets: [{targetReps: 0, completed: false}], notes: 'Light jog, keep steady pace.' },
    ]
  },
  {
    id: 'cal-fri',
    title: 'Calisthenics: Friday',
    focus: 'Skill 1: Handstand',
    durationStr: '30-45 min',
    exercises: [
       { id: 'cal-fri-e1', name: 'Handstand Practice', sets: [{targetReps: 0, completed: false}], notes: 'Practice wall holds, kick-ups, or freestanding.' },
       { id: 'cal-fri-e2', name: 'Wrist Prep', sets: [{targetReps: 0, completed: false}], notes: 'Important warm up for wrists.' },
    ]
  },
  {
    id: 'cal-sat',
    title: 'Calisthenics: Saturday',
    focus: 'Skill 2: Muscle Up',
    durationStr: '30-45 min',
    exercises: [
       { id: 'cal-sat-e1', name: 'Muscle Up Practice', sets: [{targetReps: 0, completed: false}], notes: 'Work on explosive pull-ups or band-assisted muscle ups.' },
    ]
  },
  {
    id: 'cal-sun',
    title: 'Calisthenics: Sunday',
    focus: 'Rest & Church',
    durationStr: 'N/A',
    exercises: [
       { id: 'cal-sun-e1', name: 'Go to Church', sets: [{targetReps: 1, completed: false}], notes: 'Spiritual recovery.' },
    ]
  },

  // --- SPECIAL & CARDIO ---
  {
    id: 'w-lower-back',
    title: 'Special: Safe Lower Back',
    focus: 'Core Stability & Safety',
    durationStr: '20-30 min',
    exercises: [
        { id: 'slb-e1', name: 'Cat-Cow Stretch', sets: [{targetReps: 0, completed: false}], notes: '1 min warm up. Gentle motion.' },
        { id: 'slb-e2', name: 'Bird-Dog', sets: createSets([10, 10, 10]), notes: 'Hold for 5s each rep. Keep back flat.' },
        { id: 'slb-e3', name: 'Glute Bridges', sets: createSets([15, 15, 15]), notes: 'Squeeze glutes at top, do not hyperextend back.' },
        { id: 'slb-e4', name: 'Modified Side Plank', sets: [{targetReps: 0, completed: false}, {targetReps: 0, completed: false}, {targetReps: 0, completed: false}], notes: '30s per side. Use knees if needed.' },
        { id: 'slb-e5', name: 'McGill Curl-Up', sets: createSets([10, 10, 10]), notes: 'Hands under lower back. Lift head/shoulders slightly.' },
        { id: 'slb-e6', name: 'Childs Pose', sets: [{targetReps: 0, completed: false}], notes: '2 mins cool down stretch.' },
    ]
  },
  {
    id: 'w-stretch-40',
    title: 'Recovery: Stretches (40+)',
    focus: 'Mobility & Anti-Aging',
    durationStr: '15-20 min',
    exercises: [
        { id: 's40-e1', name: 'Doorway Pec Stretch', sets: [{targetReps: 0, completed: false}], notes: '30s hold per side. Opens chest/posture.' },
        { id: 's40-e2', name: 'Standing Hip Flexor Stretch', sets: [{targetReps: 0, completed: false}], notes: '45s hold per side. Counteracts sitting.' },
        { id: 's40-e3', name: 'Thoracic Extension', sets: [{targetReps: 0, completed: false}], notes: 'Use foam roller or chair back. 1 min.' },
        { id: 's40-e4', name: 'Seated Figure-4', sets: [{targetReps: 0, completed: false}], notes: '1 min per side. Deep hip/glute release.' },
        { id: 's40-e5', name: 'Cat-Cow', sets: [{targetReps: 0, completed: false}], notes: '1 min. Lubricates spine.' },
        { id: 's40-e6', name: 'Neck Tilt & Hold', sets: [{targetReps: 0, completed: false}], notes: '30s per side. Gentle pressure only.' },
    ]
  },
  {
    id: 'c1',
    title: 'Cardio: HIIT',
    focus: 'Treadmill',
    durationStr: '10-15 min',
    exercises: [
        { id: 'c1-e1', name: 'Sprint Intervals', sets: Array(12).fill({ targetReps: 0, completed: false }), notes: '15-20s Sprint (100%), 20s Rest/Reduce' }
    ]
  },
  {
    id: 'c2',
    title: 'Cardio: HIIT',
    focus: 'Bike',
    durationStr: '10-15 min',
    exercises: [
        { id: 'c2-e1', name: 'Sprint Intervals', sets: Array(12).fill({ targetReps: 0, completed: false }), notes: '15-20s Sprint (100%), 20s Rest/Reduce' }
    ]
  },
  {
    id: 'c3',
    title: 'Cardio: LISS',
    focus: 'Treadmill',
    durationStr: '15-20 min',
    exercises: [
        { id: 'c3-e1', name: 'Steady State Run', sets: [{ targetReps: 0, completed: false }], notes: '15-20 min at 70% intensity' }
    ]
  },
  {
    id: 'c4',
    title: 'Cardio: LISS',
    focus: 'Bike',
    durationStr: '15-20 min',
    exercises: [
        { id: 'c4-e1', name: 'Steady State Cycle', sets: [{ targetReps: 0, completed: false }], notes: '15-20 min at 70% intensity' }
    ]
  },
  {
    id: 'c5',
    title: 'Cardio: LISS',
    focus: 'Cross Trainer',
    durationStr: '15-20 min',
    exercises: [
        { id: 'c5-e1', name: 'Steady State', sets: [{ targetReps: 0, completed: false }], notes: '15-20 min at 70% intensity' }
    ]
  }
];

export const RECOVERY_DATA: RecoveryRoutine = {
  stretching: [
    { name: 'Hip Flexor', duration: '20 sec' },
    { name: 'Knee To Chest', duration: '20 sec' },
    { name: 'Laying Glute', duration: '20 sec' },
    { name: 'Leg Resting Glute', duration: '20 sec' },
    { name: 'Hamstring Single', duration: '20 sec' },
    { name: 'Glutes (Stretch)', duration: '20 sec' },
    { name: 'Seated Hamstring', duration: '20 sec' },
  ],
  foamRolling: [
    { name: 'Calves', duration: '20 sec' },
    { name: 'Hamstrings', duration: '20 sec' },
    { name: 'Quadriceps', duration: '20 sec' },
    { name: 'Iliotibial Bands', duration: '20 sec' },
    { name: 'Inner Thighs', duration: '20 sec' },
    { name: 'Glutes (Roll)', duration: '20 sec' },
    { name: 'Upper Back', duration: '20 sec' },
    { name: 'Lower Back', duration: '20 sec' },
  ]
};

export const MEAL_PLANS: DailyMealPlan[] = [
  {
    day: 1,
    meals: {
      breakfast: { name: 'Oats & Eggs', ingredients: ['Oats', 'Water/Almond Milk', 'Banana', 'Eggs'] },
      meal2: { name: 'Chicken & Rice', ingredients: ['Chicken Breast', 'Brown Rice', 'Broccoli'] },
      meal3: { name: 'Salmon Delight', ingredients: ['Salmon', 'Sweet Potato', 'Spinach', 'Avocado'] },
      snacks: { name: 'Power Snack', ingredients: ['Protein Bar', 'Apple', 'Nuts'] }
    }
  },
  {
    day: 2,
    meals: {
      breakfast: { name: 'Oats & Fruit', ingredients: ['Oats', 'Almond Milk/Water', 'Fruit', 'Eggs'] },
      meal2: { name: 'Beef & Rice', ingredients: ['Beef', 'White Rice', 'Spinach'] },
      meal3: { name: 'Tuna Salad', ingredients: ['Tuna', 'Avocado'] },
      meal4: { name: 'Beef Pasta', ingredients: ['Beef', 'Pasta', 'Broccoli'] },
      snacks: { name: 'Quick Snack', ingredients: ['Apple', 'Nuts'] }
    }
  },
  {
    day: 3,
    meals: {
      breakfast: { name: 'Oats Combo', ingredients: ['Oats', 'Almond Milk/Water', 'Banana', 'Eggs'] },
      meal2: { name: 'Turkey Pasta', ingredients: ['Turkey', 'Pasta', 'Spinach'] },
      meal3: { name: 'Turkey & Rice', ingredients: ['Turkey', 'Brown Rice', 'Asparagus'] },
      snacks: { name: 'Fruit & Nuts', ingredients: ['Fruit', 'Nuts'] }
    }
  },
  {
    day: 4,
    meals: {
      breakfast: { name: 'Oats & Eggs', ingredients: ['Oats', 'Almond Milk/Water', 'Banana', 'Eggs'] },
      meal2: { name: 'Cod Dish', ingredients: ['Cod', 'White Rice', 'Broccoli'] },
      meal3: { name: 'Steak Meal', ingredients: ['Steak', 'White Rice', 'Spinach'] },
      snacks: { name: 'Yogurt Mix', ingredients: ['Greek Yogurt', 'Apple', 'Nuts'] }
    }
  },
  {
    day: 5,
    meals: {
      breakfast: { name: 'Oats & Fruit', ingredients: ['Oats', 'Almond Milk/Water', 'Fruit', 'Eggs'] },
      meal2: { name: 'Chicken & Rice', ingredients: ['Chicken Breast', 'Brown Rice', 'Broccoli'] },
      meal3: { name: 'Salmon & Potato', ingredients: ['Salmon', 'Sweet Potato', 'Spinach', 'Avocado'] },
      snacks: { name: 'Light Snack', ingredients: ['Fruit', 'Rice Cakes'] }
    }
  },
  {
    day: 6,
    meals: {
      breakfast: { name: 'Oats Banana', ingredients: ['Oats', 'Almond Milk/Water', 'Banana', 'Eggs'] },
      meal2: { name: 'Beef & Rice', ingredients: ['Beef', 'White Rice', 'Spinach'] },
      meal3: { name: 'Tuna & Avocado', ingredients: ['Tuna', 'Avocado'] },
      meal4: { name: 'Beef Pasta', ingredients: ['Beef', 'Pasta', 'Broccoli'] },
      snacks: { name: 'Nutty Fruit', ingredients: ['Fruit', 'Nuts'] }
    }
  },
  {
    day: 7,
    meals: {
      breakfast: { name: 'Oats & Eggs', ingredients: ['Oats', 'Almond Milk/Water', 'Fruit', 'Eggs'] },
      meal2: { name: 'Turkey Whole Grain', ingredients: ['Turkey', 'Whole Grain Pasta', 'Spinach'] },
      meal3: { name: 'Turkey & Rice', ingredients: ['Turkey', 'Brown Rice', 'Asparagus'] },
      snacks: { name: 'Yogurt Treat', ingredients: ['Greek Yogurt', 'Apple', 'Nuts'] }
    }
  }
];

export const ADVISOR_SYSTEM_PROMPT = `
You are an expert personal trainer and nutrition coach for the app "Tobaiyez's: Unleashing 2026".
Your advice is based on the "Muscular Mass" program by Calvin Carvel and Calisthenics principles.

Key Principles of the Program:
1. **Training**: High intensity weight training. 6 specific workouts (Shoulders, Legs, Chest, Arms, Back, Legs Vol 2).
2. **Technique**: Essential. Focus on form. Control weight when lifting heavy.
3. **Overload**: Pick a weight that causes failure at the rep range. Challenge yourself to increase weight while maintaining form.
4. **Rest**: Short rest periods, max 30 seconds between sets.
5. **Nutrition**: Calorie surplus is vital for mass. Eat 2000-2500 calories (adjust for individual). High protein.
6. **Hydration**: 3 Liters of water per day.
7. **Supplements**: Whey Protein, Fish Oil, Multivitamin, Maca Root, Green Tea.
8. **Recovery**: Sleep 7-8 hours. Foam rolling and stretching are key.
9. **Calisthenics**: Bodyweight mastery (Dips, Pull-ups, Handstands, Muscle-ups).

When answering:
- Be motivating and concise.
- Refer to specific workouts or meals from the program if relevant.
- If asked about substitutions, suggest biomechanically similar exercises or nutritionally similar foods.
- Always emphasize safety and form.
`;