import React from 'react';

const Ranks = () => {
  const ranks = [
    { id: 1, rank: 'General Manager', rankShort: 'GM', msd: 95 },
    { id: 2, rank: 'FC', rankShort: 'AM', msd: 88 },
    { id: 3, rank: 'Fashion Influencer', rankShort: 'SE', msd: 82 },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 border">S No</th>
              <th className="px-4 py-2 border">Rank</th>
              <th className="px-4 py-2 border">Rank Short</th>
              <th className="px-4 py-2 border">MSD%</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {ranks.map((rank, index) => (
              <tr key={rank.id}>
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{rank.rank}</td>
                <td className="px-4 py-2 border text-center">{rank.rankShort}</td>
                <td className="px-4 py-2 border text-center">{rank.msd}%</td>
                <td className="px-4 py-2 border text-center">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ranks;
