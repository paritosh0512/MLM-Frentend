import React from 'react';

const Level_Wise_Percentage = () => {
  const levels = [
    { id: 1, level: 'Beginner', percentage: 30 },
    { id: 2, level: 'Intermediate', percentage: 50 },
    { id: 3, level: 'Advanced', percentage: 80 },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 border">S No</th>
              <th className="px-4 py-2 border">Level</th>
              <th className="px-4 py-2 border">Percentage</th>
            </tr>
          </thead>
          <tbody>
            {levels.map((level, index) => (
              <tr key={level.id}>
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{level.level}</td>
                <td className="px-4 py-2 border text-center">{level.percentage}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Level_Wise_Percentage;
