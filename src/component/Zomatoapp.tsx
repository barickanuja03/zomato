import React from 'react'

function Zomatoapp() {
  return (
    <div className='bg-red-50'>
      <div className="container mx-auto p-10 flex flex-row justify-center gap-x-5 my-5">
        <div>
            <img src='https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png' className='w-72 aspect-square'/>
        </div>
        <div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Get the Zomato app</h1>
        <p className="text-gray-600 mb-6 text-lg">We will send you a link, open it on your phone to download the app</p>
        
        <div className="flex items-center space-x-4 mb-6">
            <input type="radio" id="email" name="contact" value="email" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"/>
            <label className="ml-2 text-gray-700 text-lg">Email</label>
            <input type="radio" id="phone" name="contact" value="phone" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300" />
            <label className="ml-2 text-gray-700 text-lg">Phone</label>
        </div>
            <input type="text" placeholder="Email" className="mr-5 px-4 py-2 rounded-md border-2 outline-none text-base inline-block mb-6" />

        <span className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-base">Share App Link</span>

        <div className="mt-8">
            <p className="text-gray-600 mb-2 text-lg">Download app from</p>
            <div className="flex space-x-4">
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

export default Zomatoapp
