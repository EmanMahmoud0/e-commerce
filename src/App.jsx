import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import ProductsList from './components/ProductsList/ProductsList.jsx'
import Productdetails from './components/Productdetails/Productdetails.jsx'
import Contact from './components/Contact/Contact.jsx'
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx'
import Categories from './components/Categories/Categories.jsx'
import Cart from './components/Cart/Cart.jsx'

const routers = createBrowserRouter([
  {path:'' , element: <Layout/> , children:[
    {index: true , element: <Home/>},
    {path:'login' , element: <Login/>},
    {path:'register' , element: <Register/>},
    {path:'products' , element: <ProductsList/>},
    {path:'productdetails' , element: <Productdetails/>},
    {path:'contact' , element: <Contact/>},
    {path:'notfoundpage' , element: <NotFoundPage/>},
    {path:'categories' , element: <Categories/>},
    {path:'cart' , element: <Cart/>},
    {path:'categories' , element: <Categories/>},
  ]}
])
function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

export default App
