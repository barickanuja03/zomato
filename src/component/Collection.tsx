import React from 'react'
import { TiArrowSortedDown } from "react-icons/ti";
function Collection() {
  return (
    <div>
      <div className='mb-11'>
        <h1 className='text-3xl font-bold ml-48'>Collections</h1>
        <div className='flex flex-row justify-around align-middle'>
          <div>
               <div className='text-base text-start capitalized text-gray-500 py-2'>
               Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi NCR, based on trends
               </div>
          </div>
          <div className=''>
              <div className='text-red-700 text-base'>All collections in delhi NCR</div>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center gap-x-10 mt-11'>
        <div className='order-img rounded-lg'>
           <img src='https://tse2.mm.bing.net/th?id=OIP.AFvhjAtUsIlRVe0gPWS0mwHaE8&pid=Api&P=0&h=180' 
           className='collection-img w-full h-56'/>
           <h1 className='text-h1'>Top Trending spots</h1>
           <h1 className='text-h2'><span className='inline-block'>37places</span><TiArrowSortedDown className='inline-block'/></h1>
        </div>
          <div>
          <div className='order-img'>
           <img src='https://tse3.mm.bing.net/th?id=OIP.aZ9xUNsVyZAE4LI-0bjXDwHaFw&pid=Api&P=0&h=180' 
           className='collection-img w-full h-56'/>
           <h1 className='text-h1'>Top Trending spots</h1>
           <h1 className='text-h2'><span className='inline-block'>37places</span><TiArrowSortedDown className='inline-block'/></h1>
        </div>
        </div>
        <div>
        <div className='order-img'>
           <img src='https://tse2.mm.bing.net/th?id=OIP.RyuV9bcGLrFnpO88ZSAR1wHaFj&pid=Api&P=0&h=180' 
           className='collection-img w-full h-56'/>
           <h1 className='text-h1'>Top Trending spots</h1>
           <h1 className='text-h2'><span className='inline-block'>37places</span><TiArrowSortedDown className='inline-block'/></h1>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
