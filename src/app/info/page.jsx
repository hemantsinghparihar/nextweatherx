'use client'
import React from 'react'
import infoImage from '../../../public/infoImage.png'
import Image from 'next/image'
import mountains from '../../../public/mountains.png'
import Divider from '../../../public/Divider.png'
import fweave from '../../../public/Fweave.svg'
import oneCloud from '../../../public/oneCloud.svg'
import cloudCheck from '../../../public/cloudCheck.svg'
import cycle from '../../../public/Layer_1.png'
import layout from '../../../public/Layout.svg'
import bell from '../../../public/bell.svg'


const infoPage = () => {
    const companyData = [
        {
          feature: "Cloud Technology",
          juniper: "Cloud technology for reliable forecasts",
          other: "Other apps use outdated data sources",
        },
        {
          feature: "Simple Interface",
          juniper: "Simple and intuitive interface",
          other: "Other apps have cluttered designs",
        },
        {
          feature: "10-Day Forecast",
          juniper: "10-day forecast with hourly updates",
          other: "Other apps offer 7-day forecast or less",
        },
        {
          feature: "Weather Alerts",
          juniper: "Severe weather alerts and notifications",
          other: "Other apps do not warn you of hazards",
        },
        {
          feature: "Air Quality Data",
          juniper: "Air quality information and maps",
          other: "Other apps do not include air quality data",
        },
        {
          feature: "Weather Maps",
          juniper: "Temperature and precipitation maps",
          other: "Other apps do not show global patterns",
        },
        {
          feature: "Affordable Price",
          juniper: "Inexpensive and affordable",
          other: "Other apps charge premium prices or fees",
        },
      ];


  return (
    <div>
        <div>
            <section className='hero-sec max-w-[1206px] max-h-[738px]  mx-auto'>
                <div className="info-hero-img ">
                    <Image src={infoImage} alt='info-img' width={1050} height={680} className='mx-auto'/>
                </div>

            </section>
            <section 
            style={{
                backgroundImage: `url(${mountains.src})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}
             className='mountains-bg max-h-[333px] pt-[150px] md:pt-[200px] laptop:pt-[300px] '>

            </section>

            <section className='other-companies flex justify-center my-4 pb-4 '>
                <div className='comparison-table  max-w-[957px] laptop:max-h-[502px] py-6 px-2 rounded-lg text-white font-sans'>
                    <div className="table-header text-white ">
                        <div className='header-col'>

                        </div>
                        <div className='header-col text-2xl' >
                            JUNIPER
                        </div>
                        <div className="header-col text-2xl">Other Company</div>
                    </div>

                    {companyData.map((row, index) => (
                        <div
                        key={index}
                        className={`grid grid-cols-3 gap-4 py-1 laptop:py-2    ${
                        index === 0 ? "border-t-0" : ""
                        } ${index % 2 === 0 ? "bg-[#E0A12E]" : ''}`}
                        >
       
                        <div className=" col-span-1 text-[16px] laptop:text-[20px] font-medium">{row.feature}</div>

                        <div className="col-span-1 text-[#45423B] text-[13px] 
                        laptop:text-[16px] font-normal">{row.juniper}</div>
                        
                        <div className="col-span-1 text-[#45423B] text-[13px] 
                        laptop:text-[16px] font-normal ">{row.other}</div>
                        </div>
                    ))}



                </div>

            </section>

            <div className='download-btn flex justify-center items-center py-4'>
                <button className='border rounded-[10px] border-[#F5B747] text-white text-xl   font-medium py-[2px] px-6 hover:border-none hover:bg-[#F5B747] hover:text-[#2B261D]'>
                    Download
                </button>

            </div>



            <section className='specs-cloud'>
                <div 
                className='pt-52 sm:pt-40  laptop:pt-20 '
                style={{
                    backgroundImage:`url(${fweave.src})`,
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                  

                }}>
                    {/* clouds heading ========================== */}
                    <div className=' max-w-[1170px] mx-auto '>
                        <h1 className='text-2xl font-medium px-2 border-l-2 text-white'>Spec's Cloud</h1>
                    </div>

                    {/* clouds===========/////////////////////==== */}

                    <div className="clouds min-h-[400px] max-w-[1170px] mx-auto  flex flex-wrap  md:flex-row justify-center ">
                        
                        {/* single column=============================== */}

                        <div className=' flex laptop:flex-1 h-full '>

                            <div 
                                className='w-[245px] h-[230px]  flex flex-col items-center  p-4 ' 
                                style={{
                                    backgroundImage:`url(${oneCloud.src})`,
                                    backgroundSize:'cover',
                                    backgroundRepeat:'no-repeat'
                                }}
                            >
                                <Image src={cloudCheck} width={65} height={65} alt='cloud check' />
                                <p className='text-[15px] font-medium text-center text-white'>Accurate and reliable weather forecasts powered by cloud computing</p>


                            </div>

                        </div>

                        <div className=' flex laptop:flex-1 flex-col  laptop:justify-end laptop:h-[400px]  '>
                            <div 
                                className='w-[245px] h-[230px]  flex flex-col items-center  p-4 ' 
                                style={{
                                    backgroundImage:`url(${oneCloud.src})`,
                                    backgroundSize:'cover',
                                    backgroundRepeat:'no-repeat'
                                }}
                            >
                                <Image src={cycle} width={65} height={65} alt='cloud check' />
                                <p className='text-[15px] font-medium text-center text-white'>Compatible with various devices and platforms, including smart home systems</p>


                            </div>

                        </div>

                        <div className=' flex laptop:flex-1 h-full'>
                            <div 
                                className='w-[245px] h-[230px]  flex flex-col items-center  p-4' 
                                style={{
                                    backgroundImage:`url(${oneCloud.src})`,
                                    backgroundSize:'cover',
                                    backgroundRepeat:'no-repeat'
                                }}
                            >
                                <Image src={layout} width={65} height={65} alt='cloud check' />
                                <p className='text-[15px] font-medium text-center text-white'>Interactive and user-friendly interface with stunning graphics and animations</p>


                            </div>

                        </div>

                        <div className=' flex  laptop:flex-1 flex-col  laptop:justify-end laptop:h-[400px]  '>
                            <div 
                                className='w-[245px] h-[230px]  flex flex-col items-center  p-4 ' 
                                style={{
                                    backgroundImage:`url(${oneCloud.src})`,
                                    backgroundSize:'cover',
                                    backgroundRepeat:'no-repeat'
                                }}
                            >
                                <Image src={bell} width={65} height={65} alt='cloud check' />
                                <p className='text-[15px] font-medium text-center text-white'>Customizable alerts and notifications for different weather conditions</p>


                            </div>

                        </div>

                    </div>

                  

                </div>

            </section>

        </div>
      
    </div>
  )
}

export default infoPage
