import React from 'react'

function Order() {
  return (
    <>
      <div className='flex flex-row justify-center align-center gap-x-7 mt-12 mb-11'>
        <div className='rounded-xl border-2 order-img'>
                <img 
                  src='https://tse4.mm.bing.net/th?id=OIP.uYLZRXytpaJr-QyFW1QHEwHaEo&pid=Api&P=0&h=180' 
                  className="w-96 aspect-video rounded-xl object-fill"
                  />
                <div className='font-medium pt-4 text-lg pl-3 capitalize'>Order online</div>
                <div className='font-normal text-lg pb-5 pl-3 capitalize'>Stay home and order to your doorstep</div>
        </div>
        <div className='rounded-xl border-2 order-img'>
                <img 
                  src='https://tse1.mm.bing.net/th?id=OIP.HgDTLgXHFzEqevSQkVjYZwHaEH&pid=Api&P=0&h=180' 
                  className="w-96 aspect-video rounded-xl  object-fill"
                  />
                <div className='font-medium pt-4 text-lg  pl-3 capitalize'>Dining</div>
                <div className='font-normal text-lg pb-5 pl-3 capitalize'>view the city's favourite dining venus</div>
        </div>
        <div className='rounded-xl border-2 order-img'>
                <img 
                  src='https://tse3.mm.bing.net/th?id=OIP.Pv55Av-0EQBgwp06IYRkuAHaFj&pid=Api&P=0&h=180' 
                  className="w-96 aspect-video rounded-xl  object-fill"
                  />
                <div className='font-medium pt-4 text-lg  pl-3 capitalize'>live event</div>
                <div className='font-normal text-lg pb-5 pl-3 capitalize'>discover india's best events</div>
        </div>
      </div>
    </>
  )
}

export default Order
