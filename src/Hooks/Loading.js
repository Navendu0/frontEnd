import { useState } from "react"

const loadingState=()=>{

    const [loading,setLoading]=useState({
        isload:false,
        message:""
    })

    const changeLoading=(isload,message)=>{
        setLoading({loading,isload:true,message:"message"})
    }

 

    return[loading,changeLoading]
 
}

export default loadingState