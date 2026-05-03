import { LayoutDashboard, CheckSquare, Target, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", active: true },
    { icon: <CheckSquare size={20} />, label: "Tasks", active: false },
    { icon: <Target size={20} />, label: "Goals", active: false },
    { icon: <Settings size={20} />, label: "Settings", active: false },
  ];

  return (
    <div className="w-64 h-screen bg-[#0d0d0d] border-r border-white/5 flex flex-col p-6 sticky top-0">
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-black font-bold text-xl">C</div>
        <h1 className="text-xl font-bold tracking-tight">Confused.</h1>
      </div>
      
      <nav className="flex-1 space-y-2">
        {menuItems.map((item, i) => (
          <div 
            key={i} 
            className={`flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer transition ${item.active ? 'bg-yellow-400/10 text-yellow-400' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="pt-6 border-t border-white/5">
        <div className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-red-400 cursor-pointer transition">
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </div>
      </div>
    </div>
  );
}
