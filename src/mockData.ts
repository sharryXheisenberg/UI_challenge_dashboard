import { addDays, format, subDays } from 'date-fns';
import { CategoryFilter, Product, SalesData } from './types';

const generateDailyData = (days: number): SalesData[] => {
  const data: SalesData[] = [];
  const today = new Date();

  for (let i = days; i >= 0; i--) {
    const date = subDays(today, i);
    const baseRevenue = 10000 + Math.random() * 15000;
    const orders = Math.floor(baseRevenue / 100);
    const customers = Math.floor(orders * 0.8);

    data.push({
      date: format(date, 'yyyy-MM-dd'),
      revenue: Math.round(baseRevenue),
      orders,
      customers,
    });
  }

  return data;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Laptops',
    revenue: 125000,
    sales: 500,
    growth: 12.5,
  },
  {
    id: '2',
    name: 'Smartphones',
    revenue: 98000,
    sales: 750,
    growth: 8.3,
  },
  {
    id: '3',
    name: 'Accessories',
    revenue: 45000,
    sales: 1200,
    growth: 15.7,
  },
  {
    id: '4',
    name: 'Tablets',
    revenue: 67000,
    sales: 320,
    growth: -2.4,
  },
  {
    id: '5',
    name: 'Monitors',
    revenue: 89000,
    sales: 420,
    growth: 5.9,
  },
];

export const getSalesData = (timeFilter: string) => {
  const daysMap: Record<string, number> = {
    '7d': 7,
    '30d': 30,
    '90d': 90,
    '12m': 365,
  };
  return generateDailyData(daysMap[timeFilter] || 30);
};

export const getFilteredProducts = (category: CategoryFilter) => {
  if (category === 'all') return products;
  return products.filter(p => Math.random() > 0.5); // Simulate filtering
};