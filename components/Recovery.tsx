import React from 'react';
import { Moon, Timer, Activity } from 'lucide-react';
import { RECOVERY_DATA } from '../constants';

const Recovery: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Moon className="text-indigo-400" size={24} />
          Sleep
        </h2>
        <p className="text-slate-300 text-sm mb-4">
          A quality 7-8 hours is essential for muscle growth.
        </p>
         <div className="w-full bg-slate-800 h-4 rounded-full overflow-hidden relative">
             <div className="absolute top-0 left-0 h-full bg-indigo-500 w-3/4"></div>
         </div>
         <div className="flex justify-between mt-2 text-xs text-slate-500">
             <span>0h</span>
             <span>Target: 8h</span>
         </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
              <h3 className="font-bold text-white flex items-center gap-2 mb-4">
                  <Activity className="text-emerald-400" size={20} />
                  Stretching Routine
              </h3>
              <ul className="text-sm text-slate-400 space-y-3">
                  {RECOVERY_DATA.stretching.map((exercise, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                        <span>{exercise.name}</span>
                        <span className="text-emerald-500 font-mono text-xs">{exercise.duration}</span>
                    </li>
                  ))}
              </ul>
          </div>

          <div className="bg-slate-900 p-5 rounded-xl border border-slate-800">
               <h3 className="font-bold text-white flex items-center gap-2 mb-4">
                  <Timer className="text-blue-400" size={20} />
                  Foam Rolling
              </h3>
               <ul className="text-sm text-slate-400 space-y-3">
                   {RECOVERY_DATA.foamRolling.map((exercise, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                        <span>{exercise.name}</span>
                        <span className="text-blue-500 font-mono text-xs">{exercise.duration}</span>
                    </li>
                  ))}
              </ul>
          </div>
      </div>
    </div>
  );
};

export default Recovery;