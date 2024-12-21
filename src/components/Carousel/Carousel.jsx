import React from 'react'
import Slider from "react-slick";
import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.jpg'
import img3 from '../../assets/images/3.jpg'
import img4 from '../../assets/images/4.jpg'
import img5 from '../../assets/images/5.jpeg'
import img6 from '../../assets/images/6.jpeg'

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };
  return (
    <Slider {...settings} className="">
    <div>
      <img src={img1} className='w-full rounded-md h-[200px] lg:h-[800px]' alt='Image'/>
    </div>
    <div>
    <img src={img2} className='w-full rounded-md h-[200px] lg:h-[800px]' alt='Image'/>
    </div>
    <div>
    <img src={img3} className='w-full rounded-md h-[200px] lg:h-[800px]' alt='Image'/>
    </div>
    <div>
    <img src={img4} className='w-full rounded-md h-[200px] lg:h-[800px]' alt='Image'/>
    </div>
    <div>
    <img src={img5} className='w-full rounded-md h-[200px] lg:h-[800px]' alt='Image'/>
    </div>
    <div>
    <img src={img6} className='w-full rounded-md h-[200px] lg:h-[800px]' alt='Image'/>
    </div>
  </Slider>
);
}
