import React from 'react'
import style from './Product.module.css';



export default function Product({ product }) {

  return (

    <div className=" product mb-6 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow   dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img className="product-img w-full md:h-full rounded-t-lg md:rounded-none md:rounded-s-lg" src={product.image} alt=""/>
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 line-clamp-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
            <p className="mb-3 line-clamp-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
            <div className='flex justify-between'>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">product details</button>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Add to cart</button>
            </div>
        </div>

    </div>
  )
}

