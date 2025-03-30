import React, { useState, useMemo } from 'react';
import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
  LayoutDashboard,
} from 'lucide-react';
import { DashboardCard } from './components/DashboardCard';
import { SalesChart } from './components/SalesChart';
import { ProductTable } from './components/ProductTable';
import { getSalesData, getFilteredProducts } from './mockData';
import { TimeFilter, CategoryFilter } from './types';

function App() {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('30d');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');

  const salesData = useMemo(() => getSalesData(timeFilter), [timeFilter]);
  const products = useMemo(
    () => getFilteredProducts(categoryFilter),
    [categoryFilter]
  );

  const latestData = salesData[salesData.length - 1];
  const previousData = salesData[salesData.length - 2];

  const calculateChange = (current: number, previous: number) => {
    return Math.round(((current - previous) / previous) * 100);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-white/10 rounded-lg">
            <LayoutDashboard className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Sales Dashboard</h1>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <p className="text-white/60">
            Track your sales performance and growth metrics
          </p>
          <div className="flex gap-4">
            <select
              value={timeFilter}
              onChange={(e) => setTimeFilter(e.target.value as TimeFilter)}
              className="modern-select bg-white/10 border-0 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="12m">Last 12 months</option>
            </select>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value as CategoryFilter)}
              className="modern-select bg-white/10 border-0 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="food">Food</option>
              <option value="furniture">Furniture</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Total Revenue"
            value={`$${latestData.revenue.toLocaleString()}`}
            change={calculateChange(latestData.revenue, previousData.revenue)}
            icon={<DollarSign className="w-6 h-6 text-blue-500" />}
          />
          <DashboardCard
            title="Orders"
            value={latestData.orders.toString()}
            change={calculateChange(latestData.orders, previousData.orders)}
            icon={<ShoppingCart className="w-6 h-6 text-blue-500" />}
          />
          <DashboardCard
            title="Customers"
            value={latestData.customers.toString()}
            change={calculateChange(latestData.customers, previousData.customers)}
            icon={<Users className="w-6 h-6 text-blue-500" />}
          />
          <DashboardCard
            title="Conversion Rate"
            value={`${((latestData.orders / latestData.customers) * 100).toFixed(
              1
            )}%`}
            change={2.5}
            icon={<TrendingUp className="w-6 h-6 text-blue-500" />}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 mb-8">
          <SalesChart data={salesData} />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <ProductTable products={products} />
        </div>
      </div>
    </div>
  );
}

export default App;