'use client'
import React,{useState} from 'react'
import product from '../../../public/product.svg'
import Image from 'next/image'
import device1 from '../../../public/dev1.svg'
import vector from '../../../public/vector.svg'
import ipad from '../../../public/ipad.svg'
import Iphone2 from '../../../public/iphone2.svg'
import macImg from '../../../public/macImg.svg'
import Button from '@/components/common/Button'
import PriceCard from '@/components/PriceCard'

const shopPage = () => {
    const [isMonthly, setIsMonthly] = useState(false);

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };


    const priceCardData=[
       
        {
            plan:'Free',
            price:'0',
            services:[
                'Basic weather info for your location',
                'Share with one partner',
                'Daily and hourly forecasts',
                'Beautiful and intuitive interface'

            ],
            
        },
        {
            plan:'Couple',
            price:'2.49',
            services:[
                'Advanced weather info for any location',
                'Share with up to five partners',
                'Weekly and monthly forecasts',
                'Customizable themes and widgets',
                'Weather groups, stickers, emojis, and gifs',
                'Exclusive blog and podcast'

            ],

        },
        {
            plan:'Pro',
            price:'4.99',
            services:[
                'Exclusive weather info from our cloud technology',
                'Share with unlimited partners',
                'Personalized forecasts based on your preferences and activities',
                'Weather trends, alerts, and recommendations',
                'Special features and rewards'

            ],

        }
    ]
  return (
    <div>
        <div>
            <section className="hero-sec flex flex-col md:flex-row items-center   md:px-[158px] min-h-[545px] mt-2  ">

                <div className="hero-img w-full md:w-[50%]  pt-6 md:pt-6">
                    <div className="overflow-hidden flex justify-center relative mx-auto">
                        
                        <Image src={product} width={592} height={384} alt='product image'  />
                        
                    </div>

                </div>
                
                <div className="hero-content md:w-[50%]  flex justify-center items-center ">
                    <div className="laptop:max-w-[435px] max-w-[500px]  text-white  felx flex-col items-center">
                        <h2 className="text-6xl font-semibold leading-[70px] text-center">Atoms</h2>
                        
                        <p className="text-[20px] text-[#403B45] font-medium mt-[9px] text-center">A weather app that lets you explore the atmosphere and learn more about the weather phenomena</p>
                        

                        <div className='flex justify-center'>
                            <div className="hero-controlls mt-[9px] max-w-[300px] flex justify-between gap-1">

                                <div className="w-[176px] h-[35px] rounded-[4.49px] text-[16px] bg-[#F5B747] flex justify-center items-center text-[#2B261D] font-medium cursor-pointer hover:bg-transparent hover:text-white hover:border hover:border-[#F5B747]">
                                            Buy Now
                                </div>
                                <div className="w-[174px] flex items-center justify-center rounded-[4.49px] h-[35px] border border-[#F5B747] text-white hover:border-none hover:bg-[#F5B747] hover:text-[#2B261D] ">
                                    {/* <Link href={'/'} className=" text-[18px] font-medium">
                                        Try Now
                                    </Link> */}
                                    <button className=' text-[16px]  font-medium'>Add To Cart</button>
                                </div>


                            </div>
                        </div>

                    </div>

                </div>

               
                
                
            </section>

            <section className='devices  my-8'>
                    

                     <div className="dev-feat max-w-[1170px] mx-auto flex flex-col justify-center items-center gap-2 md:flex-row ">
                    
                        <div className="dev ">
                            <Image src={device1} width={269} height={146} alt='dev1 iphone' />
                        </div>

                        <div className="dev ">
                            <Image src={ipad} width={269} height={146} alt='dev1 iphone' />
                        </div>

                        <div className="dev hidden sm:block   laptop:block ">
                            <Image src={Iphone2} width={269} height={146} alt='dev1 iphone' />
                        </div>

                        <div className="dev hidden  md:hidden laptop:block">
                            <Image src={macImg} width={269} height={146} alt='dev1 iphone' />
                        </div>
                </div>

               
                {/* <Button py={'py-1'} rounded={'rounded-[4.49px]'}  /> */}

                <div className='flex justify-center mt-8'>
                <div className="w-[164px] flex items-center justify-center rounded-[4.49px] h-[35px] border border-[#F5B747] text-white hover:border-none hover:bg-[#F5B747] hover:text-[#2B261D] ">
                                    
                                    <button className=' text-[16px] font-medium'>show all products</button>
                                </div>
                </div>
            </section>


            <section className='plans mt-12'>
                <div className='plans-in laptop:max-w-[745px] mx-auto'>
                    <h1 className='text-[48px] font-semibold text-white text-center'>
                        We offer <span className='text-[#2B261D]'>three plans</span> to suit your needs and budget
                    </h1>
                    <p className='text-[#2B261D] text-2xl font-semibold text-center'> You can switch or cancel your plan at any time</p>

                    <div className='flex gap-2 justify-center mt-6'>
                        <p className='text-base font-normal text-white'>YEARLY BILLING</p>
                        {/* <div className='w-[79px] h-[29px] bg-white rounded-[25px]'>
                            
                        </div> */}
                       <div
                        className={`relative w-14 h-6  bg-white rounded-full flex items-center cursor-pointer ${isMonthly?'bg-green-400':''}`}
                        onClick={handleToggle}
                        >
                        <div
                            className={`absolute w-5 h-5 bg-black rounded-full transition-transform ${
                            isMonthly ? "translate-x-7" : "translate-x-1"
                            }`}
                        ></div>
                        </div>
                        <p className='text-base font-normal text-white'>MONTHLY BILLING</p>
                    </div>

                    <div className="price-cards  flex gap-2 items-center justify-center ">
                        {/* <PriceCard height={'min-h-[400px]'} width={'w-[245px]'} data={priceCardData}/> */}
                        <PriceCard mdDisplay={'hidden'}  height={'min-h-[500px]'} width={'w-[245px]'} data={priceCardData[0]}/>

                        <PriceCard height={'min-h-[500px]'} width={'w-[245px]'} data={priceCardData[1]}/>

                        <PriceCard mdDisplay={'hidden'} height={'min-h-[500px]'} width={'w-[245px]'} data={priceCardData[2]}/>
                        
                    </div>

                </div>
            </section>

        </div>
      
    </div>
  )
}

export default shopPage
