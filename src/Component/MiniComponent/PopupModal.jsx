import React from 'react'
import InputHelper from './InputHelper'

function PopupModal({showModal,setShowModal,type,inputText,setInputText,save}) {

  console.log(type)
 
  return (
    <>
  
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex 
            rounded-b
            overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-dashed  focus:outline-none"
          >
            <div className="relative w-11/12 
            sm:w-2/4
            p-2 rounded-lg
            my-6 mx-auto max-w-3xl
            bg-white
            ">
              {/*content*/}
              <div className=" p-2 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none  border-2 border-dashed border-gray-300 ">
                {/*header*/}
                 
               <div className='flex justify-between '>
               <h1 className=' text-black text-lg font-semibold oldstyle-nums uppercase '>
                    Create  {type} 
                 </h1>

                 <button
                    className="text-red-500 background-transparent font-bold uppercase  py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>

               </div> 

                 

                {/*body*/}
              <InputHelper buttonNeed={true} rowD={4} hint={"Enter "+type+" Name"} inputName={type+"Name"} setValue={setInputText} value={inputText} save={save} />
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export default PopupModal