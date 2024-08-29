import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
function Herosection() {
  return (
    <>
       <div className='herosection'>
          <header className='w-full h-11'>
            <div className='header-section flex flex-row justify-around align-middle py-7 text-white'>
                <div className='get-app text-sm'>
                    Get the app
                </div>
                  <ul className='flex flex-row gap-x-7 text-xl'>
                      <li><a href="#">Investor Relation</a></li>
                      <li><a href="#">Add Resturant</a></li>
                      <li><a href="#">Login</a></li>
                      <li><a href="#">Sign Up</a></li>
                  </ul>
            </div>
          </header>
          <div className='paragraph '>
                <div className='texts'>
                    <div className='text-8xl font-extrabold font-serif text-center py-2 text-white'>zomato</div>
                    <div className='text-4xl font-bold font-mono text-center py-1 capitalize  text-white'>Discover the best food and drinks in cuttack</div>
                    <div className='flex align-middle h-10 bg-white rounded-xl my-4 gap-x-3'>
                      <div className=''>
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
          </div>
       </div>
    </>
  )
}

export default Herosection
