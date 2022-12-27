import React, { useState } from 'react'

import Alerts from '../Alert/Alerts'
import registerHelper from '../../Hooks/UserControl/registerHelper'

import { useNavigate } from "react-router-dom";

function Register() {
  
  const navigate = useNavigate()

    const [check, setCheck] = useState(null)

    const[setEmail,setPassword,setConfirmPassword,registerAction] = registerHelper()

    

    return (
        <div>
         <Alerts success={check} message={"kkkkkkkkkkkk"}/>
         <>
  {/* component */}
  <div
    className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
    style={{
      backgroundImage:
        'url("https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80")'
    }}
  >
    <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
      <div className="text-white">
        <div className="mb-8 flex flex-col items-center">

 {/* .................company LOGO........ */}

          <img
            src="https://www.pngmart.com/files/17/Cute-Anime-Girl-Transparent-PNG.png"
            width={150}
            height={150}
            alt=""
           
          />
{/* .................company name........ */}

          <h1 className="mb-2 text-2xl">
            {"company Name"}
          </h1>
          <span className="text-gray-300">Register Details</span>
        </div>
        <form>

   {/* .............. Email field........ */}

          <div className="mb-4 text-lg ">

            <input
              className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="text"
              name="name"
              placeholder="Enter Email"
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
           {/* .............. password field........ */}

          <div className="mb-4 text-lg">

      
            <input
              className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="Password"
              name="name"
              placeholder=" Password"
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
           {/* ..............confirm password field........ */}

          <div className="mb-4 flex justify-center text-lg">

          <input
              className="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
              type="Password"
              name="name"
              placeholder=" Confirm password"
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mt-8 flex justify-center text-lg text-black">

{/* ................register button ........ */}

            <button
            onClick={registerAction}
              type="button"
              className="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
            >
              Register
            </button>
          </div>
        </form>
          
          <div className='flex justify-center'> 
          <h1 className="text-white font-normal mt-5">Alredy Registered 
            </h1> <button
            onClick={()=>navigate('/login')}
              type="button"
              className="rounded-xl bg-yellow-400 bg-opacity-50 px-2  text-white shadow-xl backdrop-blur-md    transition-colors
               ml-3 mt-3 py-2
               duration-300 hover:bg-yellow-600"
            >
              Login
            </button>
          </div>
         

            
      </div>
    </div>
  </div>
</>
        </div>
    )
}

export default Register