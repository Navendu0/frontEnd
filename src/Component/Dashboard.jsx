import React, { useState } from 'react'

// import AppContext from '../App'

function Dashboard() {

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
    {/* component */}
<div className='w-full h-screen text-3xl bg-gray-200 flex justify-center items-center ' >
   <h1 className='text-transparent 
   bg-clip-text bg-gradient-to-r to-red-600 from-blue-700 text-5xl md:text-7xl lg:text-9xl font-bold p-2 lg:p-5'>Coming Soon </h1>
</div>
  </>
  
  )
}

export default Dashboard



{/* <div className="w-full px-4 py-5 bg-gray-300 rounded-lg shadow">
<div className="text-sm font-medium text-gray-500 truncate">
  Total Profit
</div>
<div className="mt-1 text-3xl font-semibold text-gray-900">
  $ 450k
</div>
</div>
<div className="w-full px-4 py-5 bg-gray-300 rounded-lg shadow">
<div className="text-sm font-medium text-gray-500 truncate">
  Total Orders
</div>
<div className="mt-1 text-3xl font-semibold text-gray-900">
  20k
</div>
</div> */}

// <div className=" bg-gray-100 p-1 w-screen h-12 ">
    
// {showSidebar ? (
//     <button
//       className="flex text-4xl text-white items-center cursor-pointer fixed left-5 top-2 z-50 "
//       onClick={() => setShowSidebar(!showSidebar)}
//     >
//       x
//     </button>
//   ) : (
//     <svg
//       onClick={() => setShowSidebar(!showSidebar)}
//       className="fixed  z-30 flex items-center cursor-pointer left-1 top-2 "
//       fill="#2563EB"
//       viewBox="0 0 100 80"
//       width="40"
//       height="40"

//     >
//       <rect width="100" height="10"></rect>
//       <rect y="30" width="100" height="10"></rect>
//       <rect y="60" width="100" height="10"></rect>
//     </svg>
//   )}

//   <div className=' flex justify-end p-1 '>
//     logo
//   </div>


// {/* <Sidebar /> */}


// <div className={`top-0 left-0 w-[70vw] bg-blue-600  p-10 pl-20 text-white fixed h-full z-40
// lg:w-[20vw]
//  sm:w-[30vw]
//  sm:visible
 

//  ${showSidebar ? "visable" : "invisible"
//   }      
//   `}>

//   <h2 className="mt-20 text-4xl font-semibold text-white">I am a sidebar</h2>
// </div>


// </div>