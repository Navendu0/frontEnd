import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { logoutHelper } from '../Hooks/UserControl/logOutHelper';


function Menu({comp}) {
    const [showSidebar, setShowSidebar] = useState(false);

    const navigate = useNavigate();

    const[logOutAction]=logoutHelper()

  return (
    <>

    {showSidebar ? 
      <svg
         onClick={() => setShowSidebar(!showSidebar)}
                  className="relative z-30 flex items-center cursor-pointer  top-1 sm:fixed visible sm:invisible w-screen py-1 
                  rounded-sm
                  bg-gray-200 "
       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30" height="30" overflow="visible" stroke="black" stroke-width="10" stroke-linecap="round">
       <line x1="0" y1="0" x2="50" y2="50" />
       <line x1="50" y1="0" x2="0" y2="50" />
    </svg> :  <svg
                  onClick={() => setShowSidebar(!showSidebar)}
                  className="relative z-30 flex items-center cursor-pointer  top-1 sm:fixed visible sm:invisible w-screen py-1 
                  rounded-sm
                  bg-gray-200 "
                  fill="black"
                  viewBox="0 0 100 80"
                  width="30"
                  height="30"
    
                >
                  <rect width="100" height="10"></rect>
                  <rect y="30" width="100" height="10"></rect>
                  <rect y="60" width="100" height="10"></rect>
                </svg>  }
    
    
         <div className='flex max-h-screen'>
         
          <div className={`flex flex-col h-screen p-3 bg-gray-300 shadow w-60  fixed    sm:visible 
          mt-1
          sm:relative sm:mt-0
           ${showSidebar?"visible":"invisible"} `}>
    
            <div className="space-y-3">
              <div className="flex items-center">
                <h2 className="text-xl font-bold">Dashboard</h2>
              </div>
              <div className="flex-1">
                <ul className="pt-2 pb-4 space-y-1 text-sm">
      {/*............. Home  .................*/}
                  <li 
                onClick={()=>{
                  navigate("/")
                  setShowSidebar(!showSidebar)
                  }}
                  className="rounded-sm cursor-pointer">
                    <a
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      <span>Home</span>
                    </a>
                  </li>
           {/*............. all product .................*/}
                  <li
                   onClick={()=>{navigate("/allProduct")
                   setShowSidebar(!showSidebar)}}
                   className="rounded-sm cursor-pointer">
                    <a
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.012 18.708l-4.318-1.07-3.981 3.871c-.326.317-.755.491-1.209.491-.85 0-1.504-.691-1.504-1.502v-4.519l-4.13-8.979h-1.37c-.311 0-.5-.26-.5-.5 0-.239.189-.5.5-.5h2.025l4.194 9.132 10.38 2.569c.363-1.544 1.75-2.695 3.404-2.695 1.93 0 3.497 1.567 3.497 3.497s-1.567 3.497-3.497 3.497c-1.861 0-3.385-1.457-3.491-3.292zm3.488-2.708c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm-13.5.227v4.271c0 .48.612.688 1.017.294l3.534-3.437-4.551-1.128zm13.503 1.276c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-13.503-12.503h3v-3h5.999v3h3.001v3.003h3c-.005.008-3.399 4.952-4.968 7.235-.522.762-1.41.983-2.113.814l-6.592-1.57c-.6-.143-1.1-.554-1.355-1.115-.79-1.725-2.455-5.367-2.455-5.367l2.483.001v-3.001zm9.208 9.673c-.203.296-.599.512-1.057.406l-6.593-1.57c-.301-.072-.548-.274-.678-.558l-1.806-3.951 14.027.002-3.893 5.671zm-3.208-6.673v-2h-5v2h5zm5 0v-2h-4v2h4zm-3.001-3v-2h-3.999v2h3.999z"
                        />
                      </svg>
                      <span>All Product</span>
                    </a>
                  </li>
                
                {/*............. add product .................*/}

                  <li onClick={()=>{navigate('/addProduct')
                  setShowSidebar(!showSidebar)}}
                  className="rounded-sm cursor-pointer">
                    <a
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 22 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.5 0c6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5-11.5-5.153-11.5-11.5 5.153-11.5 11.5-11.5zm0 1c5.795 0 10.5 4.705 10.5 10.5s-4.705 10.5-10.5 10.5-10.5-4.705-10.5-10.5 4.705-10.5 10.5-10.5zm.5 10h6v1h-6v6h-1v-6h-6v-1h6v-6h1v6z"
                        />
                      </svg>
                      <span>Add Product</span>
                    </a>
                  </li>
   {/* ...........Brand or category ..........*/}
                  <li 
                  onClick={()=>{navigate('/brandorcategory')
                  setShowSidebar(!showSidebar)}}
                  className="rounded-sm cursor-pointer">
                    <a
                      className="flex items-center p-2 space-x-3 rounded-md"
                    >
                   <svg clipRule="evenodd" fillRule="evenodd" 
                   className='w-6 h-6'
                   strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.891 19.498h-13.782l-1.52-9.501h16.823zm-14.306-12.506h14.868l-.227 1.506h-14.415zm.993-2.494h12.882l-.13.983h-12.623zm16.421 4.998c0-.558-.456-.998-1.001-.998h-.253c.309-2.064.289-1.911.289-2.009 0-.58-.469-1.008-1-1.008h-.189c.193-1.461.187-1.399.187-1.482 0-.671-.575-1.001-1.001-1.001h-14.024c-.536 0-1.001.433-1.001 1 0 .083-.008.013.188 1.483h-.19c-.524 0-1.001.422-1.001 1.007 0 .101-.016-.027.29 2.01h-.291c-.569 0-1.001.464-1.001.999 0 .118-.105-.582 1.694 10.659.077.486.496.842.988.842h14.635c.492 0 .911-.356.988-.842 1.801-11.25 1.693-10.54 1.693-10.66z" fillRule="nonzero"/></svg>
                      <span>Brand / Category</span>
                    </a>
                  </li>

     {/*............. LogOut .................*/}
                  <li className="rounded-sm">
                    <a
                     onClick={logOutAction}
                      className="flex items-center p-2 space-x-3 rounded-md cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                        />
                      </svg>
                      <span>Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
    
          <div className="container mx-2 ">
            {/* <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols- "> */}
               
               {/*............. body component goes here ..........*/}

               {comp}
            
            {/* </div> */}
          </div>
    
        </div>
    
        </>
  )
}

export default Menu