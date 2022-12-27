import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { url } from "../../Route/Address"


const allProduct = () => {

    const{baseUrl,route,allProduct,deleteProduct}=url
   
    const[products,setProducts]=useState([])
   
    const getAllProduct=async()=>{
      await axios.get(baseUrl+route+allProduct,{ withCredentials: true }).then((res)=>{
        console.log(res?.data)
        setProducts(res?.data?.products)
      }).catch(err=>{
        console.error(err.message)
      })
    }

    const deleteProductByID=async(id)=>{
    await axios.post(baseUrl+route+deleteProduct,{id:id},{ withCredentials: true }).then((res)=>{
      const result = products.filter((item, index) => item._id !=id)
      // setProducts([res])
      alert(res.data.message)
     setProducts(result)

    }).catch(err=>console.error(err))
    }
  

    useEffect(() => {
getAllProduct()
    }, [])

    return [products,deleteProductByID]
}

export default allProduct