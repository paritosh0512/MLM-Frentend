import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import Slider from './components/Slider.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Layout from './Layout.jsx'
import Dashboard from './components/AdminDashboard/Dashboard.jsx'
import AddUnit from './components/AdminDashboard/AddUnit.jsx'
import Categories from './components/AdminDashboard/Categories.jsx'
import Level_Wise_Percentage from './components/AdminDashboard/Level_Wise_Percentage.jsx'
import Distributorsfile from './components/AdminDashboard/Distributorsfile.jsx'
import Ranks from './components/AdminDashboard/Ranks.jsx'
import Products from './components/AdminDashboard/Products.jsx'
import Orders from './components/AdminDashboard/Orders.jsx'
import TotalSale from './components/AdminDashboard/TotalSale.jsx'







let router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path='/' element={<App/>}>
      <Route path='' element={<Slider/>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
 

    </Route>
    <Route path='/admin' element={<Layout/>}>
        <Route path='' element={<Dashboard/>}/>
        <Route path='/admin/addunit' element={<AddUnit/>}/>
        <Route path='/admin/addcategories' element={<Categories/>}/>
        <Route path='/admin/levelwisepercentage' element={<Level_Wise_Percentage/>}/>
        <Route path='/admin/distributors' element={<Distributorsfile/>}/>
        <Route path='/admin/rank' element={<Ranks/>}/>
        <Route path='/admin/products' element={<Products/>}/>
        <Route path='/admin/orders' element={<Orders/>}/>
        <Route path='/admin/totalsale' element={<TotalSale/>}/>
        

    </Route>
   </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
