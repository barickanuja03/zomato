import React from 'react'
import { IoIosArrowForward} from "react-icons/io";
function Locality() {
  return (
    <div className='mb-10'>
       <div>
       <h1 className='text-3xl font-bold ml-48 mt-10'>Popular localities in and around Delhi NCR</h1>
       </div>
       <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md p-4">
            <div className="mt-2 flex items-center justify-between">
                <div>
                <h3 className="text-xl font-bold mb-2">Connaught Place</h3>
                <p className="text-gray-600 text-lg">286 places</p>
                </div>
                <div>
                <IoIosArrowForward className="text-xl" />
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
            <div className="mt-2 flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold mb-2">Sector 29</h3>
                <p className="text-gray-600 text-lg">148 places</p>
                </div>
                <div>
                <IoIosArrowForward className="text-xl" />
                </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
            <div className="mt-2 flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold mb-2">Sector 18, Noida</h3>
                <p className="text-gray-600 text-lg">235 places</p>
            </div>
                <div>
                <IoIosArrowForward className="text-xl" />
                </div>
            </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
            <div className="mt-2 flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold mb-2">Rajouri Garden</h3>
                <p className="text-gray-600 text-lg">397 places</p>
                </div>
                <div>
                <IoIosArrowForward className="text-xl" />
                </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
            <div className="mt-2 flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold mb-2">Saket</h3>
                <p className="text-gray-600 text-lg">357 places</p>
                </div>
                <div>
                  
                <IoIosArrowForward className="text-xl" />
                </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
            <div className="mt-2 flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold mb-2">DLF Cyber City</h3>
                <p className="text-gray-600 text-lg">186 places</p>
                </div>
                <div>
                  
                <IoIosArrowForward className="text-xl" />
                </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
            <div className="mt-2 flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold mb-2">Golf Course Road</h3>
                <p className="text-gray-600 text-lg">164 places</p>
                </div>
                <div>
                    
                <IoIosArrowForward className="text-xl" />
                </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
            <div className="mt-2 flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold mb-2">DLF Phase 4</h3>
                <p className="text-gray-600 text-lg">240 places</p>
                </div>
                <div>
                  
                <IoIosArrowForward className="text-xl" />
                </div>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="mt-2 flex items-center justify-between">
                   <a href='#' className='text-xl font-bold mb-2'>See More</a>
                <IoIosArrowForward className="text-xl" />
                </div>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Locality
