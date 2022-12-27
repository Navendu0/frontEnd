import axios from "axios"
import { useState } from "react"
import { RouterProvider } from "react-router-dom"
import { domain } from "../../../Util/Address"
import { url } from "../../Route/Address"

const registerHelper = () => {
  const { baseUrl, route, login, register, logOut } = url

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()


  const registerAction = async () => {
    if (password == confirmPassword) {
     return  alert("Please check password and Confirm password")
    }

    await axios.post(baseUrl + route + register, {
      "username": email,
      "password": password,
      "confirmPassword": confirmPassword
    }).then((res) => {
      console.log(res.data)

      if (!res.data.success) {
        alert(res.data.message)
      }

      // setTimeout(()=>{setHide(false)},3000)
    }).catch(err => console.log(err.message))

  }




  return [setEmail, setPassword, setConfirmPassword, registerAction]
}


export default registerHelper