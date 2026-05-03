"use client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Mon', hours: 4 },
  { name: 'Tue', hours: 6 },
  { name: 'Wed', hours: 3 },
  { name: 'Thu', hours: 8 },
  { name: 'Fri', hours: 5 },
  { name: 'Sat', hours: 9 },
  { name: 'Sun', hours: 2 },
];

export default function AnalyticsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#555" fontSize={12} tickLine={false} axisLine={false} />
          <Tooltip 
            cursor={{fill: 'transparent'}}
            contentStyle={{ backgroundColor: '#141414', border: 'none', borderRadius: '8px', color: '#fff' }}
          />
          <Bar dataKey="hours" radius={[4, 4, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 5 ? '#fbbf24' : '#333'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
