import React from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <nav className='bg-gray-100 lg:fixed top-0 left-0 right-0 header px-5'>
        <div className="container text-center flex flex-col lg:flex-row justify-between items-center capitalize py-3">
          <div className='flex flex-col lg:flex-row'>
            <img src={logo} width={115} className='me-3' alt='FreshCart Logo'/>
            <ul className='flex flex-col lg:flex-row'>
              <li className='mx-2'><NavLink className='text-gray-600' to=''>home</NavLink></li>
              <li className='mx-2'><NavLink className='text-gray-600' to='products'>products</NavLink></li>
              <li className='mx-2'><NavLink className='text-gray-600' to='cart'>cart</NavLink></li>
              <li className='mx-2'><NavLink className='text-gray-600' to='categories'>categories</NavLink></li>
              <li className='mx-2'><NavLink className='text-gray-600' to='contact'>contact us</NavLink></li>
            </ul>
          </div>
          <div className='flex flex-col lg:flex-row'>
            <ul className='flex flex-col lg:flex-row'>
              <li className='mx-2 space-x-3'>
                <i className='fab fa-facebook-f cursor-pointer'></i>
                <i className='fab fa-instagram cursor-pointer'></i>
                <i className='fab fa-twitter cursor-pointer'></i>
                <i className='fab fa-youtube cursor-pointer'></i>
              </li>              
              <li className='mx-2'><NavLink className='text-gray-600' to='register'>register</NavLink></li>
              <li className='mx-2'><NavLink className='text-gray-600' to='login'>login</NavLink></li>
              <li className='mx-2 cursor-pointer'>logout</li>

            </ul>
          </div>          
        </div>
      </nav>
    </>
  )
}

