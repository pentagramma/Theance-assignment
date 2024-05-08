import React, { useState } from 'react';
import logo from '../assets/logo.jpeg';
import { IoMdClose } from 'react-icons/io';
import { MdErrorOutline } from 'react-icons/md';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        if (!email.includes('.com')) {
            // Invalid email format
            return;
        }
        // Handle form submission logic here
    };

    return (
        <div className='w-screen h-screen flex justify-center items-center flex-col'>
            <div className='w-[90%] h-[20%]  flex justify-between items-center flex-row'>
                <div>
                    <img src={logo} alt='' className='w[127.94px] h-[47.39px]' />
                </div>
                <div className='w-[64px] h-[64px] p-5 rounded-full flex justify-center items-center border'>
                    <button>
                        <IoMdClose className='w-[32px] h-[32px]' />
                    </button>
                </div>
            </div>
            <div className='w-[588px] h-[539px] flex flex-col justify-center items-center'>
                <div className='w-[588px] h-[178px] flex justify-center items-center flex-col leading-[39.6px]'>
                    <h1 className='font-bcd text-[#2DA950] font-[400] text-[36px]'>Registration Form</h1>
                    <h1 className='font font-abc font-[600] text-[56px] leading-[67.2px] flex '>Start your success</h1>
                    <h1 className='font font-abc font-[600] text-[56px] leading-[67.2px] flex '>Journey here!</h1>
                </div>
                <div className='pt-[60px] w-full flex-1 flex justify-center items-center'>
                    <form onSubmit={handleSubmit}>
                        <div className='w-[417px] bg-white h-[298.22px] flex-col justify-center items-center'>
                            <div className='w-[417px] h-[174px] flex flex-col justify-center items-center'>
                                <input
                                    type='text'
                                    placeholder='Enter your name'
                                    className='bg-[#EFEFEF] w-[417px] h-[75px] rounded-full py-[24px] px-[36px] font-abc font-[500] text-[20px] text-[#827A7A] mb-3'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type='text'
                                    placeholder='Enter your email'
                                    className='bg-[#EFEFEF] w-[417px] h-[75px] rounded-full py-[24px] px-[36px] font-abc font-[500] text-[20px] text-[#827A7A] mb-3'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {submitted && !email.includes('.com') && (
                                    <div className='error w-[417px] flex-1 flex-row items-center justify-start flex text-[#FF0808]'>
                                        <h1 className='mr-2 '>
                                            <MdErrorOutline />
                                        </h1>
                                        <h1 className='font-abc font-[500] text-[16px]'>Enter a valid email address</h1>
                                    </div>
                                )}
                            </div>
                            <div className='flex justify-center items-center pt-5'>
                                <button
                                    type='submit'
                                    className='py-[26.11px] px-[49.61px] w-[417px] h-[77.22px] bg-[#C9C9C9] mt-2 rounded-full text-white font-abc font-[600] text-[18px] hover:bg-black hover:scale-105 duration-150'
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
