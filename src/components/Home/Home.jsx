import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import ProductsList from '../ProductsList/ProductsList'
import Carousel from '../Carousel/Carousel.jsx'


export default function Home() {

  return (
    <>
      <Carousel />
      <ProductsList />
    </>
  )
}

