import React from 'react';

const Header = ({ toggleSidebar }) => {
  return (
    <div className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="lg:hidden">
        {/* <button onClick={toggleSidebar} className="text-gray-500 focus:outline-none focus:text-gray-700">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button> */}
      </div>
      <div className="font-bold text-lg">Admin Panel</div>
      <div className="flex items-center space-x-4">
        <button className="bg-gray-800 text-white px-3 py-2 rounded-md text-sm font-medium">Log out</button>
      </div>
    </div>
  );
};

export default Header;
