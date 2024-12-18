import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import ProductsList from '../ProductsList/ProductsList'


export default function Home() {

  return (
    <div>
      {/* <slider /> */}
      <ProductsList />
    </div>
  )
}

