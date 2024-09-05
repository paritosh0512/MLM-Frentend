import React from 'react';

const Order = () => {
  const orders = [
    {
      id: 1,
      orderId: 'ORD12345',
      name: 'John Doe',
      mobile: '123-456-7890',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      pinCode: '10001',
      discount: 10,
      deliveryCharge: 5,
      totalItems: 3,
      totalAmount: 150,
    },
    // Add more order data here...
  ];

  return (
    
    <div className="container mx-auto p-2">
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 text-xs">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase leading-tight">
              <th className="py-2 px-4 text-left">S No</th>
              <th className="py-2 px-4 text-left">Order ID</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Mobile No</th>
              <th className="py-2 px-4 text-left">Address</th>
              <th className="py-2 px-4 text-left">City</th>
              <th className="py-2 px-4 text-left">State</th>
              <th className="py-2 px-4 text-left">Pin Code</th>
              <th className="py-2 px-4 text-left">Discount (%)</th>
              <th className="py-2 px-4 text-left">Delivery Charge ($)</th>
              <th className="py-2 px-4 text-left">Total Items</th>
              <th className="py-2 px-4 text-left">Total Amount ($)</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 font-light">
            {orders.map((order, index) => (
              <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-2 px-4 text-left whitespace-nowrap">{index + 1}</td>
                <td className="py-2 px-4 text-left">{order.orderId}</td>
                <td className="py-2 px-4 text-left">{order.name}</td>
                <td className="py-2 px-4 text-left">{order.mobile}</td>
                <td className="py-2 px-4 text-left">{order.address}</td>
                <td className="py-2 px-4 text-left">{order.city}</td>
                <td className="py-2 px-4 text-left">{order.state}</td>
                <td className="py-2 px-4 text-left">{order.pinCode}</td>
                <td className="py-2 px-4 text-left">{order.discount}</td>
                <td className="py-2 px-4 text-left">{order.deliveryCharge}</td>
                <td className="py-2 px-4 text-left">{order.totalItems}</td>
                <td className="py-2 px-4 text-left">{order.totalAmount}</td>
                <td className="py-2 px-4 text-left">
                  <div className="flex item-center justify-start space-x-1">
                    <button className="bg-blue-500 text-white px-1 py-0.5 rounded text-xs">Show</button>
                    <button className="bg-red-500 text-white px-1 py-0.5 rounded text-xs">Cancel</button>
                    <button className="bg-green-500 text-white px-1 py-0.5 rounded text-xs">Invoice</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
