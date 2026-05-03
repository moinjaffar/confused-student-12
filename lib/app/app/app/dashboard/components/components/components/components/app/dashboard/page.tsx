"use client";
import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import FocusTimer from '@/components/FocusTimer';
import AnalyticsChart from '@/components/AnalyticsChart';
import { Zap, BookOpen, Target, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#0a0a0a]">
      <Sidebar />
      <main className="flex-1 p-8">
        <header className="mb-10">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-white"
          >
            Welcome back, <span className="text-yellow-400">Scholar</span>
          </motion.h1>
          <p className="text-gray-400 mt-1">Here is your academic progress overview.</p>
        </header>

        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard title="Study Streak" value="12 Days" icon={<Zap />} />
          <StatCard title="Completion" value="85%" icon={<BookOpen />} />
          <StatCard title="Daily Goal" value="Reached" icon={<Target />} />
          <StatCard title="Focus Time" value="4.5h" icon={<Clock />} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Visuals */}
          <div className="lg:col-span-2 bg-[#141414] border border-white/5 p-8 rounded-3xl">
            <h3 className="text-xl font-semibold mb-6 text-white text-center md:text-left">Study Intensity (Weekly)</h3>
            <AnalyticsChart />
          </div>

          {/* Right Tools */}
          <div className="space-y-8">
            <FocusTimer />
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 p-6 rounded-3xl text-black">
              <h4 className="font-bold text-lg mb-2">AI Tip of the Day</h4>
              <p className="text-sm font-medium opacity-90">
                "You are most productive between 10 AM and 1 PM. Try scheduling your Physics revision during this window!"
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
