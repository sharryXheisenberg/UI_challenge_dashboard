export interface SalesData {
  date: string;
  revenue: number;
  orders: number;
  customers: number;
}

export interface Product {
  id: string;
  name: string;
  revenue: number;
  sales: number;
  growth: number;
}

export type TimeFilter = '7d' | '30d' | '90d' | '12m';
export type CategoryFilter = 'all' | 'electronics' | 'clothing' | 'food' | 'furniture';