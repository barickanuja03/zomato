import React,{useState} from 'react'

function Explore() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
      };
  return (
    <div className='explore'>
          <div>
       <h1 className='text-3xl font-bold  mt-10 mb-5'>Explore options near me</h1>
       </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div
        className="flex items-center justify-between px-4 py-3 cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg font-medium text-gray-900">
          Popular cuisines near me
        </h2>
        <svg
          className={`transform ${isOpen ? 'rotate-180' : '' } w-10 h-10`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="px-4 py-3 bg-gray-100">
          <p className="text-gray-700 text-base">
            Bakery food near me · Beverages food near me · Biryani food near me ·
            Burger food near me · Chinese food near me · Coffee food near me ·
            Continental food near me · Desserts food near me · Italian food near
            me · Mithai food near me · Popular cuisines near me · North
            Indian food near me · Pasta food near me · Pizza food near me ·
            Rolls food near me · Sandwich food near me · Shake food near me ·
            South Indian food near me · Street food near me
          </p>
        </div>
      )}
    </div>
    {/* <div className="bg-white rounded-lg shadow-md overflow-hidden mt-5">
      <div
        className="flex items-center justify-between px-4 py-3 cursor-pointer"
        
      >
        <h2 className="text-lg font-medium text-gray-900">
          Popular cuisines near me
        </h2>
        <svg
          className={`transform ${isOpen ? 'rotate-180' : '' } w-10 h-10`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="px-4 py-3 bg-gray-100">
          <p className="text-gray-700">
            Bakery food near me · Beverages food near me · Biryani food near me ·
            Burger food near me · Chinese food near me · Coffee food near me ·
            Continental food near me · Desserts food near me · Italian food near
            me · Mithai food near me · Popular cuisines near me · North
            Indian food near me · Pasta food near me · Pizza food near me ·
            Rolls food near me · Sandwich food near me · Shake food near me ·
            South Indian food near me · Street food near me
          </p>
        </div>
      )}
    </div> */}
    </div>
  )
}

export default Explore
