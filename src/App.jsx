import React from 'react'

import './App.css'
import Navbar from './components/Navbar'


import Footer from './components/Footer'

import { Outlet } from 'react-router-dom'
import UserContextProvider from './context/UserContextProvider'



function App() {


  return (
  <UserContextProvider>
  <Navbar/>
 <Outlet/>
 <Footer/>
 


  </UserContextProvider>
  )
}

export default App
