import React, { useState } from 'react';
import Sidebar from './components/AdminDashboard/Sidebar';
import Header from './components/AdminDashboard/Header';
// import Dashboard from './components/AdminDashboard/Dashboard';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <Sidebar isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
