import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      category: 'Category A',
      description: 'This is a description of product 1.',
      discount: 10,
      price: 100,
      unit: 'kg',
      discountPrice: 90,
      quantity: 50,
      remark: 'In stock',
      imageUrl: 'https://via.placeholder.com/50',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category B',
      description: 'This is a description of product 2.',
      discount: 15,
      price: 200,
      unit: 'piece',
      discountPrice: 170,
      quantity: 30,
      remark: 'Limited stock',
      imageUrl: 'https://via.placeholder.com/50',
      status: 'Inactive',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 border">S No</th>
              <th className="px-4 py-2 border">Product Name</th>
              <th className="px-4 py-2 border">Categories</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Discount (%)</th>
              <th className="px-4 py-2 border">Price</th>
              <th className="px-4 py-2 border">Unit</th>
              <th className="px-4 py-2 border">Discount Price</th>
              <th className="px-4 py-2 border">Quantity</th>
              <th className="px-4 py-2 border">Remark</th>
              <th className="px-4 py-2 border">Product Image</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{product.name}</td>
                <td className="px-4 py-2 border">{product.category}</td>
                <td className="px-4 py-2 border">{product.description}</td>
                <td className="px-4 py-2 border text-center">{product.discount}%</td>
                <td className="px-4 py-2 border text-center">${product.price}</td>
                <td className="px-4 py-2 border text-center">{product.unit}</td>
                <td className="px-4 py-2 border text-center">${product.discountPrice}</td>
                <td className="px-4 py-2 border text-center">{product.quantity}</td>
                <td className="px-4 py-2 border">{product.remark}</td>
                <td className="px-4 py-2 border text-center">
                  <img src={product.imageUrl} alt={product.name} className="w-12 h-12 object-cover" />
                </td>
                <td className="px-4 py-2 border text-center">{product.status}</td>
                <td className="px-4 py-2 border text-center">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded m-1">Edit</button>
                  <button className="bg-green-500 text-white px-3 py-1 rounded m-1">
                    Reactivate
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
