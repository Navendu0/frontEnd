import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { url } from "../../Route/Address";
import inputFieldHook from "./InputFieldHooks";



const categoryNbrandHooks = (type,setShowModal,inputText,setInputText) => {
    const { baseUrl, route, creteCategory,createBrand, getCategoryAndBrand,deleteBrand,deleteCategory } = url

       const [categoryList, setCategoryList] = useState([])


    const [brandList, setBrandList] = useState([])

    

    const saveCategoryOrBrand=()=>{

        if (type == "brand") {
            return axios.post(baseUrl+route+createBrand, { name: inputText.brandName },{ withCredentials: true }).
                then((res) => {
                    setBrandList(oldarray=>[...oldarray,res?.data?.brand])
                    alert(res.data.message)
                    setShowModal(false)
                    setInputText({...inputText,brandName:""})
                    
                }).catch(e =>{ 
                    alert(e.message)
                    console.error(e.message)
                })
        }
        if (type == "category") {
            return axios.post(baseUrl+route+creteCategory, { name: inputText.categoryName },{ withCredentials: true }).then((res) => {
                setCategoryList(oldarray=>[...oldarray,res?.data?.category])
                alert(res.data.message)
                setShowModal(false)
                setInputText({...inputText,categoryName:""})

            }).catch(e => {
                alert(e.message)
                console.error(e.message)  
                })
        }
    }

    const getCategory = async () => {
        await axios.get(baseUrl + route + getCategoryAndBrand,{ withCredentials: true }).then((res) => {
            console.log(res.data)
            setCategoryList(res?.data?.categories)
            setBrandList(res?.data?.brand)
        }).catch(err => {
            console.error(err)
        })

    }

    const deleteCategoryOrBrand=async(id)=>{
        if(type == "category"){
            return   await axios.post(baseUrl+route+deleteCategory,{id:id},{ withCredentials: true }).then((res)=>{
                const result = categoryList.filter((item, index) => item._id !=id)
                // setProducts([res])
                alert(res.data.message)
               setCategoryList(result)
          
              }).catch(err=>{
                alert('occur error while deleting '+err.message)
              })
        }
        if(type == "brand"){
            return   await axios.post(baseUrl+route+deleteBrand,{id:id},{ withCredentials: true }).then((res)=>{
                const result = brandList.filter((item, index) => item._id !=id)
                // setProducts([res])
                alert(res.data.message)

               setBrandList(result)
          
              }).catch(err=>{
                console.log(err)
                alert('occur error while deleting ')
              })
        }


          }    



    useEffect(() => {
        getCategory()
    }, [])

    


    return [categoryList, brandList,saveCategoryOrBrand,deleteCategoryOrBrand]
}


export default categoryNbrandHooks;