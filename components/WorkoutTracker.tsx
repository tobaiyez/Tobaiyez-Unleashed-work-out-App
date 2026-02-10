import React, { useState, useEffect } from 'react';
import { WORKOUTS } from '../constants';
import { WorkoutPlan, Exercise } from '../types';
import { CheckCircle2, Circle, Save, Info, Calendar, PlayCircle } from 'lucide-react';

const WorkoutTracker: React.FC = () => {
  const [selectedWorkoutId, setSelectedWorkoutId] = useState<string>('w1');
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [activeWorkout, setActiveWorkout] = useState<WorkoutPlan>(WORKOUTS[0]);
  const [completedSets, setCompletedSets] = useState<Record<string, boolean>>({});
  const [inputData, setInputData] = useState<Record<string, { weight: string, reps: string }>>({});

  useEffect(() => {
    const found = WORKOUTS.find(w => w.id === selectedWorkoutId);
    if (found) setActiveWorkout(found);
  }, [selectedWorkoutId]);

  // Load data from local storage based on Date AND Workout ID
  useEffect(() => {
    const stored = localStorage.getItem(`workout-${selectedDate}-${selectedWorkoutId}`);
    if (stored) {
      const parsed = JSON.parse(stored);
      setCompletedSets(parsed.completedSets || {});
      setInputData(parsed.inputData || {});
    } else {
      setCompletedSets({});
      setInputData({});
    }
  }, [selectedWorkoutId, selectedDate]);

  const handleSave = () => {
    const dataToSave = { completedSets, inputData };
    localStorage.setItem(`workout-${selectedDate}-${selectedWorkoutId}`, JSON.stringify(dataToSave));
    // Visual feedback (in a real app use a toast, here alert is safe)
    const formattedDate = new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    alert(`Workout saved for ${formattedDate}!`);
  };

  const toggleSet = (exerciseId: string, setIndex: number) => {
    const key = `${exerciseId}-${setIndex}`;
    setCompletedSets(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleInput = (exerciseId: string, setIndex: number, field: 'weight' | 'reps', value: string) => {
    const key = `${exerciseId}-${setIndex}`;
    setInputData(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: value
      }
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-4">
        
        {/* Date Selector */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Calendar className="text-blue-400" size={20} />
          </div>
          <div className="flex-1">
             <label className="text-xs text-slate-500 block mb-1 uppercase tracking-wide font-bold">Log Date</label>
             <input 
              type="date" 
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="bg-slate-950 text-white p-2 rounded-lg border border-slate-700 w-full text-sm outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Workout Selector */}
        <div>
           <label className="text-xs text-slate-500 block mb-2 uppercase tracking-wide font-bold">Select Session</label>
           <select 
            className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedWorkoutId}
            onChange={(e) => setSelectedWorkoutId(e.target.value)}
          >
            <optgroup label="Muscular Mass Program">
              {WORKOUTS.filter(w => w.id.startsWith('w') && !w.id.includes('stretch') && !w.id.includes('lower')).map(w => (
                <option key={w.id} value={w.id}>{w.title}: {w.focus}</option>
              ))}
            </optgroup>
            <optgroup label="Calisthenics (Tobaiyez)">
              {WORKOUTS.filter(w => w.id.startsWith('cal')).map(w => (
                <option key={w.id} value={w.id}>{w.title}</option>
              ))}
            </optgroup>
             <optgroup label="Special & Recovery">
              {WORKOUTS.filter(w => w.id.includes('stretch') || w.id.includes('lower')).map(w => (
                <option key={w.id} value={w.id}>{w.title}</option>
              ))}
            </optgroup>
            <optgroup label="Cardio">
              {WORKOUTS.filter(w => w.id.startsWith('c')).map(w => (
                <option key={w.id} value={w.id}>{w.title}: {w.focus}</option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        {activeWorkout.exercises.map((exercise) => (
          <div key={exercise.id} className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-4 bg-slate-800/50 border-b border-slate-800 flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-white">{exercise.name}</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {exercise.notes && <p className="text-xs text-blue-400 flex items-center gap-1"><Info size={12}/> {exercise.notes}</p>}
                  {exercise.videoUrl && (
                    <a href={exercise.videoUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-red-400 flex items-center gap-1 hover:text-red-300 transition-colors">
                      <PlayCircle size={12} /> Watch Tutorial
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-4 space-y-3">
              {/* Header for sets */}
              <div className="grid grid-cols-10 gap-2 text-xs font-mono text-slate-500 mb-2 text-center">
                <div className="col-span-2">SET</div>
                <div className="col-span-2">GOAL</div>
                <div className="col-span-2">KG/BW</div>
                <div className="col-span-2">REPS</div>
                <div className="col-span-2">DONE</div>
              </div>

              {exercise.sets.map((set, idx) => {
                const setKey = `${exercise.id}-${idx}`;
                const isDone = completedSets[setKey];
                return (
                  <div key={idx} className={`grid grid-cols-10 gap-2 items-center ${isDone ? 'opacity-50' : ''}`}>
                    <div className="col-span-2 text-center font-bold text-slate-400">
                      {idx + 1}
                    </div>
                    <div className="col-span-2 text-center text-sm text-slate-300">
                      {set.targetReps > 0 ? set.targetReps : 'Time'}
                    </div>
                    <div className="col-span-2">
                      <input 
                        type="number" 
                        placeholder="0"
                        className="w-full bg-slate-950 border border-slate-700 rounded px-1 py-2 text-center text-sm text-white focus:border-blue-500 outline-none"
                        value={inputData[setKey]?.weight || ''}
                        onChange={(e) => handleInput(exercise.id, idx, 'weight', e.target.value)}
                      />
                    </div>
                    <div className="col-span-2">
                       <input 
                        type="number" 
                        placeholder={set.targetReps.toString()}
                        className="w-full bg-slate-950 border border-slate-700 rounded px-1 py-2 text-center text-sm text-white focus:border-blue-500 outline-none"
                        value={inputData[setKey]?.reps || ''}
                        onChange={(e) => handleInput(exercise.id, idx, 'reps', e.target.value)}
                      />
                    </div>
                    <div className="col-span-2 flex justify-center">
                      <button 
                        onClick={() => toggleSet(exercise.id, idx)}
                        className={`p-2 rounded-full transition-colors ${isDone ? 'text-emerald-400 bg-emerald-400/10' : 'text-slate-600 bg-slate-800 hover:bg-slate-700'}`}
                      >
                        {isDone ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={handleSave}
        className="fixed bottom-20 right-4 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-lg shadow-blue-900/50 flex items-center justify-center z-40"
      >
        <Save size={24} />
      </button>
    </div>
  );
};

export default WorkoutTracker;