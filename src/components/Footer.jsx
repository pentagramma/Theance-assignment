import React from 'react'
import { LuCopyright } from "react-icons/lu";


const Footer = () => {
    return (
        <div className='w-full h-[180px] flex justify-center items-center'>
            <div className='w-[1376px] h-[144px] bg-[#F5F5F5] rounded-[40px] flex items-center justify-between flex-row'>
                <div className='flex flex-row w-[50%] pl-10'>
                    <div className='relative top-[5px] mr-2 text-[18px] font-abc font-[500]'>
                        <LuCopyright />
                    </div>
                    <div className='font-abc font-[500] text-[18px] cursor-pointer'>
                        Talup 2023, All rights reserved
                    </div>

                </div>
                <div className='flex flex-row font-abc font-[400] text-[18px]'>
                    <div className='pr-10 cursor-pointer hover:text-gray-400'>
                        Terms
                        & Conditions
                    </div>
                    <div className='pr-10 cursor-pointer hover:text-gray-400'>
                        Privacy Policy
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
