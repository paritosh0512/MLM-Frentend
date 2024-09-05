import React from 'react';

const Distributorsfile = () => {
  const users = [
    {
      id: 1,
      name: 'Amit',
      gender: 'Male',
      mobileNo: '914-456-7890',
      emailId: 'amit@gmail.com',
      distributorId: 'D123456',
      sponsorId: 'S654321',
      registerDate: '2024-09-01',
      points: 100,
    },
    {
      id: 2,
      name: 'Kshama',
      gender: 'Female',
      mobileNo: '987-654-3210',
      emailId: 'k@example.com',
      distributorId: 'D654321',
      sponsorId: 'S123456',
      registerDate: '2024-08-25',
      points: 150,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2 border">S No</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Gender</th>
              <th className="px-4 py-2 border">Mobile No</th>
              <th className="px-4 py-2 border">Email ID</th>
              <th className="px-4 py-2 border">Distributor ID</th>
              <th className="px-4 py-2 border">Sponsor ID</th>
              <th className="px-4 py-2 border">Register Date</th>
              <th className="px-4 py-2 border">Points</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{user.name}</td>
                <td className="px-4 py-2 border text-center">{user.gender}</td>
                <td className="px-4 py-2 border">{user.mobileNo}</td>
                <td className="px-4 py-2 border">{user.emailId}</td>
                <td className="px-4 py-2 border">{user.distributorId}</td>
                <td className="px-4 py-2 border">{user.sponsorId}</td>
                <td className="px-4 py-2 border text-center">{user.registerDate}</td>
                <td className="px-4 py-2 border text-center">{user.points}</td>
                <td className="px-4 py-2 border text-center">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded m-1">View Profile</button>
                  <button className="bg-yellow-500 text-white px-2 py-1 rounded m-1">Update Profile</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded m-1">Reset Password</button>
                  <button className="bg-green-500 text-white px-2 py-1 rounded m-1">Manage Points</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Distributorsfile ;
