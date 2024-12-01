import Image from "next/image";
import weatherImg from '../../assets/flying-iphone.png'
import WeatherWidget from '../../assets/Weather_Widget.png'
import Link from "next/link";
import iphone from "../../../public/ipone.svg"
import weaveBg from "../../../public/weave1.png"
import explore from "../../../public/Explore.svg"
import heart from "../../../public/Heart.svg"
import gallary from "../../../public/Image.svg"
import notification from "../../../public/notification.png"
import line from "../../../public/Line.svg"
import group from "../../../public/Group.svg"
import group2 from "../../../public/Group2.svg"
import cloud from "../../../public/cloud.png"
import cloud2 from "../../../public/cloud.png"
import FeedbackCarousel from "@/components/FeedbackCarousel";
import Fweave from "../../../public/Fweave.svg"
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div className="min-h-[100vh] ">
       <div>
            <section className="hero-sec flex flex-col md:flex-row items-center   md:px-[158px] min-h-[545px] mt-2  ">
                <div className="hero-content w-[50%]  flex justify-center items-center">
                    <div className="max-w-[435px]  text-white felx flex-col items-center">
                        <h2 className="text-[80px] font-semibold leading-[70px] ">Your Live Forecaster</h2>
                        
                        <p className="text-[20px] font-medium mt-[9px]">Together We Forecast: Building Dreams, One Day at a Time!</p>
                        <p className="text-[#2B261D] text-[16px] font-medium mt-[9px]">1million People like you have purchased this product!</p>

                        <div className="hero-controlls mt-[9px] max-w-[300px] flex justify-between">
                            
                                <div className="w-[114px] flex items-center justify-center rounded-[4.49px] h-[35px] bg-[#2B261D]">
                                    <Link href={'/'} className=" text-[18px] font-medium">
                                        Try Now
                                    </Link>
                                </div>
                                <div className="w-[176px] h-[35px] rounded-[4.49px] text-[16px] bg-[#F5B747] flex justify-center items-center text-[#2B261D]">
                                     FREE TILL 15JUN2025
                                </div>
                            
                        </div>

                    </div>

                </div>
                <div className="hero-img w-full md:w-[50%] order-1 md:order-2 pt-6 md:pt-12">
                    <div className="overflow-hidden flex justify-center relative mx-auto">
                        
                        
                        <Image src={iphone} width={580} height={457} alt="flying iphone" />
                    </div>

                </div>
                
            </section>

            {/* <section className="hero-sec flex flex-col-reverse md:flex-row items-center px-4 md:px-[158px] min-h-[545px] mt-2">
            
            <div className="hero-img w-full md:w-[50%] order-1 md:order-2 pt-6 md:pt-12">
                <div className="w-[300px] md:w-[580px] h-[240px] md:h-[457px] overflow-hidden flex justify-center relative mx-auto">
                
                <Image src={iphone} fill={true} alt="flying iphone" />
                </div>
            </div>

            
            <div className="hero-content w-full md:w-[50%] order-2 md:order-1 flex justify-center items-center">
                <div className="max-w-[435px] text-white text-center md:text-left">
                <h2 className="text-[40px] md:text-[80px] font-semibold leading-[50px] md:leading-[70px]">
                    Your Live Forecaster
                </h2>
                <p className="text-[16px] md:text-[20px] font-medium mt-2 md:mt-[9px]">
                    Together We Forecast: Building Dreams, One Day at a Time!
                </p>
                <p className="text-[#2B261D] text-[14px] md:text-[16px] font-medium mt-2 md:mt-[9px]">
                    1 million People like you have purchased this product!
                </p>
                <div className="hero-controls mt-4 md:mt-[9px] max-w-[300px] flex flex-col md:flex-row justify-center md:justify-between gap-2 md:gap-0">
                    <div className="w-full md:w-[114px] flex items-center justify-center rounded-[4.49px] h-[35px] bg-[#2B261D]">
                    <Link href="/" className="text-[16px] md:text-[18px] font-medium">
                        Try Now
                    </Link>
                    </div>
                    <div className="w-full md:w-[176px] h-[35px] rounded-[4.49px] text-[14px] md:text-[16px] bg-[#F5B747] flex justify-center items-center text-[#2B261D]">
                    FREE TILL 15JUN2025
                    </div>
                </div>
                </div>
            </div>
            </section> */}

            <section className="features bg-[#D2982D] py-8">
                <div 
                    className="weavy-div min-h-[264px] flex items-center justify-center px-4" 
                    style={{
                    backgroundImage: `url(${weaveBg.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                >
                    <div className="max-w-[1125px] w-full flex flex-wrap gap-4 justify-center text-white">
                    
                    {/* Feature 1 */}
                    <div className="w-full md:w-[30%] text-center md:text-left">
                        <h1 className="flex items-center justify-center md:justify-start text-[24px] font-medium mb-2">
                        <Image src={explore} width={48} height={48} alt="explore" />
                        <span className="ml-2">Personalized</span>
                        </h1>
                        <p className="text-[16px] font-normal">
                        A personalized weather report that shows the best time and place for couples to enjoy outdoor activities based on their preferences and location.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="w-full md:w-[30%] text-center md:text-left">
                        <h1 className="flex items-center justify-center md:justify-start text-[24px] font-medium mb-2">
                        <Image src={gallary} width={48} height={48} alt="gallery" />
                        <span className="ml-2">Gallery</span>
                        </h1>
                        <p className="text-[16px] font-normal">
                        A cloud gallery that allows users to upload and share their photos and videos of the sky and the weather with other users and get feedback and tips.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="w-full md:w-[30%] text-center md:text-left">
                        <h1 className="flex items-center justify-center md:justify-start text-[24px] font-medium mb-2">
                        <Image src={heart} width={48} height={48} alt="mood tracker" />
                        <span className="ml-2">Mood Tracker</span>
                        </h1>
                        <p className="text-[16px] font-normal">
                        A mood tracker that analyzes the user’s mood based on the weather and suggests activities, music, or quotes to cheer them up or calm them down.
                        </p>
                    </div>

                    </div>
                </div>
            </section>



            {/* <section className="features bg-[#D2982D]  ">
                <div className="weavy-div min-h-[264px]  flex items-center justify-center" style={{
                    backgroundImage: `url(${weaveBg.src})`,
                }}>
                    <div className="max-w-[1125px] max-h-[123px] flex gap-[2px]  text-white">
                        <div className="w-[371px] h-[123px] ">
                            <h1 className="flex items-center text-white text-[24px] font-medium"><Image src={explore} width={48} height={48} alt="explore"/> Personalized</h1>
                            <p className="text-[16px] font-normal">A personalized weather report that shows the best time and place for couples to enjoy outdoor activities based on their preferences and location.</p>

                        </div>
                        <div className="w-[371px] h-[123px]">
                            <h1 className="flex items-center text-white text-[24px] font-medium "><Image src={gallary} width={48} height={48} alt="explore"/>Gallery</h1>
                            <p className="text-[16px] font-normal">A cloud gallery that allows users to upload and share their photos and videos of the sky and the weather with other users and get feedback and tips.</p>

                        </div>
                        <div className="w-[371px] h-[123px]">
                            <h1 className="flex items-center text-white text-[24px] font-medium"><Image src={heart} width={48} height={48} alt="explore"/> Mood Tracker</h1>
                            <p className="text-[16px] font-normal">A mood tracker that analyzes the user’s mood based on the weather and suggests activities, music, or quotes to cheer them up or calm them down.</p>

                        </div>
                       
                    </div>
                </div>


            </section> */}

            <section className="notification  hidden laptop:block my-4">
                <div className="flex items-center justify-between max-w-[970px]  mx-auto">
                    <div className="w-50% ">
                        <div className="relative">
                            <Image  src={notification} width={430} height={436} alt="notification image"/>
                            <Image src={line} width={150} height={10} alt="arrow" className="absolute top-[30%] right-[-70px]" />

                        </div>
                        

                    </div>
                    <div className="">
                        <div className="max-w-[460px] max-h-[290px]">
                            <h3 className="text-[48px] font-semibold text-white leading-[55px]">Plan Your Outdoor Activities with Ease</h3>
                            <h5 className="text-[#2B261D] text-[32px] font-medium">Get notified before rain stops. Plan your outdoor activities</h5>

                            <p className="flex gap-1"><Image src={group} width={20} height={20}  alt="tick"/> <span className="text-white">Share your weather stories and photos</span>.</p>
                            <p className="flex gap-1"><Image src={group2} width={20} height={20}  alt="tick"/> <span className="text-[#403B45]">Custom weather alerts and notifications.</span>.</p>
                            <p className="flex gap-1"><Image src={group2} width={20} height={20}  alt="tick"/> <span className="text-[#403B45]">Smart weather integrations for your home.</span>.</p>

                        </div>
                    </div>
                </div>

            </section>

            <section className="feedback py-4   ">

                <div  className="min-h-[450px] flex items-center justify-center w-full  pt-20" style={{
                    backgroundImage: `url(${cloud2.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    
                }}>
                    <div className="carousels   flex gap-[66px] max-w-[1300px] ">
                        <div className="hidden md:block">
                            <FeedbackCarousel/>
                        </div>

                        <div>
                            <FeedbackCarousel/>
                        </div>

                    </div>

                </div>

            </section>

  


            <section className="faq my-6">
                <Faq/>
            </section>

            <section className="tag-line mt-14 md:mt-10">
                <div className="w-full md:w-[620px] laptop:w-[745px] md:max-h-[229px]  mx-auto flex flex-col justify-between gap-2 ">
                    <p className="text-2xl font-semibold text-center text-[#FFC355]">
                         Experience the weather like never before
                    </p>

                    <h5 className="text-[36px] font-semibold text-white p-4 text-center leading-[40px]">The Only Weather App You Need to Stay Connected with Nature and Each Other</h5>

                    <button className="bg-[#2B261D] text-white font-medium py-1 px-4 rounded-[10px] mx-auto block mb-4 text-[20px] ">
                        Download Now
                    </button>

                    
                </div>
            </section>


       </div>
    </div>
  );
}
