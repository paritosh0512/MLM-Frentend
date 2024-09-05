import React, { useState } from 'react';

const salesData = [
  { id: 1, date: '2023-09-01', orderId: 'ORD001', name: 'Alice Brown', totalAmount: 100 },
  { id: 2, date: '2024-08-15', orderId: 'ORD002', name: 'Bob Smith', totalAmount: 150 },
  { id: 3, date: '2023-07-25', orderId: 'ORD003', name: 'Charlie Johnson', totalAmount: 200 },
  { id: 4, date: '2024-06-30', orderId: 'ORD004', name: 'David Williams', totalAmount: 250 },
  { id: 5, date: '2022-05-10', orderId: 'ORD005', name: 'Eve Davis', totalAmount: 300 },
  // Add more sales data here if needed...
];

const TotalSale = () => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const days = [...Array(31).keys()].map(d => d + 1);
  const months = [...Array(12).keys()].map(m => m + 1);
  const years = [...new Set(salesData.map(sale => new Date(sale.date).getFullYear()))];

  const filteredSales = salesData.filter((sale) => {
    const saleDate = new Date(sale.date);
    const dayMatch = selectedDay ? saleDate.getDate() === parseInt(selectedDay) : true;
    const monthMatch = selectedMonth ? saleDate.getMonth() + 1 === parseInt(selectedMonth) : true;
    const yearMatch = selectedYear ? saleDate.getFullYear() === parseInt(selectedYear) : true;

    return dayMatch && monthMatch && yearMatch;
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-between mb-4 space-y-2 md:space-y-0">
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Day</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-xs"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
          >
            <option value="">All Days</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Month</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-xs"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="">All Months</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Year</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-xs"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">All Years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 text-xs">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase leading-tight">
              <th className="py-2 px-4 text-left">S No</th>
              <th className="py-2 px-4 text-left">Order ID</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Total Amount ($)</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 font-light">
            {filteredSales.length > 0 ? (
              filteredSales.map((sale, index) => (
                <tr key={sale.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-2 px-4 text-left whitespace-nowrap">{index + 1}</td>
                  <td className="py-2 px-4 text-left">{sale.orderId}</td>
                  <td className="py-2 px-4 text-left">{sale.name}</td>
                  <td className="py-2 px-4 text-left">{sale.date}</td>
                  <td className="py-2 px-4 text-left">{sale.totalAmount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-2 px-4 text-center">No sales found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TotalSale;
