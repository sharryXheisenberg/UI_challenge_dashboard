import React from 'react';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  change,
  icon,
}) => {
  const isPositive = change >= 0;

  return (
    <div className="glass-card rounded-xl p-6">
      <div className="flex items-center justify-between">
        <div className="text-slate-300">{title}</div>
        <div className="p-2 bg-blue-500/10 rounded-lg">{icon}</div>
      </div>
      <div className="mt-4">
        <div className="text-2xl font-semibold text-white">{value}</div>
        <div className="flex items-center mt-2">
          <span
            className={`flex items-center ${
              isPositive ? 'text-emerald-400' : 'text-red-400'
            }`}
          >
            {isPositive ? (
              <ArrowUpIcon className="w-4 h-4 mr-1" />
            ) : (
              <ArrowDownIcon className="w-4 h-4 mr-1" />
            )}
            {Math.abs(change)}%
          </span>
          <span className="text-slate-400 ml-2">vs last period</span>
        </div>
      </div>
    </div>
  );
};