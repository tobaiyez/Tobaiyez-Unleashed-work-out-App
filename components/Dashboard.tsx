import React, { useState, useEffect } from 'react';
import { TrendingUp, Calendar, Award } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [streak, setStreak] = useState(0);
  const [totalWorkouts, setTotalWorkouts] = useState(0);
  
  useEffect(() => {
      // Simple mock calculation for stats based on local storage keys
      const keys = Object.keys(localStorage);
      const workoutKeys = keys.filter(k => k.startsWith('workout-'));
      setTotalWorkouts(workoutKeys.length);
      
      // Mock streak logic (if last workout was today or yesterday, increment)
      // In a real app, this would be more robust
      setStreak(workoutKeys.length > 0 ? Math.min(workoutKeys.length, 5) : 0); 
  }, []);

  return (
    <div className="space-y-6">
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-slate-400">"Muscular Mass is an energising plan to a stronger physique."</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex flex-col items-center justify-center text-center">
                <div className="bg-amber-500/10 p-3 rounded-full mb-3">
                    <Calendar className="text-amber-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{streak}</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Day Streak</p>
            </div>
            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex flex-col items-center justify-center text-center">
                 <div className="bg-purple-500/10 p-3 rounded-full mb-3">
                    <TrendingUp className="text-purple-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{totalWorkouts}</h3>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Sessions Done</p>
            </div>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">
            <h3 className="font-bold text-white flex items-center gap-2 mb-4">
                <Award className="text-yellow-500" size={20}/> Program Goals
            </h3>
            <div className="space-y-4">
                <GoalItem label="Calorie Surplus" done={true} />
                <GoalItem label="4-6 Workouts / Week" done={false} />
                <GoalItem label="3 Liters Water / Day" done={false} />
            </div>
        </div>

        <div className="p-4 rounded-xl bg-blue-900/20 border border-blue-900/50 text-blue-200 text-sm text-center">
            "There might be days where motivation will lack, but it's important to maintain discipline."
        </div>
    </div>
  );
};

const GoalItem: React.FC<{ label: string; done: boolean }> = ({ label, done }) => (
    <div className="flex items-center justify-between">
        <span className="text-slate-300 text-sm">{label}</span>
        <div className={`w-4 h-4 rounded-full border ${done ? 'bg-emerald-500 border-emerald-500' : 'border-slate-600'}`}></div>
    </div>
)

export default Dashboard;
