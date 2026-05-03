"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { db } from '@/lib/firebase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import AnalyticsChart from '@/components/AnalyticsChart';
import TaskList from '@/components/TaskList';
import FocusTimer from '@/components/FocusTimer';
import { BookOpen, Target, Zap, Clock } from 'lucide-react';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const taskData: any = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTasks(taskData);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-white">
      <Sidebar />
      
      <main className="flex-1 p-8 overflow-y-auto">
        <header className="mb-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold"
          >
            Welcome back, <span className="text-yellow-400">Scholar</span>
          </motion.h1>
          <p className="text-gray-400 mt-2">Here is your academic progress for today.</p>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard title="Study Streak" value="12 Days" icon={<Zap className="text-yellow-400" />} />
          <StatCard title="Tasks Completed" value={`${tasks.filter((t:any) => t.completed).length}/${tasks.length}`} icon={<BookOpen className="text-blue-400" />} />
          <StatCard title="Focus Score" value="92%" icon={<Target className="text-purple-400" />} />
          <StatCard title="Hours Logged" value="48h" icon={<Clock className="text-emerald-400" />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Analytics */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-[#141414] border border-white/5 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">Subject Performance</h3>
              <AnalyticsChart />
            </div>
            
            <div className="bg-[#141414] border border-white/5 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-6">Active Tasks</h3>
              <TaskList tasks={tasks} />
            </div>
          </div>

          {/* Right Sidebar Tools */}
          <div className="space-y-8">
            <FocusTimer />
            
            <div className="bg-yellow-400/10 border border-yellow-400/20 p-6 rounded-2xl">
              <h3 className="text-yellow-400 font-bold mb-2">AI Insight</h3>
              <p className="text-sm text-gray-300">
                "You spent 45% less time on Mathematics this week. We recommend a 40-minute focused session today."
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
