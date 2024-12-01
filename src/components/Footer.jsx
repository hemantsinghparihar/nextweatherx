'use client'
import React from 'react'
import Fweave from "../../public/Fweave.svg"

const Footer = () => {
  return (
    <div className='   '>
        <div className='clouds'>

        </div>
        
        <div className='mt-10 pt-12 flex justify-center'
        style={{
                    backgroundImage: `url(${Fweave.src})`,
                    backgroundRepeat:'no-repeat'
                }}
        >

            <div className=' max-w-[825px]  laptop:max-w-[1125px] min-h-[266px] '>
                <div className='upper-footer min-h-[168px] flex gap-4  flex-wrap laptop:justify-between border-b px-4 py-2 md:py-2  '>
                    <div className='text-white flex flex-row sm:flex-col  laptop:flex-row gap-1 '>
                        <i className="ri-twitter-x-line"></i>
                        <i className="ri-facebook-fill"></i>
                        <i className="ri-instagram-fill"></i>
                    </div>

                    <div className='flex flex-wrap laptop:justify-evenly gap-10'>
                        <div className=''>
                            <h3 className='text-2xl text-white font-medium'>Pages</h3>
                            <h5 className='text-xl text-white font-normal'>Home</h5>
                            <p className='text-[#F5B747] font-medium'>Info</p>
                            <p className='text-[#F5B747] font-medium'>Shop</p>
                            <p className='text-[#F5B747] font-medium'>TOS</p>

                        </div>

                        <div className=''>
                            <h3 className='text-2xl text-white font-medium'>Platform</h3>
                            <h5 className='text-xl text-white font-normal'>Android</h5>
                            <p className='text-[#F5B747] font-medium' >IOS</p>
                            <p className='text-[#F5B747] font-medium'>Windows</p>
                            <p className='text-[#F5B747] font-medium'>Mac Os</p>

                        </div>

                        <div className=''>
                            <h3 className='text-2xl text-white font-medium'>Support</h3>
                            <h5 className='text-xl text-white font-normal'>Support request</h5>
                            <p className='text-[#F5B747] font-medium'>Contact Us</p>
                         

                        </div>

                        <div className=''>
                            <h3 className='text-2xl text-white font-medium'>Subscribe</h3>
                            <div className='text-[14px] font-medium text-white p-1 bg-[#E0A12E]'>
                                Enter Your Email
                                <i className="ri-telegram-2-fill "></i>
                             </div>
                             <p className='max-w-[217px] text-[14px] font-regular text-[#F5B747] font-medium'>Join our newsletter to stay up to date on features and releases</p>
                            

                        </div>
                    </div>

                </div>
                <div className='lower-footer flex items-center justify-between pt-1 mb-2'>
                    <h1 className='font-bold text-[20px] text-white'>Juniper</h1>
                   <div className='h-[100%]  '>
                        <div className='text-[14px] font-medium w-[175px] h-[36px] flex justify-center items-center border rounded-[4.77px] text-white '>
                                Get Now

                        </div>
                   </div>

                </div>


            </div>

        
        </div>

    </div>
  )
}

export default Footer
