import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { SalesData } from '../types';

interface SalesChartProps {
  data: SalesData[];
}

export const SalesChart: React.FC<SalesChartProps> = ({ data }) => {
  return (
    <div className="glass-card p-6 rounded-xl">
      <h2 className="text-lg font-semibold mb-4 text-white">Revenue Overview</h2>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.1)" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#94A3B8', fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#94A3B8', fontSize: 12 }}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(30, 41, 59, 0.9)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                borderRadius: '8px',
                color: '#e2e8f0',
              }}
              formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3B82F6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#revenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};