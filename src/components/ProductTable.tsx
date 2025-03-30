import React from 'react';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { Product } from '../types';

interface ProductTableProps {
  products: Product[];
}

export const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <div className="glass-card rounded-xl">
      <div className="p-6 border-b border-slate-700/50">
        <h2 className="text-lg font-semibold text-white">Top Products</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-slate-400">
              <th className="px-6 py-4 font-medium">Product</th>
              <th className="px-6 py-4 font-medium">Revenue</th>
              <th className="px-6 py-4 font-medium">Sales</th>
              <th className="px-6 py-4 font-medium">Growth</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-t border-slate-700/50 hover:bg-slate-700/30 transition-colors"
              >
                <td className="px-6 py-4 text-slate-300">{product.name}</td>
                <td className="px-6 py-4 text-slate-300">
                  ${product.revenue.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-slate-300">{product.sales}</td>
                <td className="px-6 py-4">
                  <span
                    className={`flex items-center ${
                      product.growth >= 0 ? 'text-emerald-400' : 'text-red-400'
                    }`}
                  >
                    {product.growth >= 0 ? (
                      <ArrowUpIcon className="w-4 h-4 mr-1" />
                    ) : (
                      <ArrowDownIcon className="w-4 h-4 mr-1" />
                    )}
                    {Math.abs(product.growth)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};