import React, { useState } from 'react';
import AccordianImage from '../assets/accordianImage.jpeg';
import { BsPlus, BsDash } from 'react-icons/bs';

const Questions = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
    };

    // Array of objects containing accordion data
    const accordionData = [
        {
            title: 'Do you offer freelancers?',
            content: 'Dummy text for accordion 1.',
        },
        {
            title: 'What\'s the guarantee that I will be satisfied with the hired talent?',
            content: 'Dummy text for accordion 2.',
        },
        {
            title: 'Can I hire multiple talents at once?',
            content: 'If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering meditation. Review policies, seek collaborative solutions for resolution.',
        },
        {
            title: 'Why should I not go to an agency directly?',
            content: 'Dummy text for accordion 4.',
        },
        {
            title: 'Who can help me pick a right skillset and duration for me?',
            content: 'Dummy text for accordion 5.',
        },
    ];


    return (
        <div className='flex justify-center items-center h-[813px] w-full relative top-10'>
            <div className='w-[1376px] h-[700px] bg-[#E8EEE7] rounded-[40px] p-[65px] flex flex-row justify-between'>
                <div>
                    <div>
                        <div className='font-bcd w-[215px] h-[25px] font-[400] text-[30px] text-[#9E9D9D]'>
                            What's on your mind
                        </div>
                        <div className='w-[405px] h-[66px] font-abc font-[600] text-[55px] pt-2'>
                            Ask Questions
                        </div>
                    </div>
                    <div className='relative top-[80px] right-[65px]'>
                        <img src={AccordianImage} alt="" />
                    </div>
                </div>
                <div className='w-[581px] h-[538px] font-abc font-[600] text-[20px] leading-[66px] relative top-16 flex flex-col'>
                    {accordionData.map((accordion, index) => (
                        <div key={index} className={`flex flex-col mb-4 border-b-2 border-[#D7D7D7] pb-6 ${openAccordion === index ? 'border-[#FFA500]' : ''}`}>
                            <div className='flex flex-row items-center justify-between cursor-pointer' onClick={() => toggleAccordion(index)}>
                                <div className='leading-[28px] w-[75%]'>
                                    {accordion.title}
                                </div>
                                <div>
                                    {openAccordion === index ? <BsDash /> : <BsPlus />}
                                </div>
                            </div>
                            <div className={`font-[400] text-[15px] leading-[24px] mt-4 transition-height duration-300 ${openAccordion === index ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'}`}>
                                {accordion.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Questions;
