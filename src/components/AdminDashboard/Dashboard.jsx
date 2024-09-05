import React from 'react';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Total Users */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Total Users</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">1,234</p>
        </div>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          View All
        </button>
      </div>

      {/* Total Products */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Total Products</h2>
          <p className="text-4xl font-bold text-green-600 mt-2">567</p>
        </div>
        <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
          View All
        </button>
      </div>

      {/* Total Orders */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Total Orders</h2>
          <p className="text-4xl font-bold text-red-600 mt-2">890</p>
        </div>
        <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">
          View All
        </button>
      </div>
          {/* Pending Orders */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Pending Orders</h2>
          <p className="text-4xl font-bold text-red-600 mt-2">120</p>
        </div>
        <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">
          View All
        </button>
      </div>
          {/* DELIVERED ORDERS */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-700">Delivered Orders</h2>
          <p className="text-4xl font-bold text-red-600 mt-2">12,000</p>
        </div>
        <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition">
          View All
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
