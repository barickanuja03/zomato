
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Help = () => {
    const router = useRouter()
    const [openIndex, setOpenIndex] = useState(0); // Set initial openIndex to 0

    const toggleFAQ = (index: any) => {

        setOpenIndex(openIndex === index ? null : index);
    };

    return (
            <section className='w-full  pb-5 pt-24 flex items-start justify-center bg-white'>
                <div className='lg:w-[90%] w-full h-full main-container flex flex-col gap-y-10 shadow-md'>
                    <div className='flex flex-col w-full gap-y-5 mb-5'>
                        {faqData.map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex === index}
                                onClick={() => toggleFAQ(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
    )
}

export default Help

const FAQItem = ({ question, answer, isOpen, onClick }: any) => (
    <div className='w-full h-fit rounded-lg px-6 py-2 mb-3'>
        <div className='w-full flex items-center justify-between'>
            <button
                className='text-left w-full py-1 lg:text-lg text-lg  font-normal text-black focus:outline-none'
                onClick={onClick}
            >
                {question}
            </button>
            <IoIosArrowDown className="text-xl text-black ${isOpen && `-rotate-180} duration-300 `" />
        </div>
       <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className='overflow-hidden'
        >
            <p className='text-sm font-normal tracking-wider text-gray-400  py-2'>{answer}</p>
         </motion.div>
    </div>
);

const faqData = [
    {
        question: 'Popular cuisines near me',
        answer: 'Bakery food near me · Beverages food near me · Biryani food near me · Burger food near me . Chinese food near me · Coffee food near me · Continental food near me · Desserts food near me · Italian food near me · Mithai food near me · Popular cuisines near me · North Indian food near me · Pasta food near me · Pizza food near me · Rolls food near me · Sandwich food near me · Shake food near me · South Indian food near me · Street food near me'
    },
    {
        question: 'Popular restaurant types near me',
        answer: 'Bakery food near me · Beverages food near me · Biryani food near me · Burger food near me . Chinese food near me · Coffee food near me · Continental food near me · Desserts food near me · Italian food near me · Mithai food near me · Popular cuisines near me · North Indian food near me · Pasta food near me · Pizza food near me · Rolls food near me · Sandwich food near me · Shake food near me · South Indian food near me · Street food near me'
    },
    {
        question: 'Top Restaurant Chains',
        answer: 'Bakery food near me · Beverages food near me · Biryani food near me · Burger food near me . Chinese food near me · Coffee food near me · Continental food near me · Desserts food near me · Italian food near me · Mithai food near me · Popular cuisines near me · North Indian food near me · Pasta food near me · Pizza food near me · Rolls food near me · Sandwich food near me · Shake food near me · South Indian food near me · Street food near me'
    },
    {
        question: 'Cities We Deliver To',
        answer: 'Our privacy policy is available at the bottom of the website. Click on the "Privacy Policy" link to read it in detail.'
    }
];
