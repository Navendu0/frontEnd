import React, { useState } from 'react'

function DropDownHelper({ type, list,setShowModal,setType,inputText,setInputText}) {
  const [show, setShow] = useState(false)
 
  function showModel(){
    setShowModal(true)
      setType(type)
  }


  return (
    <div className=" inline-block text-left  ">
      <div>
        <button
        type='button'
          onClick={() => setShow(!show)}
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 uppercase focus:ring-offset-gray-100"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
        {inputText?.[type+"Name"]?type+" : "+inputText?.[type+"Name"]+" (change click)":"select "+type}
         
          {/* Heroicon name: mini/chevron-down */}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {/*
      Dropdown menu, show/hide based on menu state.
  
      Entering: "transition ease-out duration-100"
  From: "transform opacity-0 scale-95"
  To: "transform opacity-100 scale-100"
      Leaving: "transition ease-in duration-75"
  From: "transform opacity-100 scale-100"
  To: "transform opacity-0 scale-95"
    */}
      {show && <div
        className=" sm:absolute
         w-[20rem]
         sm:w-[16rem]
         lg:w-[39rem]
          z-10 mt-2  origin-top-right rounded-md
         bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none 
        
         "
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="
        py-1 max-h-96 overflow-x-auto" role="none">
          {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}



          {list && list.map((props, index) => (
            <a
            onClick={()=>
            {setInputText({...inputText,[type+"Name"]:props?.name})
            setShow(!show)
            }}
              key={index}
              className="text-gray-700 block px-4 py-1 text-sm cursor-pointer
              bg-gray-300
              m-2 rounded-md
              "
              role="menuitem"
              tabIndex={-1}
              id="menu-item-0"
            >
              {props?.name}
            </a>
          ))}




          <div>
            <button
            type='button'
              onClick={showModel}
              className="
              text-white block w-full px-4 py-2  text-left uppercase text-sm bg-slate-600 rounded-lg"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-3"
            >
              Add New {type}
            </button>
          </div>
        </div>
      </div>}
    </div>


  )
}

export default DropDownHelper