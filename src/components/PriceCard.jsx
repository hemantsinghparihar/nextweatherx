'use client'
import React from 'react'
import VectorCard from '../../public/VectorCard.svg'
import tick from '../../public/tick.svg'

const PriceCard = ({height,width,data,mdDisplay}) => {
    
  return (

    <div className={`card ${width} ${height} mt-10 ${mdDisplay} md:block`}>
        <div className='rounded-3xl bg-[#E0A12E] text-white flex flex-col justify-between'>
            <div>
                <h2 className='text-[20px] font-bold text-center'>{data.plan}</h2>
                <h1 className='text-[36px] font-bold text-center'>{data.price}</h1>
            </div>

            <div className='pt-[54px]  flex flex-col gap-5 justify-between' 
                style={{
                    backgroundImage:`url(${VectorCard.src})`,
                    backgroundSize:'contain',
                    backgroundRepeat:'no-repeat',
                    backgroundPosition: 'center top'
                }}
            >
                <div className='services max-w-[194px] mx-auto '>
                    
                    {data?.services?.map((one,index)=>(
                        <p className='text-[12px] font-semibold flex' key={index}><i className="ri-check-fill text-white"></i>{one}</p>
                    ))}
                    {/* <p className='text-[12px] font-semibold flex'><i className="ri-check-fill text-white"></i> Share with up to five partners</p>
                    <p className='text-[12px] font-semibold flex'><i className="ri-check-fill text-white"></i> Weekly and monthly forecasts</p>
                    <p className='text-[12px] font-semibold flex'><i className="ri-check-fill text-white"></i> Customizable themes and widgets</p>
                    <p className='text-[12px] font-semibold flex'><i className="ri-check-fill text-white"></i> Weather groups, stickers, emojis, and gifs</p>
                    <p className='text-[12px] font-semibold flex'><i className="ri-check-fill text-white"></i> Exclusive blog and podcast</p> */}

                </div>

                <div className= ' flex justify-center items-center '>
                    <button className='text-base font-semibold border border-white w-[138px]  rounded-[3px] mb-4 '>SUBSCRIBE</button>
                </div>


            </div>


        </div>
      
    </div>
  )
}

export default PriceCard
