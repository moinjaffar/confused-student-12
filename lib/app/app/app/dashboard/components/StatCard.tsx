import { motion } from 'framer-motion';

export default function StatCard({ title, value, icon }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5 }} // Lifts up slightly when you hover
      className="bg-[#141414] border border-white/5 p-6 rounded-2xl flex items-center justify-between"
    >
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <h2 className="text-2xl font-bold mt-1 text-white">{value}</h2>
      </div>
      <div className="p-3 bg-yellow-400/10 rounded-xl text-yellow-400">
        {icon}
      </div>
    </motion.div>
  );
}
