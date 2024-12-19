import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import ProductsList from '../ProductsList/ProductsList'
import Slider from '../Slider/Slider.jsx'


export default function Home() {

  return (
    <div>
      <Slider />
      <ProductsList />
    </div>
  )
}

