'use client'
import React from 'react'
import Slider from "react-slick";
import Image from 'next/image'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import priyanka from "../../public/priyanka.svg"
import jack from "../../public/jack.svg"

const FeedbackCarousel = () => {
    
    const settings = {
        dots: true,        // Show navigation dots
        infinite: true,    // Infinite loop
        speed: 500,        // Transition speed
        slidesToShow: 1,   // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll at once
        rtl: true          // Enable right-to-left direction
      };

  return (
    <div className='max-w-[380px] md:max-w-[412px]  '>
  
    <Slider {...settings}>
      <div className=' md:w-[311px] max-h-[220px] rounded-[11.52px] border text-white bg-[#403B45]  px-2  md:px-4 py-1'>
        <p className='text-[16px] font-normal  '>Juniper is a great app for checking the weather. It's easy to use and has a beautiful interface. I love how it shows me the cloud patterns and predicts the weather for the next few days. It's like having a personal meteorologist in my pocket.</p>
        <h3 className='flex my-1'><Image src={priyanka} width={48} height={48} alt='user'/> <span className='ml-1 text-[24px] font-medium'>Priyanka</span></h3>
        <p className='text-[#919191] text-[12px]'>Happy Customer</p>
      </div>

       <div className='w-[311px] max-h-[220px] rounded-[11.52px] border text-white bg-[#403B45] px-4 py-1'>
        <p className='text-[16px] font-normal  '>Juniper is a great app for checking the weather. It's easy to use and has a beautiful interface. I love how it shows me the cloud patterns and predicts the weather for the next few days. It's like having a personal meteorologist in my pocket.</p>
        <h3 className='flex my-1'><Image src={priyanka} width={48} height={48} alt='user'/> <span className='ml-1 text-[24px] font-medium'>Priyanka</span></h3>
        <p className='text-[#919191] text-[12px]'>Happy Customer</p>
      </div>

      <div className='w-[311px] max-h-[220px] rounded-[11.52px] border text-white bg-[#403B45] px-4 py-1'>
        <p className='text-[16px] font-normal  '>Juniper is a great app for checking the weather. It's easy to use and has a beautiful interface. I love how it shows me the cloud patterns and predicts the weather for the next few days. It's like having a personal meteorologist in my pocket.</p>
        <h3 className='flex my-1'><Image src={priyanka} width={48} height={48} alt='user'/> <span className='ml-1 text-[24px] font-medium'>Priyanka</span></h3>
        <p className='text-[#919191] text-[12px]'>Happy Customer</p>
      </div>
    </Slider>
  </div>
  )
}

export default FeedbackCarousel
