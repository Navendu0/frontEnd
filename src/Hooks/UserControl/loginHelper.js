import axios from "axios"
import { useContext, useState } from "react"
import { url } from "../../Route/Address"
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";


const loginHelper = () => {
  const { baseUrl, route, login } = url
  const navigate = useNavigate()

  const {isUser,setIsUser}=useContext(AppContext)
  

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const loginAction = async () => {
    await axios.post(baseUrl + route + login, {
      "username": email,
      "password": password
    }, { withCredentials: true }).then((res) => {
      // setCheck(res.data)
      if (!res.data.success) {
        return alert(res.data.message)
      }
    
      setIsUser(!isUser)
      navigate('/')

      return alert(res.data.message)

    }).catch(err => alert(err))
  }

  return [setEmail, setPassword, loginAction]
}

export default loginHelper