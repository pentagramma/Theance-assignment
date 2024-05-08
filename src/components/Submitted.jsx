import React from 'react'
import logo from '../assets/logo.jpeg';

import { FaCircleCheck } from "react-icons/fa6";


const Submitted = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center flex-col'>
            <div className='w-[90%] h-[20%]  flex justify-between items-center flex-row'>
                <div>
                    <img src={logo} alt='' className='w[127.94px] h-[47.39px]' />
                </div>

            </div>
            <div className='flex justify-center items-center flex-col'>

                <div className='w-[80px] h-[80px]'>
                    <FaCircleCheck className='text-[#28B246] text-[75px]' />


                </div>
                <div className='pt-8 justify-center items-center flex flex-col'>
                    <h1 className='leading-[39.6px] font-bcd font-[400] text-[36px] text-[#2DA950]'>Successfully Submitted
                    </h1>
                    <h1 className='font-abc font-[600] text-[56px] leading-[67.2px] pt-8'>
                        Congratulations
                    </h1>
                    <p className='w-[718px] h-[105px] font-abc font-[500] text-[27px] flex-col justify-center items-center leading-[35.1px] pt-8 text-center text-[#727272]'>
                        Your request has been successfully submitted to us. We will validate your information and reach out to you shortly with updates
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Submitted