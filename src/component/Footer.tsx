import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <div className=' mt-11'>
      <div className='explore '>
       <div className='flex flex-row justify-around align-middle mb-4 mt-7'>
         <div className=''>
            <div className='logo text-5xl font-extrabold font-serif text-start'>
                zomato
            </div>
            
         </div>
         <div className='flex flex-row gap-x-5'>
             <button className='capitalized outline-none'>
             <select className='rounded-lg px-5 py-1 text-lg'>
	              <option value="">India</option>
	              <option value="AF">UAE</option>
              </select>
             </button>
             <button className='capitalized text-lg px-5 py-1 outline-none'>
             <select className='rounded-lg px-5 py-1 text-lg'>
	              <option value="eng">English</option>
	              <option value="hindi">Hindi</option>
              </select>
             </button>
         </div>
       </div>
       <div className='flex flex-row justify-around align-middle mb-7'>
        <div className=''>
             <h1 className='font-bold uppercase text-base py-3'>about zomato</h1>
             <div className='text-sm text-start capitalized text-gray-500 py-2'>who we are</div>
             <div className='text-sm text-start capitalized text-gray-500 py-1'>blog</div>
             <div className='text-sm text-start capitalized text-gray-500 py-1'>work with us</div>
             <div className='text-sm text-start capitalized text-gray-500 py-1'>investor relation</div>
             <div className='text-sm text-start capitalized text-gray-500 py-1'>report fraud</div>
             <div className='text-sm text-start capitalized text-gray-500 py-1'>press kit</div>
             <div className='text-sm text-start capitalized text-gray-500 py-1'>contact us</div>
        </div>
        <div className=''>
            <h1 className='font-bold uppercase text-base py-3'>zomaverse</h1>
             <div className='text-sm text-start capitalized text-gray-500 py-2'>zomato</div>
             <div className='text-sm text-start capitalized text-gray-500 py-1'>blinkit</div>
             <div className='text-sm text-start capitalized text-gray-500 py-1'>Feeding india</div>
             <div className='text-sm text-start capitalized text-gray-500 py-1'>Hyper pure</div>
             <div className='text-sm text-start capitalized text-gray-500 py-1'>zomato live</div>
             <div className='text-sm text-start capitalized text-gray-500 py-1'>zomaland</div>
             <div className='text-sm text-start capitalized text-gray-500 py-1'>weather union</div>
        </div>
        <div className=''>
        <h1 className='font-bold uppercase text-base py-3'>For Resturants</h1>
        <div className='text-sm text-start capitalized text-gray-500 py-2'>partner with us</div>
        <div className='text-sm text-start capitalized text-gray-500 py-1'>Apps for you</div>
        </div>
        <div className=''>
        <h1 className='font-bold uppercase text-base py-3'>Learn more</h1>
        <div className='text-sm text-start capitalized text-gray-500 py-2'>privacy</div>
        <div className='text-sm text-start capitalized text-gray-500 py-1'>security</div>
        <div className='text-sm text-start capitalized text-gray-500 py-1'>terms</div>
        <div className='text-sm text-start capitalized text-gray-500 py-1'>site map</div>
        </div>
        <div className=''>
        <h1 className='font-bold uppercase text-base py-3'>social links</h1>
      <div className='flex flex-row gap-x-3 text-xl '>
      <span><BsLinkedin /></span>
        <span><FaInstagramSquare /></span>
        <span><FaTwitter /></span>
        <span><FaYoutube /></span>
      </div>
      <div className="flex flex-col gap-y-4 mt-5">
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-green-500 hover:bg-green-700 rounded-md">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H9a2 2 0 01-2-2V10.338a2 2 0 012-2.052l.272.273a2 2 0 003.536 0l.273-.272a2 2 0 012-2.052V3m2 18.048A2.997 2.997 0 0117 21H7a2.997 2.997 0 01-2.998-2.998V10.338a2 2 0 012-2.052l.272.273a2 2 0 003.536 0l.273-.272a2 2 0 012-2.052V3M11 19.944H9a2 2 0 01-2-2V5a2 2 0 012-2h2a2 2 0 012 2v12.944"></path></svg>
                    Google Play
                </a>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-md">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17.54v-5.217l-3.5 2.3a1 1 0 000 1.591l2.3 3.5A1 1 0 009 17.54z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10.07v-5.217l-3.5 2.3a1 1 0 000 1.591l2.3 3.5A1 1 0 0015 10.07z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21h11a2 2 0 002-2v-5a2 2 0 00-2-2h-11a2 2 0 00-2 2v5a2 2 0 002 2z"></path></svg>
                    App Store
                </a>
            </div>
       </div>
    </div>
    </div>
  </div>
  )
}

export default Footer
