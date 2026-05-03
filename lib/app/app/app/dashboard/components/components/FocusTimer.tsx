"use client";
import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export default function FocusTimer() {
  const [seconds, setSeconds] = useState(1500); // 25 minutes
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isActive && seconds > 0) {
      interval = setInterval(() => setSeconds(s => s - 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <div className="bg-[#141414] border border-white/5 p-8 rounded-2xl text-center">
      <h3 className="text-gray-400 mb-4 text-xs uppercase tracking-widest">Focus Mode</h3>
      <div className="text-5xl font-mono font-bold mb-8 text-white">
        {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
      </div>
      <div className="flex justify-center gap-4">
        <button onClick={() => setIsActive(!isActive)} className="p-4 rounded-full bg-yellow-400 text-black">
          {isActive ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button onClick={() => {setIsActive(false); setSeconds(1500);}} className="p-4 rounded-full bg-white/5 text-white">
          <RotateCcw size={20} />
        </button>
      </div>
    </div>
  );
}
