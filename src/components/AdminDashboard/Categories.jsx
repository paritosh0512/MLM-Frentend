import React, { useState } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Accessories', isActive: true },
    { id: 2, name: 'Clothes', isActive: false },
    { id: 3, name: 'Footwear', isActive: true },
  ]);

  const toggleActiveStatus = (id) => {
    setCategories(
      categories.map(category =>
        category.id === id ? { ...category, isActive: !category.isActive } : category
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 border">S No</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category.id}>
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{category.name}</td>
                <td className="px-4 py-2 border text-center">
                  {category.isActive ? 'Active' : 'Not Active'}
                </td>
                <td className="px-4 py-2 border text-center">
                  <button
                    onClick={() => toggleActiveStatus(category.id)}
                    className={`px-4 py-1 rounded ${
                      category.isActive ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
                    }`}
                  >
                    {category.isActive ? 'Deactivate' : 'Activate'}
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

export default Categories;
