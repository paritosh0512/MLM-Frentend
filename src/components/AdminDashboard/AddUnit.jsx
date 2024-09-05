import React from 'react';

const AddUnit = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-center">Unit</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-center">kg</td>
              <td className="py-3 px-6 text-center">
                <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
                  Add Unit
                </button>
                <button className="bg-yellow-600 text-white py-2 px-4 rounded ml-2 hover:bg-yellow-700 transition">
                  Edit
                </button>
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-center">piece</td>
              <td className="py-3 px-6 text-center">
                <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
                  Add Unit
                </button>
                <button className="bg-yellow-600 text-white py-2 px-4 rounded ml-2 hover:bg-yellow-700 transition">
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddUnit;
