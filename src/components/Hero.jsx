import React from 'react'
import HeroImage from '../assets/heroImage.jpeg'
import sparkle from '../assets/sparkle.jpeg'
import rocket from '../assets/rocket.jpg'
import carousel from '../assets/carousel.jpeg'
import { FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";





const Hero = () => {
    return (
        <div className='flex justify-center items-center w-[1440px] h-[1044px] flex-col relative z-10'>
            <div className='w-[1233px] h-[886px] justify-center mt-[79px]'>

                <div className='flex justify-center items-center flex-col'>
                    <div className='w-[197px] h-[28px] flex justify-center items-center font-bcd text-[33px] font-medium text-[#2DA950]'>
                        <h3>Success Stories</h3>
                    </div>
                    <div className='flex flex-col text-[56px] justify-center items-center font-abc font-medium'>
                        <div className=''>
                            <h1 className=''>Every success journey</h1>
                        </div>
                        <div>
                            <h1>we've encountered.</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-around w-[1440px] bottom-[80px] relative'>
                <div className='w-[727.49px] h-[596px]'>
                    <img src={HeroImage} alt="" className='w-[506.98px] h-[546.27px] rounded-3xl ml-[206.69px] z-0 absolute' />
                    <div className='w-[267.82px] h-[239px] rounded-[27.11px] border p-[30px] relative bg-white shadow-lg flex-col top-[115px] left-[62px]'>

                        <div className='flex justify-start w-[121px] h-[77px] text-[64px] font-[500]'>
                            40%
                        </div>
                        <div className='h-[auto] pt-6 font-abc text-[#828282] leading-[23.4px]'>
                            Achieved reduction in project execution time by optimising team availability
                        </div>
                        <div className='relative bottom-[220px] right-[35px] '>

                            <img src={sparkle} alt="" />
                        </div>

                    </div>

                    <div className='w-[290.49px] h-[239px] rounded-[27.11px] border border-[#002E18] p-[35px] relative bg-[#002E18] shadow-lg flex-col top-[115px] left-[499px] text-white flex '>
                        <div className='flex flex-row'>
                            <div className='font-[500] text-[63.37px] w-[119px] h-[76px] mr-2 font-cde'>
                                $0.5
                            </div>
                            <div className='flex items-end font-[500] text-[22.81px] text-[#A6A3A0] relative font-cde'>
                                MILLION
                            </div>
                        </div>
                        <div className='h-[auto] pt-6 font-abc text-[#828282] leading-[23.4px]'>
                            Reduced client expenses by saving on hiring and employee costs.
                        </div>
                    </div>
                    <div className='w-[245px] h-[88px] rounded-[111.54px] border  relative bg-white shadow-lg flex-row bottom-14 left-[148.19px] py-[16px] pl-[16px] pr-[32px]'>
                        <div className='flex flex-row justify-between items-center'>

                            <div className=''>
                                <img src={rocket} alt="" className='size-[55px]' />
                            </div>
                            <div className='flex flex-col gap-[2px]'>
                                <div className='w-[92px] h-[33px] font-abc text-[24px] font-[700]'>
                                    10 DAYS
                                </div>
                                <div className='w-[131px] h-[21px] font-abc font-[500] text-[16px] text-[#828282]'>
                                    Staff Deployment
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='flex flex-col'>
                    <div className='w-[398px] h-[192px] font-abc font-[600] text-[35px] bottom-[100px] relative leading-10'>
                        <h2>Enhance fortune 50 company's insights team research capabilities</h2>
                    </div>
                    <div className='relative bottom-[60px] flex-row flex  gap-3 text-[20px] text-gray-300'>
                        <GoDotFill />
                        <GoDotFill />
                        <GoDotFill />
                    </div>
                    <button className='relative top-[100px] w-[245px] h-[88px] flex-nowrap py-[31px] px-[40px] bg-black  rounded-[100px] flex justify-center items-center hover:bg-[#4E4E4E] text-white'>


                        <div className='font-abc font-[600] text-[20px] '>
                            Explore More
                        </div>

                        <div className='ml-4 w-[24px] h-[18px] text-[20px]'>
                            <FaArrowRight />
                        </div>


                    </button>
                </div>
            </div>

        </div >
    )
}

export default Hero