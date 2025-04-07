import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
function Header() {
  return (
    <div>
      <div className='flex flex-row justify-around align-center'>
        <div className=''>
           <h1 className='text-2xl font-extrabold font-serif text-center py-2 text-black'>zomato</h1>
        </div>
        <div className=''>
        <div className='flex align-middle w-full h-10 bg-white rounded-xl my-2 gap-x-3 shadow-lg'>
                      <div>
                        <FaMapMarkerAlt className='inline-block ml-2 text-2xl text-red-800'/>
                        <input placeholder='cuttack Block B,jaypee greens' className='inline-block text-base mt-2 capitalized outline-none'/>
                        <MdOutlineArrowDropDown className='inline-block text-xl ml-2'/>
                      </div>
                      <div className='border'></div>
                      <div>
                        <CiSearch className='inline-block mr-2  text-2xl '/>
                        <input placeholder='Search for dish ' className='inline-block object-cover text-base mt-2 capitalize outline-none'/>
                      </div>
 
                    </div>
        </div>
        <div className='flex flex-row gap-x-7 text-gray-700 text-base'>
           <button>
            Login
           </button>
           <button>
           Signup
           </button>

        </div>
      </div>
    </div>
  )
}

export default Header
