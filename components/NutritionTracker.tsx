import React, { useState, useEffect } from 'react';
import { MEAL_PLANS } from '../constants';
import { Droplets, Check } from 'lucide-react';

const NutritionTracker: React.FC = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [waterIntake, setWaterIntake] = useState(0);
  const [mealsEaten, setMealsEaten] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const stored = localStorage.getItem(`nutrition-${today}`);
    if (stored) {
      const parsed = JSON.parse(stored);
      setWaterIntake(parsed.waterIntake || 0);
      setMealsEaten(parsed.mealsEaten || {});
    }
  }, []);

  const saveProgress = (newWater: number, newMeals: Record<string, boolean>) => {
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem(`nutrition-${today}`, JSON.stringify({ waterIntake: newWater, mealsEaten: newMeals }));
  };

  const toggleMeal = (mealKey: string) => {
    const newMeals = { ...mealsEaten, [mealKey]: !mealsEaten[mealKey] };
    setMealsEaten(newMeals);
    saveProgress(waterIntake, newMeals);
  };

  const addWater = () => {
    const newWater = waterIntake + 0.25;
    setWaterIntake(newWater);
    saveProgress(newWater, mealsEaten);
  };
  
  const resetWater = () => {
      setWaterIntake(0);
      saveProgress(0, mealsEaten);
  }

  const activePlan = MEAL_PLANS.find(p => p.day === currentDay) || MEAL_PLANS[0];

  const mealKeys = ['breakfast', 'meal2', 'meal3', 'meal4', 'snacks'] as const;

  return (
    <div className="space-y-6">
      {/* Water Tracker */}
      <div className="bg-gradient-to-br from-blue-900 to-slate-900 p-6 rounded-2xl border border-blue-800/50 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-blue-500/20 rounded-full">
             <Droplets className="text-blue-400" size={32} />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-1">{waterIntake.toFixed(2)}L</h2>
        <p className="text-blue-200 text-sm mb-6">Daily Goal: 3.0L</p>
        <div className="flex gap-3 justify-center">
            <button 
            onClick={addWater}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition"
            >
            + 250ml
            </button>
            <button
            onClick={resetWater}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-medium rounded-lg transition"
            >
                Reset
            </button>
        </div>
        {/* Progress Bar */}
        <div className="mt-6 bg-slate-800 h-3 rounded-full overflow-hidden">
          <div 
            className="bg-blue-500 h-full transition-all duration-500" 
            style={{ width: `${Math.min((waterIntake / 3) * 100, 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Meal Plan */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-white">Daily Fuel</h3>
          <select 
            value={currentDay}
            onChange={(e) => setCurrentDay(Number(e.target.value))}
            className="bg-slate-800 text-white text-sm p-2 rounded border border-slate-700"
          >
            {MEAL_PLANS.map(p => <option key={p.day} value={p.day}>Day {p.day}</option>)}
          </select>
        </div>

        <div className="space-y-3">
          {mealKeys.map(key => {
            const meal = activePlan.meals[key];
            if (!meal) return null;
            const isEaten = mealsEaten[`day${currentDay}-${key}`];

            return (
              <div 
                key={key}
                onClick={() => toggleMeal(`day${currentDay}-${key}`)}
                className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 flex justify-between items-center ${
                  isEaten 
                    ? 'bg-emerald-900/20 border-emerald-800/50 opacity-60' 
                    : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">
                    {key === 'meal2' ? 'Meal 2' : key === 'meal3' ? 'Meal 3' : key === 'meal4' ? 'Meal 4' : key}
                  </p>
                  <h4 className={`font-semibold ${isEaten ? 'text-emerald-400' : 'text-white'}`}>{meal.name}</h4>
                  <p className="text-sm text-slate-400 mt-1">{meal.ingredients.join(', ')}</p>
                </div>
                <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                  isEaten ? 'bg-emerald-500 border-emerald-500' : 'border-slate-600'
                }`}>
                  {isEaten && <Check size={14} className="text-white" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* General Nutrition Advice */}
      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-800 text-sm text-slate-300">
          <h4 className="text-white font-bold mb-2">Nutritional Keys</h4>
          <ul className="list-disc pl-4 space-y-1">
              <li>Maintain a calorie surplus (2000-2500 kcal).</li>
              <li>Prioritize protein for repair.</li>
              <li>Carbs are fuel. Don't skip them.</li>
              <li>Consistency is key.</li>
          </ul>
      </div>
    </div>
  );
};

export default NutritionTracker;
